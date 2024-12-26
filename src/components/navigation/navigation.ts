import './navigation.css';
import { buttons, navigationMain } from '../../constants/ui-strings';
import { SVGComponent } from '../svg-component/svg-component';
import {
  navIcons,
  newPost,
  newPostSVG,
  defaultSVGAttributes,
} from '../../constants/svgs';

export class Navigation {
  private templateEl: HTMLTemplateElement;
  private parentEl: HTMLElement;
  private navEl: HTMLElement;
  private ulEl: HTMLUListElement;
  private listItemEl: HTMLLIElement;
  private paragraphEl: HTMLParagraphElement;
  private buttonEl: HTMLButtonElement;

  constructor(templateElId = 'nav-template', parentElId = 'app') {
    this.parentEl = document.getElementById(parentElId) as HTMLDivElement;

    this.templateEl = document.getElementById(
      templateElId
    ) as HTMLTemplateElement;
    const templateContent = document.importNode(this.templateEl.content, true);
    this.navEl = templateContent.querySelector('nav') as HTMLElement;
    this.ulEl = templateContent.querySelector('ul') as HTMLUListElement;
    this.listItemEl = templateContent.querySelector('li') as HTMLLIElement;
    this.paragraphEl = templateContent.querySelector(
      'p'
    ) as HTMLParagraphElement;
    this.buttonEl = templateContent.querySelector(
      'button'
    ) as HTMLButtonElement;

    this.render();
    this.attachIcons();
    this.formatButton();
  }

  private attachIcons() {
    Object.entries(navIcons).forEach(([key, value]) => {
      new SVGComponent(value, defaultSVGAttributes, `.nav__icon--${key}`);
    });
  }

  private formatButton() {
    this.buttonEl.innerText = buttons.newPost;
    new SVGComponent(newPost, newPostSVG, 'button');
  }

  private render() {
    this.ulEl.innerHTML = '';
    this.listItemEl.innerHTML = '';

    Object.entries(navigationMain).forEach(([key, value]) => {
      // Add a class that SVGComponent can use to attach the <svg> icon to the DOM.
      const iconClass = `nav__icon--${key}`;
      this.listItemEl.classList.add(iconClass);

      // Copy the <li> and <p>, and set text content
      const navListItem = this.listItemEl.cloneNode(true) as HTMLLIElement;
      const navItemParagraph = this.paragraphEl.cloneNode(true);
      navItemParagraph.textContent = value;

      // Attach the <p> to the <li>, and the <li> to the <ul>
      navListItem.append(navItemParagraph);
      this.ulEl.append(navListItem);

      // Remove the class from the original element
      this.listItemEl.classList.remove(iconClass);
    });

    this.parentEl.append(this.navEl);
  }
}
