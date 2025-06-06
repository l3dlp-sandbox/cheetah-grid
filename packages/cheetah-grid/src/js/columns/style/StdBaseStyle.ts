import { BaseStyle } from "./BaseStyle";
import type { StdBaseStyleOption } from "../../ts-types";

let defaultStyle: StdBaseStyle;
export class StdBaseStyle extends BaseStyle {
  private _textAlign: CanvasTextAlign;
  private _textBaseline: CanvasTextBaseline;
  private _padding: number | string | (number | string)[] | undefined;
  static get DEFAULT(): StdBaseStyle {
    return defaultStyle ? defaultStyle : (defaultStyle = new StdBaseStyle());
  }
  constructor(style: StdBaseStyleOption = {}) {
    super(style);
    this._textAlign = style.textAlign || "left";
    this._textBaseline = style.textBaseline || "middle";
    this._padding = style.padding;
  }
  get textAlign(): CanvasTextAlign {
    return this._textAlign;
  }
  set textAlign(textAlign: CanvasTextAlign) {
    this._textAlign = textAlign;
    this.doChangeStyle();
  }
  get textBaseline(): CanvasTextBaseline {
    return this._textBaseline;
  }
  set textBaseline(textBaseline: CanvasTextBaseline) {
    this._textBaseline = textBaseline;
    this.doChangeStyle();
  }
  get padding(): number | string | (number | string)[] | undefined {
    return this._padding;
  }
  set padding(padding: number | string | (number | string)[] | undefined) {
    this._padding = padding;
    this.doChangeStyle();
  }
  clone(): StdBaseStyle {
    return new StdBaseStyle(this);
  }
}
