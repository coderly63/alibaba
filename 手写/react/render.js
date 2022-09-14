function createElement(type, props, ...children) {
  // 核心逻辑不复杂，将参数都塞到一个对象上返回就行
  // children也要放到props里面去，这样我们在组件里面就能通过this.props.children拿到子元素
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}

function render(vDom, container) {
  let dom
  if (typeof vDom !== 'object') dom = document.createTextNode(vDom)
  else dom = document.createElement(vDom.type)
  if (vDom.props) return
  Object.keys(vDom.props)
    .filter((key) => key !== 'children')
    .forEach((item) => {
      dom[item] = vDom.props[item]
    })
  if (vDom.props.children && vDom.props.children.length) {
    vDom.props.children.forEach((child) => render(child, dom))
  }
  container.appendChild(dom)
}
