import Splash from './scenes/Splash';
import Play from './scenes/Play';
import { Container } from 'pixi.js';
import fire from './static/fire.json';
import Assets from './core/AssetManager';

/**
 * Main game stage, manages scenes/levels.
 *
 * @extends {PIXI.Container}
 */
export default class Game extends Container {

  static get events() {
    return {
      SWITCH_SCENE: 'switch_scene'
    }
  }

  constructor() {
    super();

    this.currentScene = null;
  }

  async start() {
    await this.switchScene(Splash, { scene: 'splash' });
    await this.currentScene.finish;

    await Assets.prepareSpritesheets([
      { texture: 'fire', data: fire }
    ]);

    this.switchScene(Play, { scene: 'play' });
  }

  /**
   * @param {Function} constructor 
   * @param {String} scene 
   */
  switchScene(constructor, scene) {
    this.removeChild(this.currentScene);
    this.currentScene = new constructor();
    this.addChild(this.currentScene);

    this.emit(Game.events.SWITCH_SCENE, { scene });

    return this.currentScene.onCreated();
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    if (this.currentScene === null) return;

    this.currentScene.onResize(width, height);
  }
}
