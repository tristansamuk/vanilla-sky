import { createTemplate } from '../../scripts/utils';
import './profile-page.css';

export class ProfilePage {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;
  private parEl: HTMLParagraphElement;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(/*html*/ `
      <p>Profile Page</p>
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
