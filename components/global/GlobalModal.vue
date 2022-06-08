<template>
  <client-only>
    <focus-trap
      :active="isOpen"
      @deactivate="close"
    >
      <div
        v-show="isOpen"
        tabindex="-1"
        class="generic-modal-blur"
        :class="[modalName, { 'active': isOpen }]"
      >
        <div class="generic-modal">
          <div class="generic-modal-content-container">
            <slot :modalName="modalName" :close="close" />
          </div>
          <slot name="button">
            <button
              tabindex="0"
              class="close-x"
              @click="close"
              @keyup.enter="close"
            >
              <div class="line" />
            </button>
          </slot>
        </div>
      </div>
    </focus-trap>
  </client-only>
</template>

<script>
export default {
  props: {
    modalName: {
      type: String,
      required: true
    }
  },
  computed: {
    isOpen () {
      return this.$store.getters['modals/isModalOfNameOpen'](this.modalName)
    }
  },
  methods: {
    close () {
      console.log('modalName:', this.modalName)
      this.$closeModal(this.modalName)
    }
  }
}
</script>
