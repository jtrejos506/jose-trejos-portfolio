export interface Laser {
  x: number;
  y: number;
  xv: number;
  yv: number;
  dist: number;
  explodeTime: number;
}

export interface Ship {
  x: number;
  y: number;
  a: number;
  r: number;
  blinkNum: number;
  blinkTime: number;
  canShoot: boolean;
  dead: boolean;
  explodeTime: number;
  lasers: Laser[];
  rot: number;
  thrusting: boolean;
  thrust: {
    x: number;
    y: number;
  };
}

export interface Asteroid {
  x: number;
  y: number;
  xv: number;
  yv: number;
  a: number;
  r: number;
  offs: number[];
  vert: number;
}

export interface GameState {
  score: number;
  lives: number;
  level: number;
  isGameOver: boolean;
  highScore: number;
}
