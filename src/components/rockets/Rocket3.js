import Rocket from '../Rocket';

export default class Rocket3 extends Rocket {
  constructor() {
    super({
      textureName: 'rocket3',
      acceleration: 60,
      handling: 30,
      speed: 30,
      name: 'rocket-3',
      fireProps: {
        angle: -150,
        x: 150,
        y: 100,
        scale: 0.5
      }
    });
  }
}