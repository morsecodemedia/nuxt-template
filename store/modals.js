export const state = () => ({
  modalStack: []
})

export const mutations = {
  toggleModal: (state, { modal, data }) => {
    if (state.modalStack.some(item => item.id === modal)) {
      // if exists, remove by splice (reactive)
      const index = state.modalStack.findIndex(item => item.id === modal)
      state.modalStack.splice(index, 1)
    } else {
      // if not exists, add by push (reactive)
      state.modalStack.push({ id: modal, data })
    }
  },
  setModalOn: (state, { modal, data }) => {
    if (state.modalStack.some(item => item.id === modal)) {
      // if exists, remove by splice (reactive)
      const index = state.modalStack.findIndex(item => item.id === modal)
      state.modalStack.splice(index, 1)
    }
    // regardless of above add by push (reactive)
    state.modalStack.push({ id: modal, data })
  },
  setModalOff: (state, modal) => {
    if (state.modalStack.some(item => item.id === modal)) {
      // if exists, remove by splice (reactive)
      const index = state.modalStack.findIndex(item => item.id === modal)
      state.modalStack.splice(index, 1)
    }
  }
}

export const getters = {
  isModalOpen: (state) => {
    return (state.modalStack.length > 0)
  },
  isModalOfNameOpen: state => (modal) => {
    return state.modalStack.some(item => item.id === modal)
  },
  getModalData: state => (modal) => {
    const needle = state.modalStack.find(item => item.id === modal)
    return (needle) ? needle.data : null
  }
}
