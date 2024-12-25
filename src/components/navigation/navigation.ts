import './navigation.css';
import { buttons, navigationMain } from '../../constants/ui-strings';
import { SVGComponent } from '../svg-component/svg-component';
import {
  chat,
  feeds,
  home,
  lists,
  notifications,
  newPost,
  profile,
  search,
  settings,
  newPostSVG,
  defaultSVGAttributes,
} from '../../constants/svgs';

export class Navigation {
  private templateEl: HTMLTemplateElement;
  private hostEl: HTMLElement;
  private navEl: HTMLElement;
  private ulEl: HTMLUListElement;
  private listItemEl: HTMLLIElement;
  private paragraphEl: HTMLParagraphElement;
  private buttonEl: HTMLButtonElement;

  constructor(templateElId = 'nav-template', hostElId = 'app') {
    this.hostEl = document.getElementById(hostElId) as HTMLDivElement;

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
    // TODO: refactor to make dynamic and put inside render() method
    new SVGComponent(home, defaultSVGAttributes, `.nav__icon--home`);
    new SVGComponent(search, defaultSVGAttributes, `.nav__icon--search`);
    new SVGComponent(
      notifications,
      defaultSVGAttributes,
      `.nav__icon--notifications`
    );
    new SVGComponent(chat, defaultSVGAttributes, `.nav__icon--chat`);
    new SVGComponent(feeds, defaultSVGAttributes, `.nav__icon--feeds`);
    new SVGComponent(lists, defaultSVGAttributes, `.nav__icon--lists`);
    new SVGComponent(profile, defaultSVGAttributes, `.nav__icon--profile`);
    new SVGComponent(settings, defaultSVGAttributes, `.nav__icon--settings`);
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
