<template>
  <Navigation></Navigation>
  <router-view/>
</template>

<script>
import Navigation from '@/components/NavigationComp.vue'

export default {
name: 'App',
components: {
  Navigation,
    }
}
</script>

<style lang="scss">

</style>
