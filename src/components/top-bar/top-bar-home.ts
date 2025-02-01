import './top-bar-home.css';
import { createTemplate } from '../../scripts/utils';
import { toggleVisibility } from '../../scripts/utils';
import { topBarIcons } from '../../constants/svgs';
import { SVGComponent } from '../svg-component/svg-component';

/**
 * @class TopBarHome component on home page that contains menu buttons, logo, and subscribed feeds
 * @param {string} parentElClass - The class name of the target parent element
 */

export class TopBarHome {
  private parentEl: HTMLElement;
  private templateEl: HTMLTemplateElement;
  private menuButtonEl: HTMLButtonElement;
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

    this.menuButtonEl = this.component.querySelector(
      '.top-bar-home__button--menu'
    ) as HTMLButtonElement;

    this.render();
    this.attachSVGs();
    this.menuButtonEl.addEventListener('click', () =>
      toggleVisibility('.layout__nav--mobile', 'flex')
    );
  }
  private attachSVGs() {
    const {
      butterfly,
      butterflySVG,
      hamburgerMenu,
      hamburgerMenuSVG,
      hashtag,
      hashtagSVG,
    } = topBarIcons;

    new SVGComponent(
      hamburgerMenu,
      hamburgerMenuSVG,
      '.top-bar-home__button--menu'
    );
    new SVGComponent(butterfly, butterflySVG, '.top-bar-home__container--logo');
    new SVGComponent(hashtag, hashtagSVG, '.top-bar-home__button--feeds');
  }

  private render() {
    this.parentEl.insertAdjacentElement('afterbegin', this.component);
  }
}
