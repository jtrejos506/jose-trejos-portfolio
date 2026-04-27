import {
  FPS,
  SHIP_SIZE,
  SHIP_THRUST,
  FRICTION,
  LASER_MAX,
  LASER_SPD,
  LASER_DIST,
  ROID_NUM,
  ROID_SIZE,
  ROID_SPD,
  ROID_VERT,
  ROID_JAG,
  SHIP_EXPLODE_DUR,
  SHIP_INV_DUR,
  SHIP_BLINK_DUR,
  SAVE_KEY_SCORE,
} from "./constants";

import { Ship, Asteroid, Laser, GameState } from "./types";
import { Sound } from "./sound";

export class Game {
  private ctx: CanvasRenderingContext2D;
  private roids: Asteroid[] = [];
  private fxLaser = new Sound("/sounds/laser.m4a", 5, 0.5);
  private fxExplode = new Sound("/sounds/explode.m4a", 1, 0.5);
  private fxThrust = new Sound("/sounds/thrust.m4a", 1, 0.5);
  private fxHit = new Sound("/sounds/hit.m4a", 5, 0.5);
  private animationId?: number;
  private paused = false;
  public ship!: Ship;

  constructor(
    private canvas: HTMLCanvasElement,
    onStateChange?: (state: GameState) => void,
  ) {
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas not supported");
    this.ctx = ctx;

    this.onStateChange = onStateChange;

    this.init();
    this.loop();
  }

  private init() {
    this.loadHighScore();
    this.ship = this.newShip();
    this.createAsteroidBelt();
    this.emitState();
  }

  private newShip(): Ship {
    return {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      a: Math.PI / 2,
      r: SHIP_SIZE / 2,
      blinkNum: Math.ceil(SHIP_INV_DUR / SHIP_BLINK_DUR),
      blinkTime: Math.ceil(SHIP_BLINK_DUR * FPS),
      canShoot: true,
      dead: false,
      explodeTime: 0,
      lasers: [],
      rot: 0,
      thrusting: false,
      thrust: { x: 0, y: 0 },
    };
  }

  private createAsteroidBelt() {
    this.roids = [];
    for (let i = 0; i < ROID_NUM + this.state.level; i++) {
      this.roids.push(
        this.newAsteroid(
          Math.random() * this.canvas.width,
          Math.random() * this.canvas.height,
          ROID_SIZE / 2,
        ),
      );
    }
  }

  private newAsteroid(x: number, y: number, r: number): Asteroid {
    const roid: Asteroid = {
      x,
      y,
      xv: ((Math.random() * ROID_SPD) / FPS) * (Math.random() < 0.5 ? 1 : -1),
      yv: ((Math.random() * ROID_SPD) / FPS) * (Math.random() < 0.5 ? 1 : -1),
      a: Math.random() * Math.PI * 2,
      r,
      offs: [],
      vert: Math.floor(Math.random() * (ROID_VERT + 1) + ROID_VERT / 2),
    };

    for (let i = 0; i < roid.vert; i++) {
      roid.offs.push(Math.random() * ROID_JAG * 2 + 1 - ROID_JAG);
    }

    return roid;
  }

  private loop = () => {
    if (!this.paused) {
      this.update();
    }

    this.animationId = requestAnimationFrame(this.loop);
  };

  private update() {
    const blinkOn = this.ship.blinkNum % 2 === 0;

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.handleShip();
    this.updateLasers();
    this.updateAsteroids();

    this.checkCollisions();

    if (this.ship.blinkNum > 0) {
      this.ship.blinkTime--;

      if (this.ship.blinkTime === 0) {
        this.ship.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
        this.ship.blinkNum--;
      }
    }

    if (this.ship.explodeTime > 0) {
      this.drawExplosion();
      this.ship.explodeTime--;

      // when explosion ends
      if (this.ship.explodeTime === 0) {
        if (!this.state.isGameOver) {
          this.ship = this.newShip();
        }
      }
    } else {
      if (blinkOn) this.drawShip();
    }

    this.drawLasers();
    this.drawAsteroids();
  }

