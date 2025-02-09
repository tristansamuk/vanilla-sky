import { createTemplate, toggleVisibility } from '../../scripts/utils';
import './layout.css';

/**
 * @class A resposive page layout component that contains the other components rendered on each page
 * @param {string} templateElId - The `id` of the `<template>` element
 * @param {string} parentElId - `The` id of the targe parent element
 */
export class Layout {
  private parentEl: HTMLElement;
  private templateEl: HTMLTemplateElement;
  private component: HTMLDivElement;
  private overlay: HTMLDivElement;

  constructor(parentElId: string) {
    this.parentEl = document.getElementById(parentElId) as HTMLElement;

    this.templateEl = createTemplate(`
      <div class="layout">
        <div class="layout__nav--mobile">
          <div class="layout__mobile-overlay"></div>
        </div>
        <div class="layout__container">
          <div class="layout__nav--desktop"></div>
          <div class="layout__main"></div>
          <div class="layout__search">search</div>
        </div>
      </div>
      `);

    const templateContent = document.importNode(this.templateEl.content, true);

    this.component = templateContent.querySelector('.layout') as HTMLDivElement;
    this.overlay = this.component.querySelector(
      '.layout__mobile-overlay'
    ) as HTMLDivElement;

    this.render();
    this.overlay.addEventListener('click', () =>
      toggleVisibility('.layout__nav--mobile', 'none')
    );
  }

  private render() {
    this.parentEl.append(this.component);
  }
}
