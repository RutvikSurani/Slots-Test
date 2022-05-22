<template>
  <div>
    <v-app-bar elevation="1">
      <RouterLink
        :to="{ name: Route.Home }"
        class="visitedLink d-flex align-center primary--text pl-2"
      >
        Slots
      </RouterLink>
      <v-spacer></v-spacer>
      <v-btn icon text>
        <v-badge
          :value="getLikedProductCount"
          color="red"
          :content="getLikedProductCount"
        >
          <v-icon> mdi-heart </v-icon>
        </v-badge>
      </v-btn>
      <div class="px-2">
        <v-btn icon text @click="$router.push({name : Route.Cart})">
          <v-badge
            :value="getCartProductCount"
            color="red"
            :content="getCartProductCount"
          >
            <v-icon> mdi-cart-outline </v-icon>
          </v-badge>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { Route } from "@/utility/constant";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      Route,
    };
  },
  computed: {
    ...mapGetters({
      getSelectedProducts: "getSelectedProducts",
      getLikedProductList: "getLikedProductList",
    }),
    getCartProductCount() {
      return this.getSelectedProducts.length;
    },
    getLikedProductCount() {
      return this.getLikedProductList.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.visitedLink {
  text-decoration: none;
  color: inherit;
}
</style>
