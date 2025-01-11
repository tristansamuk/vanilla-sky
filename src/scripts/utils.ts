import { BottomNavBar } from '../components/bottom-nav-bar/bottom-nav-bar';
import { Layout } from '../components/page-layout/layout';
import { Navigation } from '../components/navigation/navigation';
import { ChatPage } from '../pages/chat-page/chat-page';
import { FeedsPage } from '../pages/feeds-page/feeds-page';
import { ListsPage } from '../pages/lists-page/lists-page';
import { NotificationsPage } from '../pages/notifications-page/notifications-page';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { SearchPage } from '../pages/search-page/search-page';
import { SettingsPage } from '../pages/settings-page/settings-page';

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
