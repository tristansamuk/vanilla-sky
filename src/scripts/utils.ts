import { BottomNavBar } from '../components/bottom-nav-bar/bottom-nav-bar';
import { Layout } from '../components/page-layout/layout';
import { Navigation } from '../components/navigation/navigation';

/**
 * @function Creates a `HTMLElement`from an HTML string.
 *
 * @param {string} html - A valid HTML string.
 * @returns {HTMLElement} An `HTMLElement` containing the parsed content of the inputted string.
 */

export const createTemplate = (html: string) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim(); // Removes any whitespace at start/end of string
  if (!template.content.firstElementChild) {
    throw new Error('Invalid or empty HTML string.');
  }
  return template;
};

/**
 * @function Renders the page layout and navigation components on each page of the app.
 */

export const renderPage = () => {
  new Layout('app');
  new Navigation('.layout__nav--desktop');
  new Navigation('.layout__nav--mobile');
  new BottomNavBar();
};
