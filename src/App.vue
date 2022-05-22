<template>
  <v-app>
    <HeaderToolbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import HeaderToolbar from "./components/HeaderToolbar.vue";

export default {
  name: "App",
  components: {
    HeaderToolbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
.full-width {
  width: 100% !important;
}
</style>
