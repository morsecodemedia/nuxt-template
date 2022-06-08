const { addResizeListener, removeResizeListener } = require('@jamestomasino/resize-frame')
export default ({ app }, inject) => {
  inject('addResizeListener', addResizeListener)
  inject('removeResizeListener', removeResizeListener)
}
