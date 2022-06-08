export default ({ store }, inject) => {
  inject('exitlink', exitlink)
  inject('closeexit', closeexit)

  function exitlink (e) {
    const href = gethref(e.target)
    store.commit('modals/setModalOn', { modal: 'exit', data: { href } })
    e.preventDefault()
  }

  function closeexit () {
    store.commit('modals/setModalOff', 'exit')
  }

  function gethref (e) {
    return e.href || gethref(e.parentNode)
  }
}
