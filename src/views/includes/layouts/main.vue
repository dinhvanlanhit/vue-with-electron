
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header @toggleLeftDrawer="toggleLeftDrawer"/>
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class="bg-grey-2"
        :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="link in menuItems" :key="link.text" v-ripple clickable @click="this.$router.push(link.path)">
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md" />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="">
      <q-card class="q-m-1"  bordered>
          <router-view />
      </q-card>
    </q-page-container>
  </q-layout>
</template>
<script>
import Header from '@includes/header/header.vue'
import { fabYoutube } from '@quasar/extras/fontawesome-v6'
export default {
  name: 'MainLayout',
  components: {
    Header
  },
  data () {
    return {
      fabYoutube,
      leftDrawerOpen: true,
      menuItems: [
        { icon: 'home', text: 'Dashboard','path':"/"},
        { icon: 'menu', text: 'Jobs','path':"/jobs"},
        { icon: 'whatshot', text: 'Proxys',path:"/proxys"},
        { icon: 'terminal', text: 'Scripts',path:"/scripts" },
      ]
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>