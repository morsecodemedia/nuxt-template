export default ({ store }, inject) => {
  inject('exitlink', exitlink)

  function exitlink (e) {
    const data = gethref(e.target)
    const modal = 'exit'
    store.commit('modals/setModalOn', { modal, data })
    e.preventDefault()
  }

  function gethref (e) {
    return e.href || gethref(e.parentNode)
  }
}
