import factory from "./factory";
export default class player {
  constructor() {
    this.player = factory.createSprite();
  }

  getPlayer = () => {
    return this.player;
  };
}
