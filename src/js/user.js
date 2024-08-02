export class User {
  #position = {
    x: 1,
    y: 1,
  };
  #map = [];
  #DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
  };

  setMap(laze) {
    this.#map = laze;
  }

  move(direction) {
    switch (direction) {
      case this.direction.UP:
        this.#moveUp();
        break;
      case this.direction.DOWN:
        this.#moveDown();
        break;
      case this.direction.LEFT:
        this.#moveLeft();
        break;
      case this.direction.RIGHT:
        this.#moveRight();
        break;
    }
  }

  moveRandom() {
    const rand = Math.floor(Math.random() * 4);
    const randDirection = Object.values(this.#DIRECTIONS)[rand];
    this.move(randDirection);
  }

  #moveLeft() {
    if (this.#position.x > 2) this.#position.x -= 2;
  }
  #moveRight() {
    if (this.#position.x < this.#map[0].length - 3) this.#position.x += 2;
  }
  #moveUp() {
    if (this.#position.y > 2) this.#position.y -= 2;
  }
  #moveDown() {
    if (this.#position.y < this.#map.length - 3) this.#position.y += 2;
  }

  get direction() {
    return {
      ...this.#DIRECTIONS,
    };
  }
  get position() {
    return this.#position;
  }
  resetPosition() {
    this.#position.x = 1;
    this.#position.y = 1;
  }
}
