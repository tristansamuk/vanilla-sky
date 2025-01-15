import { createTemplate } from '../../scripts/utils';
import './profile-page.css';

export class ProfilePage {
  private parentEl: HTMLDivElement;
  private templateEl: HTMLTemplateElement;
  private page: HTMLDivElement;

  constructor() {
    this.parentEl = document.querySelector('.layout__main') as HTMLDivElement;

    this.templateEl = createTemplate(`
      <div class="profile">
        <p>Profile Page</p>
      </div>
      `);

    const templateContent = document.importNode(this.templateEl.content, true);
    this.page = templateContent.querySelector('.profile') as HTMLDivElement;

    this.render();
  }

  render() {
    this.parentEl.innerHTML = '';
    this.parentEl.append(this.page);
  }
}
