export const state = () => ({
  modalStack: [],
  modalData: {}
})

export const mutations = {
  toggleModal: (state, { modal, data }) => {
    if (state.modalStack.includes(modal)) {
      state.modalStack = state.modalStack.filter(id => id !== modal)
      delete state.modalData[modal]
    } else {
      state.modalStack.push(modal)
      state.modalData[modal] = data
    }
  },
  setModalOn: (state, { modal, data }) => {
    const index = state.modalStack.indexOf(modal)
    if (index === -1) {
      state.modalStack.push(modal)
    }
    state.modalData[modal] = data
  },
  setModalOff: (state, modal) => {
    state.modalStack = state.modalStack.filter(id => id !== modal)
    delete state.modalData[modal]
  }
}

export const getters = {
  isModalOpen: (state) => {
    return (state.modalStack.length > 0)
  },
  isModalOfNameOpen: state => (modal) => {
    return state.modalStack.includes(modal)
  },
  getModalData: state => (modal) => {
    return state.modalData[modal]
  }
}
