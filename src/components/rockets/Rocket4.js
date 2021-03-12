import Rocket from '../Rocket';

export default class Rocket4 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket4',
      acceleration: 30,
      handling: 80,
      speed: 30,
      name: 'rocket-4',
      fireProps: {
        angle: -100,
        x: 110,
        y: 170,
        scale: 0.5
      }
    });
  }
}