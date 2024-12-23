export abstract class Component<T extends HTMLElement> {
  hostElement: T;
  componentHTML: string;

  constructor(hostElementId: string, componentHTML: string) {
    this.hostElement = document.getElementById(hostElementId) as T;
    this.componentHTML = componentHTML;
    this.attach(componentHTML);
  }

  private attach(component: string) {
    this.hostElement.innerHTML = component;
  }
}
