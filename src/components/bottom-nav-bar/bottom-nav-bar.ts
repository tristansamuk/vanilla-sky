import './bottom-nav-bar.css';
/**
 * @class Bottom navigation bar component that appears on screens and windows below 800px
 * @param {string} parentElClass - The class name of the target parent element
 */
export class BottomNavBar {
  private bodyEl: HTMLBodyElement;
  private templateEl: HTMLTemplateElement;
  private navEl: HTMLElement;

  constructor() {
    this.bodyEl = document.querySelector('body') as HTMLBodyElement;
    this.templateEl = document.getElementById(
      'bottom-nav-bar-template'
    ) as HTMLTemplateElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.navEl = templateContent.querySelector('nav') as HTMLElement;

    this.render();
  }
  private render() {
    this.bodyEl.insertAdjacentElement('beforeend', this.navEl);
  }
}
