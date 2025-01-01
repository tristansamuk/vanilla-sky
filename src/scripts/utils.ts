import { BottomNavBar } from '../components/bottom-nav-bar/bottom-nav-bar';
import { Layout } from '../components/page-layout/layout';
import { Navigation } from '../components/navigation/navigation';

/**
 * Renders the page layout and navigation components on each page of the app.
 */

export const renderPage = () => {
  new Layout('app');
  new Navigation('.layout__nav--desktop');
  new Navigation('.layout__nav--mobile');
  new BottomNavBar();
};
