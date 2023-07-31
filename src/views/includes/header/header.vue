<template>
  <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
    <q-toolbar>
      <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
      />

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="grey-8" icon="video_call" v-if="$q.screen.gt.sm">
          <q-tooltip>Create a video or post</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="apps" v-if="$q.screen.gt.sm">
          <q-tooltip>Apps</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm">
          <q-tooltip>Messages</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-8" icon="notifications">
          <q-badge color="red" text-color="white" floating>
            2
          </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <q-tooltip>Account</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
import header from './header.js'
export default header;
</script>
