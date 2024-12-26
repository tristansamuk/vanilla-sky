import './page-layout.css';

export class PageLayout {
  private hostEl: HTMLElement;
  private templateEl: HTMLTemplateElement;
  private pageLayout: HTMLDivElement;

  constructor(hostElId: string) {
    this.hostEl = document.getElementById(hostElId) as HTMLElement;
    this.templateEl = document.getElementById(
      'page-layout-template'
    ) as HTMLTemplateElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.pageLayout = templateContent.querySelector(
      '.page-layout'
    ) as HTMLDivElement;

    this.render();
  }

  private render() {
    this.hostEl.append(this.pageLayout);
  }
}
