import './navigation-desktop.css';
import { navigationMain } from '../../constants/ui-strings';

export class NavigationDesktop {
  private templateEl: HTMLTemplateElement;
  private hostEl: HTMLElement;
  private navEl: HTMLElement;
  private ulEl: HTMLUListElement;
  private listItemEl: HTMLLIElement;
  private paragraphEl: HTMLParagraphElement;

  constructor(templateElId = 'nav-template', hostElId = 'app') {
    this.templateEl = document.getElementById(
      templateElId
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById(hostElId) as HTMLDivElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('.nav') as HTMLElement;

    this.ulEl = templateContent.querySelector('.nav__list') as HTMLUListElement;

    this.listItemEl = templateContent.querySelector(
      '.nav__item'
    ) as HTMLLIElement;

    this.paragraphEl = templateContent.querySelector(
      '.nav__text'
    ) as HTMLParagraphElement;

    this.render();
  }

  private render() {
    this.ulEl.innerHTML = '';
    this.listItemEl.innerHTML = '';

    Object.entries(navigationMain).forEach(([key, value]) => {
      // Add a class that SVGComponent can use to attach the <svg> icon to the DOM.
      const iconClass = `nav__icon--${key}`;
      this.listItemEl.classList.add(iconClass);

      // Copy the <li> and <p>, and set text content
      const navListItem = this.listItemEl.cloneNode(true);
      const navItemParagraph = this.paragraphEl.cloneNode(true);
      navItemParagraph.textContent = value;

      // Attach the <p> to the <li>, and the <li> to the <ul>
      navListItem.appendChild(navItemParagraph);
      this.ulEl.appendChild(navListItem);

      // Remove the class from the original element
      this.listItemEl.classList.remove(iconClass);
    });

    this.hostEl.appendChild(this.navEl);
  }
}
