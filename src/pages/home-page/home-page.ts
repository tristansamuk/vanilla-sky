import { createTemplate } from '../../scripts/utils';
import './home-page.css';

export class HomePage {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;
  private page: DocumentFragment;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(`
      <div class="home">
        <p>Home Page</p>
      </div>
      `);

    this.page = document.importNode(this.templateEl.content, true);

    this.render();
  }

  private render() {
    this.parentEl.innerHTML = '';
    this.parentEl.append(this.page);
  }
}
