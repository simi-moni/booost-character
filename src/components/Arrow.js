import { Sprite, Texture } from "pixi.js";
import gsap from "gsap";

export default class Arrow extends Sprite {
  constructor() {
    super(Texture.from('arrow'));

    this.interactive = true;
    this.buttonMode = true;
    this.anchor.set(0.5);

    this._tween = null;

    this.on('mousedown', () => this._handleMouseDown());
    this.on('mouseup', () => this._handleMouseUp());
  }

  /**
   * @private
   */
  _handleMouseDown() {
    if(this._tween) this._tween.kill();
    this.scale.set(0.9);
  }

  /**
   * @private
   */
  _handleMouseUp() {
    this._tween = gsap.to(this.scale, { x: 1, y: 1, ease: "elastic.out(1, 0.4)", duration: 0.8});
  }
}