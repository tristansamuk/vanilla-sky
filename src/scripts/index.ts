import {
  renderLayout,
  renderNav,
  renderNotificationsPage,
  renderSearchPage,
} from './utils';

renderLayout();
renderNav();

// Crude Router

if (window.location.pathname === '/search') {
  renderSearchPage();
} else if (window.location.pathname === '/notifications') {
  renderNotificationsPage();
}
