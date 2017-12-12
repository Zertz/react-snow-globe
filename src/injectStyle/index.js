const injectStyle = (style) => {
  const styleElement = document.createElement('style')

  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(style));

  document.head.appendChild(styleElement)
}

export default injectStyle
