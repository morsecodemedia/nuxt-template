export default ({ app }) => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  app.router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (to.name !== from.name) {
      await delay(100)
    }

    if (savedPosition) {
      return savedPosition
    }

    const findEl = (hash, x = 0) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
          if (x > 50) {
            return resolve(document.querySelector('#app'))
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1))
          }, 100)
        })
      )
    }

    if (to.hash) {
      const el = await findEl(to.hash)
      const offset = parseFloat(window.getComputedStyle(el).scrollMarginTop)
      const box = el.getBoundingClientRect()
      const body = document.body
      const docEl = document.documentElement
      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
      const clientTop = docEl.clientTop || body.clientTop || 0
      const top = Math.floor(box.top + scrollTop - clientTop)
      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: top - offset, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, top - offset)
      }
    }

    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

