import Rocket from '../Rocket';

export default class Rocket2 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket2',
      acceleration: 60,
      handling: 20,
      speed: 10,
      name: 'rocket-2',
      fireProps: {
        angle: 200,
        x: 300,
        y: 250,
        scale: 1
      }
    });
  }
}