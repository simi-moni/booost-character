import { Container, Graphics, Text } from "pixi.js";
import gsap from "gsap";

export default class ProgressBar extends Container {
  /**
   * @param {String} label - The label which should be visualized in the progressbar 
   * @param {Number} max - The maximum value the progressbar value can be
   * @param {Number} value - The starting value of the progressbar
   * @param {Number} width - The width of the progressbar's graphics and containers
   */
  constructor({ label, max = 100, value = 0, width = 500 } = {}) {
    super();

    this.name = `progressbar-${label}`;

    this._label = label;
    this._max = max;
    this._value = value;
    this._width = width;

    this._background = null;
    this._bar = null;
    this._badge = null;

    this._createBackground();
    this._createBadge();

    this.set({ value });
  }

  set({ value }) {
    this._value = value;
    this._badge.getChildByName('value').text = `${this._label.toUpperCase()}: ${this._value}`;
  }

  /**
   * @readonly
   * @memberof ProgressBar
   * @returns {PIXI.Graphics}
   */
  get background() {
    return this._background;
  }

  /**
   * @private
   */
  _createBackground() {
    this._background = new Graphics();
    this._background.beginFill(0x000000);
    this._background.drawRect(0, 0, this._width, 25);
    this._background.endFill();
    this._background.alpha = 0.1;
    this._background.x = -this._width / 2;
    this.addChild(this._background);
  }

  /**
   * @private
   */
  _createBadge() {
    this._badge = new Container();
    const text = new Text(`${this._label.toUpperCase()}: ${this._value}`, { fontSize: 11, fill: 0x000000, align: 'center', fontWeight: '700' });
    text.name = 'value';
    text.anchor.set(0.5, 1);
    this._badge.addChild(text)
    this.addChild(this._badge);
  }
}