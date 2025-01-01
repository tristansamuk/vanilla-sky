import './bottom-nav-bar.css';
import { bottomNavBarItems } from '../../constants/ui-strings';
import { defaultSVGAttributes, navBarIcons } from '../../constants/svgs';
import { SVGComponent } from '../svg-component/svg-component';

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

  constructor() {
    this.parentEl = document.getElementById('app') as HTMLDivElement;
    this.templateEl = document.getElementById(
      'bottom-nav-bar-template'
    ) as HTMLTemplateElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('nav') as HTMLElement;
    this.ulEl = templateContent.querySelector('ul') as HTMLUListElement;
    this.liEl = templateContent.querySelector('li') as HTMLLIElement;

    this.render();
    this.attachIcons();
  }
  private attachIcons() {
    Object.entries(navBarIcons).forEach(([key, value]) => {
      new SVGComponent(
        value,
        defaultSVGAttributes,
        `.bottom-nav-bar__icon-container--${key}`
      );
    });
  }

  private render() {
    // Clear contents of <ul>
    this.ulEl.innerHTML = '';

    Object.entries(bottomNavBarItems).forEach(([key, value]) => {
      // Add a class that SVGComponent can use to attach the <svg> icon to the DOM.
      const iconClass = `bottom-nav-bar__icon-container--${key}`;
      this.liEl.classList.add(iconClass);

      // Copy the <li> and attach to the <ul>
      const navItem = this.liEl.cloneNode(true) as HTMLLIElement;
      this.ulEl.append(navItem);

      // Remove the class from the original element
      this.liEl.classList.remove(iconClass);
    });

    this.parentEl.insertAdjacentElement('beforeend', this.navEl);
  }
}
