import { NavigationDesktop } from './components/navigation-desktop/navigation-desktop';
import { SVGComponent } from './components/svg-component/svg-component';
import { home, search } from './constants/svgs';

// Render Desktop Navigation

new NavigationDesktop();
new SVGComponent(home, `.nav__icon--home`);
new SVGComponent(search, `.nav__icon--search`);
