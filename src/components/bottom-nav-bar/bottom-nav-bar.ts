import './bottom-nav-bar.css';
import { bottomNavBarItems } from '../../constants/ui-strings';
import { defaultSVGAttributes, navBarIcons } from '../../constants/svgs';
import { SVGComponent } from '../svg-component/svg-component';
import { createTemplate } from '../../scripts/utils';

/**
 * @class Bottom navigation bar component that appears on screens and windows below 800px
 * @param {string} parentElClass - The class name of the target parent element
 */
export class BottomNavBar {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;

  private navEl: HTMLElement;
  private ulEl: HTMLUListElement;
  private liEl: HTMLLIElement;
  private aEl: HTMLAnchorElement;

  constructor() {
    this.parentEl = document.getElementById('app') as HTMLDivElement;

    this.templateEl = createTemplate(`
      <nav class="bottom-nav-bar">
        <ul class="bottom-nav-bar__list">
          <li class="bottom-nav-bar__item">
            <a></a>
          </li>
        </ul>
      </nav>
      `);

    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('nav') as HTMLElement;
    this.ulEl = templateContent.querySelector('ul') as HTMLUListElement;
    this.liEl = templateContent.querySelector('li') as HTMLLIElement;
    this.aEl = templateContent.querySelector('a') as HTMLAnchorElement;

    this.render();
    this.attachIcons();
  }
  private attachIcons() {
    Object.entries(navBarIcons).forEach(([key, value]) => {
      new SVGComponent(
        value,
        defaultSVGAttributes,
        `.bottom-nav-bar__link--${key}`
      );
    });
  }

  private render() {
    // Clear contents of <ul>
    this.ulEl.innerHTML = '';
    this.liEl.innerHTML = '';

    Object.entries(bottomNavBarItems).forEach(([key, _value]) => {
      // Copy the <li> and <a> elements
      const navItem = this.liEl.cloneNode(true) as HTMLLIElement;
      const link = this.aEl.cloneNode(true) as HTMLAnchorElement;

      // Set `<a>` href, add class (for attaching SVGs), attach to <li>
      link.setAttribute('href', `${key}`);
      link.classList.add(`bottom-nav-bar__link--${key}`);
      navItem.append(link);

      this.ulEl.append(navItem);
    });

    // Ensures only one of the component is ever present in the parent element
    !this.parentEl.contains(this.navEl) &&
      this.parentEl.insertAdjacentElement('beforeend', this.navEl);
  }
}
