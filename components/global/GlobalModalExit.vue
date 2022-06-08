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
        href="#"
        target="_blank"
        @click="[navigate($event), prop.close($event)]"
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
  methods: {
    navigate (e) {
      const data = this.$store.getters['modals/getModalData'](this.modalName)
      let href = ''
      if (data && Object.hasOwn(data, 'href')) {
        href = data.href
        window.open(href, '_blank')
      }
      e.preventDefault()
    }
  }
}
</script>
