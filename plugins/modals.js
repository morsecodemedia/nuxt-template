export default ({ store }, inject) => {
  inject('openModal', openModal)
  inject('closeModal', closeModal)
  inject('toggleModal', toggleModal)

  function toggleModal (modal, data) {
    store.commit('modals/toggleModal', { modal, data })
  }
  function openModal (modal, data) {
    store.commit('modals/setModalOn', { modal, data })
  }
  function closeModal (modal) {
    store.commit('modals/setModalOff', modal)
  }
}
