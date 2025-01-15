import { createTemplate } from '../../scripts/utils';
import './settings-page.css';

export class SettingsPage {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;
  private page: DocumentFragment;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(`
      <p>Settings Page</p>
      `);

    this.page = document.importNode(this.templateEl.content, true);

    this.render();
  }

  private render() {
    this.parentEl.innerHTML = '';
    this.parentEl.append(this.page);
  }
}
