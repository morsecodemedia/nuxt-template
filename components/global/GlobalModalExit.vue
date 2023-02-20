<template>
  <GlobalModal v-slot="prop" :modal-name="modalName">
    <p>
      You are now leaving DOMAIN.com:
    </p>
    <div class="buttons">
      <a
        rel="noopener nofollow"
        tabindex="0"
        class="continue-btn"
        :href="exitLink"
        target="_blank"
        @click="close"
      >
        Continue
      </a>
      <button
        tabindex="0"
        class="close-btn"
        @click="prop.close"
        @keyup.enter="prop.close"
      >
        Cancel
      </button>
    </div>
  </GlobalModal>
</template>

<script>
export default {
  data () {
    return {
      modalName: 'exit'
    }
  },
  computed: {
    isOpen () {
      return this.$store.getters['modals/isModalOfNameOpen'](this.modalName)
    },
    exitLink () {
      return this.$store.getters['modals/getModalData'](this.modalName)
    }
  },
  methods: {
    close () {
      setTimeout(() => {
        this.prop.close()
      }, 500)
    }
  }
}
</script>
