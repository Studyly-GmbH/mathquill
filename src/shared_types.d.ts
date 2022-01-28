type NodeRef = MQNode | 0;
type ControllerEvent =
  | 'move'
  | 'upDown'
  | 'replace'
  | 'edit'
  | 'select'
  | undefined;
type JoinMethod = 'html' | 'mathspeak' | 'latex' | 'text';
type CursorOptions = typeof Options.prototype;
type MathspeakOptions = {
  createdLeftOf?: Cursor;
  ignoreShorthand?: boolean;
};
type EmbedOptions = {
  latex?: () => string;
  text?: () => string;
  htmlString?: string;
};

type InequalityData = {
  ctrlSeq: string;
  ctrlSeqStrict: string;
  html: string;
  htmlStrict: string;
  text: string;
  textStrict: string;
  mathspeak: string;
  mathspeakStrict: string;
};

type API = any;
type HandlerOptions = any;
type ControllerData = any;
type ControllerRoot = MQNode & {
  controller: Controller;
  cursor?: Cursor;
  latex: () => string;
};
type HandlerName = any;
type KIND_OF_MQ = any;
type APIClasses = any;
type JQ_KeyboardEvent = KeyboardEvent & {
  originalEvent?: KeyboardEvent;
};
type RootBlockMixinInput = any;
type BracketSide = L | R | 0;

type InnerMathField = any;
type InnerFields = any;
type EmbedOptionsData = any;
type MQ = any;
type LatexCmdsAny = any;
type CharCmdsAny = any;
type LatexCmdsSingleCharBuilder = Record<string, (char: string) => MQNode>;
type LatexCmdsSingleChar = Record<
  string,
  undefined | typeof TempSingleCharNode | ((char: string) => TempSingleCharNode)
>;

type LatexFragmentBuilderNoParam = () => LatexFragment;
type MQNodeBuilderNoParam = () => MQNode;
type MQNodeBuilderOneParam = (string: string) => MQNode;

type LatexCmd =
  | typeof MQNode
  | MQNodeBuilderNoParam
  | MQNodeBuilderOneParam
  | LatexFragmentBuilderNoParam;
type LatexCmds = Record<string, LatexCmd>;
type CharCmds = Record<string, LatexCmd>;

declare var MQ1: any;
declare var validateAutoCommandsOption: any;

type JQSelector =
  | $
  | HTMLElement
  | string
  | null
  | Window
  | NodeListOf<ChildNode>
  | HTMLElement[]
  | EventTarget;
interface $ {
  (selector?: JQSelector): $;
  fn: any;
  removeClass(cls: string): $;
  toggleClass(cls: string, bool?: boolean): $;
  addClass(cls: string): $;
  hasClass(cls: string): boolean;
  attr(attr: string, val: string | number | null): $;
  css(prop: string, val: string | number | null): $;
  trigger(e: Event): $;
  remove(): $;
  detach(): $;
  select(): $;
  width(): number;
  add(el: JQSelector): $;
  val(val: string): $;
  children(selector: string): $;
  stop(): $;
  html(t: string): $;
  text(str: string): $;
  next(): $;
  prev(): $;
  animate(
    properties: Object,
    duration?: string | number,
    complete?: Function
  ): $;
  empty(): $;
  bind(evt: string, cb: boolean | ((evt: Event) => any)): $;
  bind(evt: string, cb: boolean | ((evt: Event) => any)): void;
  unbind(evt: string, cb?: Function, capture?: boolean): $;
  mousemove(cb: (evt: MouseEvent) => any): $;
  mouseup(cb: (evt: MouseEvent) => any): $;
  focus(handler: (eventObject: Event) => any): $;
  blur(handler: (eventObject: Event) => any): $;
  scrollLeft(): number;
  scrollTop(): number;
  closest(selector: JQSelector): $;
  outerWidth(): number;
  offset(): { left: number; top: number }; // TODO - this can be undefined. Either fix uses or wait until removing jquery
  length: number;
  [index: number]: HTMLElement; // TODO - this can be undefined. Either fix uses or wait until removing jquery
}
