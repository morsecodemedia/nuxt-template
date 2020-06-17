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
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        { hid: 'ogtitle', property: 'og:title', content: '' },
        { hid: 'ogurl', property: 'og:url', content: 'https://www.domain.com/' },
        { hid: 'ogdescription', property: 'og:description', content: '' },
        { hid: 'twsite', name: 'twitter:site', content: 'https://www.domain.com/' },
        { hid: 'twtitle', name: 'twitter:title', content: '' },
        { hid: 'twdescription', name: 'twitter:description', content: '' },
        { hid: 'googlename', itemprop: 'name', content: '' },
        { hid: 'googledescription', itemprop: 'description', content: '' }
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
