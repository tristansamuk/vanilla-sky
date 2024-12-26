import './page-layout.css';

export class PageLayout {
  private parentEl: HTMLElement;
  private templateEl: HTMLTemplateElement;
  private pageLayout: HTMLDivElement;

  constructor(parentElId: string) {
    this.parentEl = document.getElementById(parentElId) as HTMLElement;
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
    this.parentEl.append(this.pageLayout);
  }
}
