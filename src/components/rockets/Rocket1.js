import Rocket from '../Rocket';

export default class Rocket1 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket1',
      acceleration: 30,
      handling: 5,
      speed: 70,
      name: 'rocket-1',
      fireProps: {
        angle: 200,
        x: 330,
        y: 260,
        scale: 1
      }
    });
  }
}