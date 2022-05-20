<template>
  <div>
    <v-app-bar elevation="1">
      <RouterLink
        :to="{ name: Route.Home }"
        class="visitedLink d-flex align-center"
      >
        Slots
      </RouterLink>
      <v-spacer></v-spacer>
      <!-- <v-btn
        :to="{ name: Route.Home }"
        class="text-title mx-4 font-weight-500"
        variant="text"
      >
        SIGN UP
      </v-btn>
      <v-btn
        :to="{ name: Route.Home }"
        class="text-title mx-4 font-weight-500"
        variant="text"
      >
        LOG IN
      </v-btn> -->
      <v-icon> mdi-cart-outline </v-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { Route } from "@/utility/constant";

export default {
  data() {
    return {
      Route,
    };
  },
};
</script>
<style lang="scss" scoped>
.visitedLink {
  text-decoration: none;
  color: inherit;
}
</style>
