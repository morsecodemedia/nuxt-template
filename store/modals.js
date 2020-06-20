export const state = () => ({
  showExitModal: false,
  exitLink: ''
})

export const mutations = {
  toggleExitModal: (state) => {
    state.showExitModal = !state.showExitModal
  },
  setExitModal: (state, status) => {
    if (status) {
      state.showExitModal = true
    } else {
      state.showExitModal = false
    }
  },
  setExitLink: (state, val) => {
    state.exitLink = val
  }
}

export const getters = {
  showExitModal: (state) => {
    return state.showExitModal
  },
  exitLink: (state) => {
    return state.exitLink
  },
  isModalOpen: (state) => {
    return (
      state.showExitModal
    )
  }
}