  private handleShip() {
    if (this.ship.explodeTime > 0 || this.state.isGameOver) return;

    if (this.ship.thrusting) {
      this.ship.thrust.x += (SHIP_THRUST * Math.cos(this.ship.a)) / FPS;
      this.ship.thrust.y -= (SHIP_THRUST * Math.sin(this.ship.a)) / FPS;
      this.drawThruster();
      this.fxThrust.play();
    } else {
      this.ship.thrust.x -= (FRICTION * this.ship.thrust.x) / FPS;
      this.ship.thrust.y -= (FRICTION * this.ship.thrust.y) / FPS;
      this.fxThrust.stop();
    }

    this.ship.x += this.ship.thrust.x;
    this.ship.y += this.ship.thrust.y;
    this.ship.a += this.ship.rot;

    if (this.ship.x < 0) this.ship.x = this.canvas.width;
    if (this.ship.x > this.canvas.width) this.ship.x = 0;
    if (this.ship.y < 0) this.ship.y = this.canvas.height;
    if (this.ship.y > this.canvas.height) this.ship.y = 0;
  }

  private updateLasers() {
    for (let i = this.ship.lasers.length - 1; i >= 0; i--) {
      const l = this.ship.lasers[i];

      l.x += l.xv;
      l.y += l.yv;

      l.dist += Math.sqrt(l.xv * l.xv + l.yv * l.yv);

      if (l.dist > LASER_DIST * this.canvas.width) {
        this.ship.lasers.splice(i, 1);
      }
    }
  }

  private updateAsteroids() {
    for (const r of this.roids) {
      r.x += r.xv;
      r.y += r.yv;

      if (r.x < 0) r.x = this.canvas.width;
      if (r.x > this.canvas.width) r.x = 0;
      if (r.y < 0) r.y = this.canvas.height;
      if (r.y > this.canvas.height) r.y = 0;
    }
  }

  private checkCollisions() {
    // skip collisions if blinking (invincible)
    if (this.ship.blinkNum > 0 || this.ship.explodeTime > 0) {
      return;
    }

    // Ship vs Asteroids
    for (const roid of this.roids) {
      const dx = this.ship.x - roid.x;
      const dy = this.ship.y - roid.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.ship.r + roid.r) {
        this.handleShipHit();
        return;
      }
    }

