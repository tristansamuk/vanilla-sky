import {
  defaultSVGAttributes,
  PathAttributeNames,
  PathAttributes,
  SvgAttributeNames,
  SVGAttributes,
} from '../../constants/svgs';
import { createTemplate } from '../../scripts/utils';

/**
 * @class A reusable SVG component.
 * @param {string} pathParams - The string used in the `d` attribute of the `<path>` element to draw the image
 * @param {SVGAttributes} svgParams - The attributes object to be applied to `<svg>` element
 * @param {string} parentEl - The css selector of the element that will hold the `<svg>` element
 */

export class SVGComponent {
  private templateEl: HTMLTemplateElement;
  private parentEl: HTMLElement;

  private svgEl: SVGElement;
  private pathEl: SVGPathElement;
  private svgAttributes: SVGAttributes;
  private pathAttributes: PathAttributes;

  constructor(
    pathParams: PathAttributes,
    svgParams = defaultSVGAttributes,
    parentClass: string
  ) {
    this.pathAttributes = pathParams;
    this.svgAttributes = svgParams;
    this.parentEl = document.querySelector(parentClass) as HTMLElement;

    this.templateEl = createTemplate(/*html*/ `
      <svg>
        <path></path>
      </svg>`);

    const templateContent = document.importNode(this.templateEl.content, true);

    this.svgEl = templateContent.querySelector('svg') as SVGElement;
    console.log('this.svgEl', this.svgEl);
    this.pathEl = templateContent.querySelector('path') as SVGPathElement;

    this.configureSVGEl(this.svgAttributes);
    this.configurePathEl(this.pathAttributes);

    this.render();
  }

  private configureSVGEl(attributes: SVGAttributes) {
    /** @todo Refactor with an iterator of some sort. */

    this.svgEl.setAttribute(SvgAttributeNames.FILL, attributes.fill);
    this.svgEl.setAttribute(SvgAttributeNames.WIDTH, attributes.width);
    this.svgEl.setAttribute(SvgAttributeNames.HEIGHT, attributes.height);
    this.svgEl.setAttribute(SvgAttributeNames.VIEW_BOX, attributes.viewBox);
    this.svgEl.setAttribute(
      SvgAttributeNames.ARIA_HIDDEN,
      attributes.ariaHidden
    );
    this.svgEl.setAttribute(SvgAttributeNames.CLASS, attributes.class);
    this.svgEl.setAttribute(SvgAttributeNames.STYLE, attributes.style);
  }

  private configurePathEl(attributes: PathAttributes) {
    this.pathEl.setAttribute(PathAttributeNames.FILL, attributes.fill);
    this.pathEl.setAttribute(PathAttributeNames.FILL_RULE, attributes.fillRule);
    this.pathEl.setAttribute(PathAttributeNames.CLIP_RULE, attributes.clipRule);
    this.pathEl.setAttribute(PathAttributeNames.D, attributes.d);
  }

  private render() {
    this.parentEl.insertAdjacentElement('afterbegin', this.svgEl);
  }
}
