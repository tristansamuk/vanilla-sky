import {
  renderChatPage,
  renderFeedsPage,
  renderHomePage,
  renderLayout,
  renderListsPage,
  renderNav,
  renderNotificationsPage,
  renderProfilePage,
  renderSearchPage,
  renderSettingsPage,
} from './utils';

renderLayout();
renderNav();
console.log(window.location.pathname);

// Temporary Router

switch (window.location.pathname) {
  case '/':
    renderHomePage();
    break;
  case '/chat':
    renderChatPage();
    break;
  case '/feeds':
    renderFeedsPage();
    break;
  case '/lists':
    renderListsPage();
    break;
  case '/notifications':
    renderNotificationsPage();
    break;
  case '/profile':
    renderProfilePage();
    break;
  case '/search':
    renderSearchPage();
    break;
  case '/settings':
    renderSettingsPage();
    break;
}
