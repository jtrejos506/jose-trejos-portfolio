---
sidebar_position: 4
---

# Architecture

The project follows a modular and maintainable structure, separating game logic into distinct components.

## Core Components

### Game Loop

Handles continuous rendering and updates using `requestAnimationFrame`.

### Entities

- **Ship**: Player-controlled object with movement and shooting logic
- **Asteroids**: Procedurally generated obstacles
- **Projectiles**: Bullets fired by the ship

### Systems

- **Collision System**: Detects and resolves interactions between entities
- **Input Handler**: Manages keyboard input
- **Score Manager**: Tracks and persists player score

## State Management

The game transitions between:

- Active gameplay
- Ship destruction / respawn
- Game over state

## Design Principles

- Single Responsibility Principle
- Clear separation between update and render cycles
- Extensible structure for adding new features
