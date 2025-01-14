import './top-bar-home.css';
import { createTemplate } from '../../scripts/utils';
import { SVGComponent } from '../svg-component/svg-component';

/**
 * @class TopBarHome component on home page that contains menu buttons, logo, and subscribed feeds
 * @param {string} parentElClass - The class name of the target parent element
 */

export class TopBarHome {
  private parentEl: HTMLElement;
  private templateEl: HTMLTemplateElement;
  private component: HTMLDivElement;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(`
      <div class="top-bar-home">
        <div class="top-bar-home__container--top">
          <button class="top-bar-home__button--menu">
          </button>
          <div class="top-bar-home__container--logo">
          </div>
          <button class="top-bar-home__button--feeds">
          </button>
        </div>
        <div class="top-bar-home__container--bottom">
          <a>
            <p class="top-bar-home__feed-name"></p>
          </a>
        </div>
      </div>
      `);

    const templateContent = document.importNode(this.templateEl.content, true);

    this.component = templateContent.querySelector(
      '.top-bar-home'
    ) as HTMLDivElement;

    this.render();
  }
  private render() {
    this.parentEl.insertAdjacentElement('afterbegin', this.component);
  }
}
