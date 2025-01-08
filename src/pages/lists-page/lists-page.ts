import { createTemplate } from '../../scripts/utils';
import './lists-page.css';

export class ListsPage {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;
  private parEl: HTMLParagraphElement;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(/*html*/ `
      <p>Chat Page</p>
      `);

    const templateContent = document.importNode(this.templateEl.content, true);
    this.parEl = templateContent.querySelector('p') as HTMLParagraphElement;

    this.render();
  }

  render() {
    this.parentEl.innerHTML = '';
    this.parentEl.append(this.parEl);
  }
}
