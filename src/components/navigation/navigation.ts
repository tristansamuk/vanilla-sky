import './navigation.css';
import { navigationMain } from '../../constants/constants';

export class Navigation {
  private templateEl: HTMLTemplateElement;
  private hostEl: HTMLElement;
  private navEl: HTMLElement;
  private ulEl: HTMLUListElement;
  private listItemEl: HTMLLIElement;

  constructor(templateElId = 'navigation-main', hostElId = 'app') {
    this.templateEl = document.getElementById(
      templateElId
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById(hostElId) as HTMLDivElement;

    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('.navigation') as HTMLElement;

    this.ulEl = templateContent.querySelector(
      '.navigation__list'
    ) as HTMLUListElement;

    this.listItemEl = templateContent.querySelector(
      '.navigation__item'
    ) as HTMLLIElement;

    this.render();
  }
  private render() {
    const test = ['one', 'two', 'three'];
    this.ulEl.innerHTML = '';

    test.map((item) => {
      const navItem = this.listItemEl.cloneNode(true);
      navItem.textContent = item;
      this.ulEl.appendChild(navItem);
    });

    this.hostEl.appendChild(this.navEl);
  }
}
