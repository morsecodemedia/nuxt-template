# nuxt-template

> A template to start Nuxt projects, loaded with all the additional modules that are used in almost all of our projects.

## What's Included Out-of-the-Box???
### Functionality
#### Killscroll (Watches isModalOpen - Vuex)
#### Exit Modal (Vuex Store)

### Packages
#### Eslint
https://github.com/eslint/eslint

#### Stylelint
https://github.com/stylelint/stylelint

#### Node-Sass
https://github.com/sass/node-sass

#### Sass-loader
https://github.com/webpack-contrib/sass-loader

#### @nuxtjs/redirect-module
https://github.com/nuxt-community/redirect-module

#### @nuxtjs/robots
https://github.com/nuxt-community/robots-module

#### @nuxtjs/sitemap
https://github.com/nuxt-community/sitemap-module


## What Else Do We Use???

### Accessibility (A11Y)
### Vue Axe
https://github.com/vue-a11y/vue-axe

### Fonts
#### vue-fontawesome
https://github.com/FortAwesome/vue-fontawesome

#### nuxt-webfontloader
https://github.com/Developmint/nuxt-webfontloader

### Front-End Frameworks
#### @morsecodemedia/containers.css
https://github.com/morsecodemedia/containers.css

### Input Mask
#### vue-the-mask
https://github.com/vuejs-tips/vue-the-mask

### Logs
#### @nuxtjs/sentry
https://github.com/nuxt-community/sentry-module

#### nuxt-logrocket
https://github.com/nuxt-community/nuxt-logrocket

## Nuxt Documentation
https://nuxtjs.org


## TODO
- Add more optional packages to README
  - Scroll Tracking (Evergreen)
  - Scroll Tracking (IE11 Compatible)
  - Event Tracking
  - Google GTag
  - ISI Module
  - Axios
  - Postmarkapp
  - Component Cache
  - Body Parser
  - Vue-Scrollto
  - Vue Video Player
  - Vue Vimeo Player
  - DotEnv
  - Vue LazyLoad
  - Vue Style-resources
  - Vue Persisted State
- Configure more of the build
  - References Module and VUEX Store
  - Footnotes Module and VUEX Store

## Server Setup

- create a ubuntu 18.04 vm
- create user `web`
- add `web` to groups `sudo` and `www-data`
- log in as `web` and secure ssh
- add ssh pubkeys to `web` user for deployment access
- create ssh key as web user
- use web user's pubkey as deploy key in project repository
- clone repo into `~/serva` and `~/servb` with ssh
- symlink `Makefile` and `ecosystem.config.js` to home folder
- install the latest node-js (not apt, look this up)
- install git-lfs
- install pm2 globally
- install ufw and allow ssh, http, and https, then enable
- install nginx
- configure vhosts for testing (use sample conf in repo, probably to dummy url for now)
- install certbot (reconfigure later when DNS is ready for real prod)
- `make production` && `make stage`
- `pm2 startup` && `pm2 save` - to return the server to working order on reboot
- check that backups are enabled and any alerts are configured on the vm
- add to up/down detection
