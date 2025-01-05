import { createTemplate } from '../../scripts/utils';
import './layout.css';

/**
 * @class A resposive page layout component that contains the other components rendered on each page
 * @param {string} templateElId - The `id` of the `<template>` element
 * @param {string} parentElId - `The` id of the targe parent element
 */
export class Layout {
  private parentEl: HTMLElement;
  private templateEl: HTMLTemplateElement;
  private pageLayout: HTMLDivElement;

  constructor(parentElId: string) {
    this.parentEl = document.getElementById(parentElId) as HTMLElement;

    this.templateEl = createTemplate(/*html*/ `
      <div class="layout">
        <div class="layout__nav--mobile"></div>
        <div class="layout__container">
          <div class="layout__nav--desktop"></div>
          <div class="layout__feed">feed</div>
          <div class="layout__search">search</div>
        </div>
      </div>`);

    const templateContent = document.importNode(this.templateEl.content, true);

    this.pageLayout = templateContent.querySelector(
      '.layout'
    ) as HTMLDivElement;

    this.render();
  }

  private render() {
    this.parentEl.append(this.pageLayout);
  }
}
