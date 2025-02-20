import { createTemplate } from '../../scripts/utils';
import './feeds-pages.css';

export class FeedsPage {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;
  private page: DocumentFragment;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(`
      <div class="feeds">
        <p>Feeds Page</p>
      <div>
      `);

    this.page = document.importNode(this.templateEl.content, true);

    this.render();
  }

  private render() {
    this.parentEl.innerHTML = '';
    this.parentEl.append(this.page);
  }
}
