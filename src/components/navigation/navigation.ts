import './navigation.css';
import { buttons, navigationMain } from '../../constants/ui-strings';
import { createTemplate } from '../../scripts/utils';
import { SVGComponent } from '../svg-component/svg-component';
import {
  navIcons,
  newPost,
  newPostSVG,
  defaultSVGAttributes,
} from '../../constants/svgs';

/**
 * @class Navigation component
 * @param {string} parentElClass - The class name of the target parent element
 */

export class Navigation {
  private parentEl: HTMLElement;
  private templateEl: HTMLTemplateElement;

  private navEl: HTMLElement;
  // private imgEl: HTMLImageElement;
  private ulEl: HTMLUListElement;
  private listItemEl: HTMLLIElement;
  private anchorEl: HTMLAnchorElement;
  private paragraphEl: HTMLParagraphElement;
  private buttonEl: HTMLButtonElement;

  constructor(parentElClass: string) {
    this.parentEl = document.querySelector(parentElClass) as HTMLDivElement;

    this.templateEl = createTemplate(/*html*/ `
        <nav class="nav">
          <div class="nav__container--profile-pic">
            <img
              class="nav__profile-pic"
              src="./src/assets/images/profile-pic-riker.jpg"
            />
          </div>
          <ul class="nav__list">
            <li class="nav__item">
              <a>
                <p class="nav__text"></p>
              </a>
            </li>
           </ul>
          <div class="nav__container--button">
            <button class="nav__button"></button>
          </div>
        </nav>
      `) as HTMLTemplateElement;

    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('nav') as HTMLElement;
    // this.imgEl = templateContent.querySelector('img') as HTMLImageElement;
    this.ulEl = templateContent.querySelector('ul') as HTMLUListElement;
    this.anchorEl = templateContent.querySelector('a') as HTMLAnchorElement;
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
    if (this.listItemEl.querySelector('svg')) {
      return;
    }
    Object.entries(navIcons).forEach(([key, value]) => {
      new SVGComponent(value, defaultSVGAttributes, `.nav__link--${key}`);
    });
  }

  private formatButton() {
    this.buttonEl.innerText = buttons.newPost;
    new SVGComponent(newPost, newPostSVG, 'button');
  }

  private render() {
    this.ulEl.innerHTML = '';
    this.listItemEl.innerHTML = '';
    this.anchorEl.innerHTML = '';

    Object.entries(navigationMain).forEach(([key, value]) => {
      // Copy the <li> and the <a>
      const navListItem = this.listItemEl.cloneNode(true) as HTMLLIElement;
      const link = this.anchorEl.cloneNode(true) as HTMLAnchorElement;

      // Set `<a>` href, add class (for attaching SVGs), attach to <li>
      link.setAttribute('href', `${key}`);
      link.classList.add(`nav__link--${key}`);
      navListItem.append(link);

      // Copy the <p> and set text content
      const navItemParagraph = this.paragraphEl.cloneNode(true);
      navItemParagraph.textContent = value;

      // Insert the <p> into the <a>, and the <li> to the <ul>
      navListItem.querySelector('a')!.append(navItemParagraph);

      this.ulEl.append(navListItem);
    });

    // Ensures only one of the component is ever present in the parent element
    !this.parentEl.contains(this.navEl) && this.parentEl.append(this.navEl);
  }
}
