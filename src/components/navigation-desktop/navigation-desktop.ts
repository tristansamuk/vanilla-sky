import './navigation-desktop.css';
import { navigationMain } from '../../constants/ui-strings';

export class NavigationDesktop {
  private templateEl: HTMLTemplateElement;
  private hostEl: HTMLElement;
  private navEl: HTMLElement;
  private ulEl: HTMLUListElement;
  private listItemEl: HTMLLIElement;
  private paragraphEl: HTMLParagraphElement;

  constructor(templateElId = 'nav-desktop-template', hostElId = 'app') {
    this.templateEl = document.getElementById(
      templateElId
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById(hostElId) as HTMLDivElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('.nav-desktop') as HTMLElement;

    this.ulEl = templateContent.querySelector(
      '.nav-desktop__list'
    ) as HTMLUListElement;

    this.listItemEl = templateContent.querySelector(
      '.nav-desktop__item'
    ) as HTMLLIElement;

    this.paragraphEl = templateContent.querySelector(
      '.nav-desktop__text'
    ) as HTMLParagraphElement;

    this.render();
  }

  private render() {
    this.ulEl.innerHTML = '';
    this.listItemEl.innerHTML = '';

    Object.entries(navigationMain).forEach(([_key, value]) => {
      const navItem = this.listItemEl.cloneNode(true);
      const navItemText = this.paragraphEl.cloneNode(true);
      navItemText.textContent = value;

      navItem.appendChild(navItemText);

      this.ulEl.appendChild(navItem);
    });

    this.hostEl.appendChild(this.navEl);
  }
}
