// Types
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

interface NavIcons {
  chat: PathAttributes;
  feeds: PathAttributes;
  home: PathAttributes;
  lists: PathAttributes;
  notifications: PathAttributes;
  profile: PathAttributes;
  search: PathAttributes;
  settings: PathAttributes;
}
interface NavBarIcons {
  home: PathAttributes;
  search: PathAttributes;
  chat: PathAttributes;
  notifications: PathAttributes;
  profile: PathAttributes;
}

interface TopBarIcons {
  butterfly: PathAttributes;
  butterflySVG: SVGAttributes;
  hamburgerMenu: PathAttributes;
  hamburgerMenuSVG: SVGAttributes;
  hashtag: PathAttributes;
  hashtagSVG: SVGAttributes;
}

/**
 * Enum used in SVGComponent as keys to set attributes for `<svg>` element
 * @enum {string}
 */

export enum SvgAttributeNames {
  FILL = 'fill',
  WIDTH = 'width',
  HEIGHT = 'height',
  VIEW_BOX = 'viewBox',
  ARIA_HIDDEN = 'aria-hidden',
  CLASS = 'class',
  STYLE = 'style',
}

/**
 * Enum used in SVGComponent as keys to set attributes for <path>` elements
 * @enum {string}
 */

export enum PathAttributeNames {
  FILL = 'fill',
  FILL_RULE = 'fill-rule',
  CLIP_RULE = 'clip-rule',
  D = 'd',
}

// Default `<svg>` attributes

export const defaultSVGAttributes: SVGAttributes = {
  fill: 'none',
  width: '27',
  viewBox: '0 0 24 24',
  height: '27',
  ariaHidden: 'true',
  class: '',
  style: 'color: rgb(11, 15, 20)',
};

// Default `<path>` attributes

export const defaultPathAttributes: PathAttributes = {
  fill: 'hsl(211, 28%, 6%)',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  d: '',
};

// Butterfly Logo

const butterflySVG: SVGAttributes = {
  ...defaultSVGAttributes,
  viewBox: '0 0 64 57',
  width: '30',
  style: 'width: 30px; height: 26.7188px;',
};

const butterfly: PathAttributes = {
  ...defaultPathAttributes,
  fill: '#0085ff',
  d: 'M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z',
};

// Buttons

const hamburgerMenuSVG: SVGAttributes = {
  ...defaultSVGAttributes,
  width: '24',
  height: '24',
  style: 'color: rgb(84, 110, 138)',
};

const hamburgerMenu: PathAttributes = {
  ...defaultPathAttributes,
  fill: 'hsl(211, 24%, 43.6%)',
  d: 'M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z',
};

const hashtagSVG: SVGAttributes = {
  ...defaultSVGAttributes,
  style: 'color: rgb(84, 110, 138); pointer-events: none;',
};

const hashtag: PathAttributes = {
  ...defaultPathAttributes,
  fill: 'hsl(211, 24%, 43.6%)',
  d: 'M9.124 3.008a1 1 0 0 1 .868 1.116L9.632 7h5.985l.39-3.124a1 1 0 0 1 1.985.248L17.632 7H20a1 1 0 1 1 0 2h-2.617l-.75 6H20a1 1 0 1 1 0 2h-3.617l-.39 3.124a1 1 0 1 1-1.985-.248l.36-2.876H8.382l-.39 3.124a1 1 0 1 1-1.985-.248L6.368 17H4a1 1 0 1 1 0-2h2.617l.75-6H4a1 1 0 1 1 0-2h3.617l.39-3.124a1 1 0 0 1 1.117-.868ZM9.383 9l-.75 6h5.984l.75-6H9.383Z',
};

export const newPostSVG: SVGAttributes = {
  ...defaultSVGAttributes,
  width: '16',
  height: '16',
  style: 'rgb(255, 255, 255)',
};

export const newPost: PathAttributes = {
  ...defaultPathAttributes,
  fill: 'hsl(211, 20%, 100%)',
  d: 'M17.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 12 16H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707l9-9ZM10 12.414V14h1.586l8-8L18 4.414l-8 8ZM3 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H5v14h14v-6a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Z',
};

// Navigation

const chat: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M4 12a8 8 0 1 1 4.445 7.169 1 1 0 0 0-.629-.088l-3.537.662.7-3.415a1 1 0 0 0-.09-.66A7.961 7.961 0 0 1 4 12Zm8-10C6.477 2 2 6.477 2 12c0 1.523.341 2.968.951 4.262l-.93 4.537a1 1 0 0 0 1.163 1.184l4.68-.876A9.968 9.968 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2ZM7.5 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z',
};

