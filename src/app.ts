import { NavigationDesktop } from './components/navigation-desktop/navigation-desktop';
import { SVGComponent } from './components/svg-component/svg-component';
import { home, search } from './constants/svgs';

// Render Desktop Navigation

new NavigationDesktop();
new SVGComponent(home, `.icon__home`);
new SVGComponent(search, `.icon__search`);
