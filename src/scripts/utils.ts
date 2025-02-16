import { BottomNavBar } from '../components/bottom-nav-bar/bottom-nav-bar';
import { ChatPage } from '../pages/chat-page/chat-page';
import { FeedsPage } from '../pages/feeds-page/feeds-page';
import { HomePage } from '../pages/home-page/home-page';
import { Layout } from '../components/page-layout/layout';
import { ListsPage } from '../pages/lists-page/lists-page';
import { Navigation } from '../components/navigation/navigation';
import { NotificationsPage } from '../pages/notifications-page/notifications-page';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { SearchPage } from '../pages/search-page/search-page';
import { SettingsPage } from '../pages/settings-page/settings-page';
import { TopBarHome } from '../components/top-bar/top-bar-home';

/**
 * @function Creates a `HTMLElement`from an HTML string.
 *
 * @param {string} html - A valid HTML string.
 * @returns {HTMLElement} An `HTMLTemplateElement` containing the parsed content of the inputted string.
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
 * Toggles the visibility of the first element matching the given class name.
 * If the element is currently visible, it sets `display: none`.
 * If the element is hidden (`display: none`), it sets `display` to `newDisplayValue`.
 *
 * @param {string} className - The class selector of the element.
 * @param {CSSStyleDeclaration['display']} newDisplayValue - The display value to set when making the element visible.
 * @throws {Error} If no element matching the class name is found.
 */

export const toggleVisibility = (
  className: string,
  newDisplayValue: CSSStyleDeclaration['display']
) => {
  const element = document.querySelector(className) as HTMLElement;

  if (!element) {
    throw new Error(`HTML element with class name "${className}" not found.`);
  }

  if (getComputedStyle(element).display !== 'none') {
    element.style.display = 'none';
  } else {
    element.style.display = newDisplayValue;
  }
};

// Component Rendering Fucntions

export const renderLayout = () => {
  new Layout('app');
};

export const renderNav = () => {
  new Navigation('.layout__nav--desktop');
  new Navigation('.layout__nav--mobile');
  new BottomNavBar();
};

// Page Rendering Functions

export const renderHomePage = () => {
  new HomePage();
  new TopBarHome();
};

export const renderChatPage = () => {
  new ChatPage();
};

export const renderFeedsPage = () => {
  new FeedsPage();
};

export const renderListsPage = () => {
  new ListsPage();
};

export const renderNotificationsPage = () => {
  new NotificationsPage();
};

export const renderProfilePage = () => {
  new ProfilePage();
};

export const renderSearchPage = () => {
  new SearchPage();
};

export const renderSettingsPage = () => {
  new SettingsPage();
};
