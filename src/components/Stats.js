import { Container } from "pixi.js";
import ProgressBar from "./ProgressBar";

export default class Stats extends Container {
  constructor({ data = [] } = {}) {
    super();

    this.name = 'stats';

    this._data = data;
    this._items = {};
    Object.keys(this._data).forEach((key) => this._createProgressBar(key, this._data[key]));
  }

  set(data = {}) {
    Object.keys(data).forEach((key) => {
      this._items[key].set({ value: data[key] });
    });
  }

  _createProgressBar(key, { label, value, width }) {
    const progressBar = new ProgressBar({
      label,
      width,
      value
    });
    progressBar.y = this.children.length * progressBar.height;
    this.addChild(progressBar);

    this._items[key] = progressBar;
  }
}