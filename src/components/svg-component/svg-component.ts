import {
  defaultSVGAttributes,
  PathAttributeNames,
  PathAttributes,
  SvgAttributeNames,
  SVGAttributes,
} from '../../constants/svgs';

/**
 * A reusable SVG component.
 */

export class SVGComponent {
  private templateEl = document.getElementById(
    'svg-template'
  ) as HTMLTemplateElement;
  private hostEl: HTMLElement;
  private svgEl: SVGElement;
  private pathEl: SVGPathElement;
  private svgAttributes = defaultSVGAttributes;
  private pathAttributes: PathAttributes;
  private hostClassName: string;

  constructor(pathParams: PathAttributes, className: string) {
    this.hostClassName = className;
    this.hostEl = document.querySelector(this.hostClassName) as HTMLElement;
    const templateContent = document.importNode(this.templateEl.content, true);

    this.pathAttributes = pathParams;
    this.hostClassName = className;

    this.svgEl = templateContent.querySelector('svg') as SVGElement;
    this.pathEl = templateContent.querySelector('path') as SVGPathElement;

    this.configureSVG(this.svgAttributes);
    this.configurePath(this.pathAttributes);

    this.svgEl.appendChild(this.pathEl);

    this.render();
  }

  private configureSVG(attributes: SVGAttributes) {
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
    this.hostEl.insertAdjacentElement('afterbegin', this.svgEl);
  }
}
