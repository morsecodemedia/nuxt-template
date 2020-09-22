<template>
  <h1>
    Hello World!
  </h1>
</template>

<script>
export default {
  name: 'Homepage',
  head () {
    return {
      title: '',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: '' },
        { hid: 'twtitle', name: 'twitter:title', content: '' },
        { hid: 'googlename', itemprop: 'name', content: '' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'ogdescription', property: 'og:description', content: '' },
        { hid: 'twdescription', name: 'twitter:description', content: '' },
        { hid: 'googledescription', itemprop: 'description', content: '' },
        { hid: 'ogurl', property: 'og:url', content: 'https://www.domain.com/' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://www.domain.com/' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://www.domain.com/' + this.$route.path }
      ]
    }
  }
}
</script>

<style>

</style>
