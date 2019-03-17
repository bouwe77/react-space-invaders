export default class enemies {
  constructor(horizontalWidth) {
    this.horizontalWidth = horizontalWidth;
    this.enemies = [this.createEnemy()];
  }

  createEnemy = () => {
    const speed = 0.5,
      width = 10,
      height = 10;

    return { x: 0, y: 10, width, height, color: "red", speed };
  };

  getUpdatedEnemies = () => {
    const updatedEnemies = this.enemies.map(enemy => {
      let speed = enemy.speed;
      if (enemy.x + enemy.width > this.horizontalWidth || enemy.x < 0) {
        speed = speed * -1;
      }
      return { ...enemy, x: enemy.x + speed, speed };
    });

    this.enemies = updatedEnemies;

    return this.enemies;
  };
}
