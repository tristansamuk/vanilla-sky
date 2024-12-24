export interface SVGAttributes {
  fill: string;
  width: string;
  viewBox: string;
  height: string;
  ariaHidden: string;
  class: string;
  style: string;
}
export interface PathAttributes {
  fill: string;
  fillRule: string;
  clipRule: string;
  d: string;
}

export enum SvgAttributeNames {
  FILL = 'fill',
  WIDTH = 'width',
  HEIGHT = 'height',
  VIEW_BOX = 'viewBox',
  ARIA_HIDDEN = 'aria-hidden',
  CLASS = 'class',
  STYLE = 'style',
}

export enum PathAttributeNames {
  FILL = 'fill',
  FILL_RULE = 'fill-rule',
  CLIP_RULE = 'clip-rule',
  D = 'd',
}

export const homeSVG: SVGAttributes = {
  fill: 'none',
  width: '27',
  viewBox: '0 0 24 24',
  height: '27',
  ariaHidden: 'true',
  class: 'nav-svg--home',
  style: 'color: rgb(11, 15, 20)',
};

export const homePath: PathAttributes = {
  fill: 'hsl(211, 28%, 6%)',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  d: 'M12.63 1.724a1 1 0 0 0-1.26 0l-8 6.5A1 1 0 0 0 3 9v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-.37-.776l-8-6.5Z',
};
