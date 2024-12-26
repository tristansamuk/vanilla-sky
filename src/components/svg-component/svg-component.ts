import {
  defaultSVGAttributes,
  PathAttributeNames,
  PathAttributes,
  SvgAttributeNames,
  SVGAttributes,
} from '../../constants/svgs';

/**
 * A reusable SVG component.
 * @param pathParams - The string used in the `d` attribute of the `<path>` element to draw the image
 * @param svgParams - The attributes object to be applied to `<svg>` element
 * @param className - The class name of the element that will hold the `<svg>` element
 */

export class SVGComponent {
  private templateEl = document.getElementById(
    'svg-template'
  ) as HTMLTemplateElement;
  private parentEl: HTMLElement;

  private svgEl: SVGElement;
  private pathEl: SVGPathElement;
  private svgAttributes: SVGAttributes;
  private pathAttributes: PathAttributes;
  private parentClassName: string;

  constructor(
    pathParams: PathAttributes,
    svgParams = defaultSVGAttributes,
    className: string
  ) {
    this.parentClassName = className;
    this.parentEl = document.querySelector(this.parentClassName) as HTMLElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.pathAttributes = pathParams;
    this.svgAttributes = svgParams;
    this.parentClassName = className;

    this.svgEl = templateContent.querySelector('svg') as SVGElement;
    this.pathEl = templateContent.querySelector('path') as SVGPathElement;

    this.configureSVG(this.svgAttributes);
    this.configurePath(this.pathAttributes);

    this.svgEl.append(this.pathEl);

    this.render();
  }

  private configureSVG(attributes: SVGAttributes) {
    // TODO: Refactor with iterator
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
  private configurePath(attributes: PathAttributes) {
    this.pathEl.setAttribute(PathAttributeNames.FILL, attributes.fill);
    this.pathEl.setAttribute(PathAttributeNames.FILL_RULE, attributes.fillRule);
    this.pathEl.setAttribute(PathAttributeNames.CLIP_RULE, attributes.clipRule);
    this.pathEl.setAttribute(PathAttributeNames.D, attributes.d);
  }

  private render() {
    this.parentEl.insertAdjacentElement('afterbegin', this.svgEl);
  }
}