    // Lasers vs Asteroids
    for (let i = this.roids.length - 1; i >= 0; i--) {
      const roid = this.roids[i];

      for (let j = this.ship.lasers.length - 1; j >= 0; j--) {
        const laser = this.ship.lasers[j];

        const dx = laser.x - roid.x;
        const dy = laser.y - roid.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < roid.r + 2) {
          this.fxHit.play();
          this.destroyAsteroid(i);
          this.ship.lasers.splice(j, 1);
          break;
        }
      }
    }

    if (this.roids.length === 0) {
      this.state.level++;
      this.createAsteroidBelt();
      this.emitState();
    }
  }

  private drawShip() {
    const { x, y, a, r } = this.ship;

    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();

    this.ctx.moveTo(
      x + (4 / 3) * r * Math.cos(a),
      y - (4 / 3) * r * Math.sin(a),
    );

    this.ctx.lineTo(
      x - r * ((2 / 3) * Math.cos(a) + Math.sin(a)),
      y + r * ((2 / 3) * Math.sin(a) - Math.cos(a)),
    );

    this.ctx.lineTo(
      x - r * ((2 / 3) * Math.cos(a) - Math.sin(a)),
      y + r * ((2 / 3) * Math.sin(a) + Math.cos(a)),
    );

    this.ctx.closePath();
    this.ctx.stroke();
  }

  private drawThruster() {
    this.ctx.fillStyle = "red";
    this.ctx.strokeStyle = "yellow";
    this.ctx.lineWidth = SHIP_SIZE / 10;
    this.ctx.beginPath();
    this.ctx.moveTo(
      // rear left
      this.ship.x -
        this.ship.r *
          ((2 / 3) * Math.cos(this.ship.a) + 0.5 * Math.sin(this.ship.a)),
      this.ship.y +
        this.ship.r *
          ((2 / 3) * Math.sin(this.ship.a) - 0.5 * Math.cos(this.ship.a)),
    );
    this.ctx.lineTo(
      // rear centre (behind the ship)
      this.ship.x - ((this.ship.r * 5) / 3) * Math.cos(this.ship.a),
      this.ship.y + ((this.ship.r * 5) / 3) * Math.sin(this.ship.a),
    );
    this.ctx.lineTo(
      // rear right
      this.ship.x -
        this.ship.r *
          ((2 / 3) * Math.cos(this.ship.a) - 0.5 * Math.sin(this.ship.a)),
      this.ship.y +
        this.ship.r *
          ((2 / 3) * Math.sin(this.ship.a) + 0.5 * Math.cos(this.ship.a)),
    );
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  private drawLasers() {
    this.ctx.fillStyle = "salmon";

    for (const l of this.ship.lasers) {
      this.ctx.beginPath();
      this.ctx.arc(l.x, l.y, 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  private drawAsteroids() {
    this.ctx.strokeStyle = "slategrey";

    for (const roid of this.roids) {
      this.ctx.beginPath();

      this.ctx.moveTo(
        roid.x + roid.r * roid.offs[0] * Math.cos(roid.a),
        roid.y + roid.r * roid.offs[0] * Math.sin(roid.a),
      );

      for (let j = 1; j < roid.vert; j++) {
        this.ctx.lineTo(
          roid.x +
            roid.r *
              roid.offs[j] *
              Math.cos(roid.a + (j * Math.PI * 2) / roid.vert),
          roid.y +
            roid.r *
              roid.offs[j] *
              Math.sin(roid.a + (j * Math.PI * 2) / roid.vert),
        );
      }

      this.ctx.closePath();
      this.ctx.stroke();
    }
  }

  private drawExplosion() {
    this.ctx.fillStyle = "darkred";
    this.ctx.beginPath();
    this.ctx.arc(
      this.ship.x,
      this.ship.y,
      this.ship.r * 1.7,
      0,
      Math.PI * 2,
      false,
    );
    this.ctx.fill();

    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.arc(
      this.ship.x,
      this.ship.y,
      this.ship.r * 1.4,
      0,
      Math.PI * 2,
      false,
    );
    this.ctx.fill();
    this.ctx.fillStyle = "orange";
    this.ctx.beginPath();
    this.ctx.arc(
      this.ship.x,
      this.ship.y,
      this.ship.r * 1.1,
      0,
      Math.PI * 2,
      false,
    );
    this.ctx.fill();
    this.ctx.fillStyle = "yellow";
    this.ctx.beginPath();
    this.ctx.arc(
      this.ship.x,
      this.ship.y,
      this.ship.r * 0.8,
      0,
      Math.PI * 2,
      false,
    );
    this.ctx.fill();
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(
      this.ship.x,
      this.ship.y,
      this.ship.r * 0.5,
      0,
      Math.PI * 2,
      false,
    );
    this.ctx.fill();
  }

  private handleShipHit() {
    if (this.ship.explodeTime > 0) return; // already exploding

    this.fxExplode.play();
    this.ship.explodeTime = Math.ceil(SHIP_EXPLODE_DUR * FPS);
    this.state.lives--;

    if (this.state.lives <= 0) {
      this.state.lives = 0;
      this.state.isGameOver = true;
      this.fxThrust.stop();
      this.pause();
    }

    this.emitState();
  }

  private destroyAsteroid(index: number) {
    const roid = this.roids[index];

    if (roid.r > 20) {
      this.roids.push(this.newAsteroid(roid.x, roid.y, roid.r / 2));
      this.roids.push(this.newAsteroid(roid.x, roid.y, roid.r / 2));
    }

    this.roids.splice(index, 1);
    this.state.score += 100;

    if (this.state.score > this.state.highScore) {
      this.state.highScore = this.state.score;
      localStorage.setItem(SAVE_KEY_SCORE, String(this.state.highScore));
    }
    this.emitState();
  }

  private state: GameState = {
    score: 0,
    lives: 3,
    level: 1,
    isGameOver: false,
    highScore: 0,
  };

  private onStateChange?: (state: GameState) => void;

  private emitState() {
    this.onStateChange?.({ ...this.state });
  }

  private loadHighScore() {
    const saved = localStorage.getItem(SAVE_KEY_SCORE);
    const parsed = parseInt(saved || "0", 10);
    this.state.highScore = isNaN(parsed) ? 0 : parsed;
  }

  setThrusting(value: boolean) {
    this.ship.thrusting = value;
  }

  setRotation(value: number) {
    this.ship.rot = value;
  }

  shootLaser() {
    if (this.ship.explodeTime > 0) return;

    if (this.ship.canShoot && this.ship.lasers.length < LASER_MAX) {
      this.ship.lasers.push({
        x: this.ship.x,
        y: this.ship.y,
        xv: (LASER_SPD * Math.cos(this.ship.a)) / FPS,
        yv: (-LASER_SPD * Math.sin(this.ship.a)) / FPS,
        dist: 0,
        explodeTime: 0,
      });

      this.fxLaser.play();
      this.ship.canShoot = false;
    }
  }

  setCanShoot(value: boolean) {
    this.ship.canShoot = value;
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  togglePause() {
    this.paused = !this.paused;
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
  }

  restart() {
    this.state = {
      score: 0,
      lives: 3,
      level: 1,
      isGameOver: false,
      highScore: this.state.highScore,
    };

    this.ship = this.newShip();
    this.createAsteroidBelt();
    this.paused = false;
    this.emitState();
  }
}
