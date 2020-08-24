	<template>
  <div id="app">
    <my-header></my-header>
    <router-view :key="$route.path"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
export default {
  components: { MyHeader, MyFooter },
  name: 'app',
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#ffffff' }
    ]
  }
}
</script>

<style lang="scss">
//   @import "/assets/styles/_variables.scss";
//   .Cookie__button {
//     background: color(robin-egg-blue)!important;
//     @include hover-active-states() {
//       background: darken(color(robin-egg-blue), 10%)!important;
//     }
//   }
</style>

