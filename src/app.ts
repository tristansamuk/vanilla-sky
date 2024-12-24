import { NavigationDesktop } from './components/navigation-desktop/navigation-desktop';
import { SVGComponent } from './components/svg-component/svg-component';
import { homeSVG, homePath } from './constants/svgs';

// Navigation

new NavigationDesktop();
new SVGComponent(homeSVG, homePath, '.nav-desktop__item');
