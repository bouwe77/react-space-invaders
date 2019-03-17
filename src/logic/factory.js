export default class factory {
  static createAnimatedSprite = speed => {
    var sprite = factory.createSprite();
    return { ...sprite, speed };
  };
  static createSprite = () => {
    return { x: 20, y: 85, width: 30, height: 10, color: "green" };
  };
}
