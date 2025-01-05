import { BottomNavBar } from '../components/bottom-nav-bar/bottom-nav-bar';
import { Layout } from '../components/page-layout/layout';
import { Navigation } from '../components/navigation/navigation';
import { SearchPage } from '../components/pages/search-page/search-page';
import { NotificationsPage } from '../components/pages/notifications-page/notifications-page';

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
 * @function Renders the `Layout` component.
 */

export const renderLayout = () => {
  new Layout('app');
};

/**
 * @function Renders the `Navigation` and `BottomNavBar` components.
 */

export const renderNav = () => {
  new Navigation('.layout__nav--desktop');
  new Navigation('.layout__nav--mobile');
  new BottomNavBar();
};

/**
 * @function Renders the `SearchPage` component.
 */

export const renderSearchPage = () => {
  new SearchPage();
};

export const renderNotificationsPage = () => {
  new NotificationsPage();
};