const feeds: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M9.124 3.008a1 1 0 0 1 .868 1.116L9.632 7h5.985l.39-3.124a1 1 0 0 1 1.985.248L17.632 7H20a1 1 0 1 1 0 2h-2.617l-.75 6H20a1 1 0 1 1 0 2h-3.617l-.39 3.124a1 1 0 1 1-1.985-.248l.36-2.876H8.382l-.39 3.124a1 1 0 1 1-1.985-.248L6.368 17H4a1 1 0 1 1 0-2h2.617l.75-6H4a1 1 0 1 1 0-2h3.617l.39-3.124a1 1 0 0 1 1.117-.868ZM9.383 9l-.75 6h5.984l.75-6H9.383Z',
};

const home: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M12.63 1.724a1 1 0 0 0-1.26 0l-8 6.5A1 1 0 0 0 3 9v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-.37-.776l-8-6.5Z',
};

const lists: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M6 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM3 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm9 0a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm-6 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm9 0a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z',
};

const notifications: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M4.216 8.815a7.853 7.853 0 0 1 15.568 0l1.207 9.053A1 1 0 0 1 20 19h-3.354c-.904 1.748-2.607 3-4.646 3-2.039 0-3.742-1.252-4.646-3H4a1 1 0 0 1-.991-1.132l1.207-9.053ZM9.778 19c.61.637 1.399 1 2.222 1s1.613-.363 2.222-1H9.778ZM12 4a5.853 5.853 0 0 0-5.802 5.08L5.142 17h13.716l-1.056-7.92A5.853 5.853 0 0 0 12 4Z',
};

const profile: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M12 4a8 8 0 0 0-5.935 13.365C7.56 15.895 9.612 15 12 15c2.388 0 4.44.894 5.935 2.365A8 8 0 0 0 12 4Zm4.412 14.675C15.298 17.636 13.792 17 12 17c-1.791 0-3.298.636-4.412 1.675A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 4.412-1.325ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.98 9.98 0 0 1-3.462 7.567A9.965 9.965 0 0 1 12 22a9.965 9.965 0 0 1-6.538-2.433A9.98 9.98 0 0 1 2 12Zm10-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z',
};

const search: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l3.387 3.387a1 1 0 0 1-1.414 1.414l-3.387-3.387A8 8 0 0 1 3 11Z',
};

const settings: PathAttributes = {
  ...defaultPathAttributes,
  d: 'M11.1 2a1 1 0 0 0-.832.445L8.851 4.57 6.6 4.05a1 1 0 0 0-.932.268l-1.35 1.35a1 1 0 0 0-.267.932l.52 2.251-2.126 1.417A1 1 0 0 0 2 11.1v1.8a1 1 0 0 0 .445.832l2.125 1.417-.52 2.251a1 1 0 0 0 .268.932l1.35 1.35a1 1 0 0 0 .932.267l2.251-.52 1.417 2.126A1 1 0 0 0 11.1 22h1.8a1 1 0 0 0 .832-.445l1.417-2.125 2.251.52a1 1 0 0 0 .932-.268l1.35-1.35a1 1 0 0 0 .267-.932l-.52-2.251 2.126-1.417A1 1 0 0 0 22 12.9v-1.8a1 1 0 0 0-.445-.832L19.43 8.851l.52-2.251a1 1 0 0 0-.268-.932l-1.35-1.35a1 1 0 0 0-.932-.267l-2.251.52-1.417-2.126A1 1 0 0 0 12.9 2h-1.8Zm-.968 4.255L11.635 4h.73l1.503 2.255a1 1 0 0 0 1.057.42l2.385-.551.566.566-.55 2.385a1 1 0 0 0 .42 1.057L20 11.635v.73l-2.255 1.503a1 1 0 0 0-.42 1.057l.551 2.385-.566.566-2.385-.55a1 1 0 0 0-1.057.42L12.365 20h-.73l-1.503-2.255a1 1 0 0 0-1.057-.42l-2.385.551-.566-.566.55-2.385a1 1 0 0 0-.42-1.057L4 12.365v-.73l2.255-1.503a1 1 0 0 0 .42-1.057L6.123 6.69l.566-.566 2.385.55a1 1 0 0 0 1.057-.42ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
};

/**
 * An object containing all the navigation icons easier iteration in the Navigation component's `attachIcons()` method.
 */

export const navIcons: NavIcons = {
  chat,
  feeds,
  home,
  lists,
  notifications,
  profile,
  search,
  settings,
};

export const navBarIcons: NavBarIcons = {
  home,
  search,
  chat,
  notifications,
  profile,
};

export const topBarIcons: TopBarIcons = {
  butterfly,
  butterflySVG,
  hamburgerMenu,
  hamburgerMenuSVG,
  hashtag,
  hashtagSVG,
};
