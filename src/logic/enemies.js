export default class enemies {
  constructor(width) {
    this.width = width;
    const speed = 0.5;
    this.enemies = [
      { x: 110, y: 10, width: 15, height: 5, color: "red", speed },
      { x: 150, y: 16, width: 20, height: 12, color: "green", speed }
    ];
  }

  getUpdatedEnemies = () => {
    const updatedEnemies = this.enemies.map(enemy => {
      let speed = enemy.speed;
      if (enemy.x + enemy.width > this.width) {
        speed = speed * -1;
      }
      return { ...enemy, x: enemy.x + 0.5 };
    });

    this.enemies = updatedEnemies;

    return this.enemies;
  };
}
