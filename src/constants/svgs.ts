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

// Used in SVGComponent as keys to set attributes for <svg> and <path> elements

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

// Default Attributes

export const defaultSVGAttributes: SVGAttributes = {
  fill: 'none',
  width: '27',
  viewBox: '0 0 24 24',
  height: '27',
  ariaHidden: 'true',
  class: 'nav-svg--home',
  style: 'color: rgb(11, 15, 20)',
};

export const defaultPathAttributes: PathAttributes = {
  fill: 'hsl(211, 28%, 6%)',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  d: '',
};

export const home: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M12.63 1.724a1 1 0 0 0-1.26 0l-8 6.5A1 1 0 0 0 3 9v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-.37-.776l-8-6.5Z',
};

// Search

export const search: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l3.387 3.387a1 1 0 0 1-1.414 1.414l-3.387-3.387A8 8 0 0 1 3 11Z',
};
