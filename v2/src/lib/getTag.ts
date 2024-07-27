export default function getTag(
  type: keyof HTMLElementTagNameMap,
  props?: Partial<HTMLElementTagNameMap[typeof type]> & { [key: string]: any },
  children?: HTMLElement[]
): HTMLElementTagNameMap[typeof type] {
  const node: HTMLElementTagNameMap[typeof type] & { [key: string]: any } = document.createElement(type);
  if (props) Object.keys(props).forEach(propKey => node[propKey] = props[propKey]);
  if (children?.length) node.append(...children);
  return node;
}
