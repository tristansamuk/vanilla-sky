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

  constructor() {
    this.parentEl = document.getElementById('app') as HTMLDivElement;
    this.templateEl = createTemplate(/*html*/ `
      <nav class="bottom-nav-bar">
        <ul class="bottom-nav-bar__list">
          <li class="bottom-nav-bar__item"></li>
        </ul>
      </nav>`);

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

    Object.entries(bottomNavBarItems).forEach(([key, _value]) => {
      // Add a class that SVGComponent can use to attach the <svg> icon to the DOM.
      const iconClass = `bottom-nav-bar__icon-container--${key}`;
      this.liEl.classList.add(iconClass);

      // Copy the <li> and attach to the <ul>
      const navItem = this.liEl.cloneNode(true) as HTMLLIElement;
      this.ulEl.append(navItem);

      // Remove the class from the original element
      this.liEl.classList.remove(iconClass);
    });

    // Ensures only one of the component is ever present in the parent element
    !this.parentEl.contains(this.navEl) &&
      this.parentEl.insertAdjacentElement('beforeend', this.navEl);
  }
}
