<template>
  <div>
    <div id="error">
      <section>
        <h1 v-if="error.statusCode === 404">
          Page not found
        </h1>
        <h1 v-else>
          An error occurred
          {{ error }}
        </h1>
        <nuxt-link to="/">
          Back to main
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

let bodyTag = null

export default {
  name: 'Error',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: '',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: '' },
        { hid: 'twtitle', name: 'twitter:title', content: '' },
        { hid: 'googlename', itemprop: 'name', content: '' },
        { hid: 'description', name: 'description', content: 'Page not found' },
        { hid: 'ogdescription', property: 'og:description', content: 'Page not found' },
        { hid: 'twdescription', name: 'twitter:description', content: 'Page not found' },
        { hid: 'googledescription', itemprop: 'description', content: 'Page not found' },
        { hid: 'ogurl', property: 'og:url', content: 'https://www.domain.com' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://www.domain.com' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://www.domain.com' + this.$route.path }
      ],
      bodyAttrs: {
        class: 'page-' + ((this.$route.path.length > 1) ? this.$route.path.slice(1).replace(/\/$/, '').replace(/\//g, '-') : 'home')
      }
    }
  },
  computed: {
    ...mapGetters('modals', ['isModalOpen'])
  },
  watch: {
    isModalOpen (val) {
      if (val) {
        bodyTag.classList.add('killscroll')
      } else {
        bodyTag.classList.remove('killscroll')
      }
    }
  },
  mounted () {
    bodyTag = document.getElementsByTagName('body')[0]
    bodyTag.classList.remove('killscroll')

    if (this.getParameterByName('screenshot')) {
      bodyTag.classList.add('screenshot')
    } else {
      bodyTag.classList.remove('screenshot')
    }

    if (this.$nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash () {
      const hash = this.$nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: 0 })
      })
    },
    getParameterByName (name, url) {
      if (process.browser) {
        if (!url) {
          url = window.location.href
        }
        name = name.replace(/[[\]]/g, '\\$&')
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
        const results = regex.exec(url)
        if (!results) {
          return null
        }
        if (!results[2]) {
          return ''
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
      }
    }
  }
}
</script>
