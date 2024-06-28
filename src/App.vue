<template>
  <v-app>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Star Wars Character Viewer</v-toolbar-title>
    </v-toolbar>
    
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add global styles here */
</style>