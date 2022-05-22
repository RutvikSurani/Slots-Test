<template>
  <v-container class="pa-6 px-12">
    <v-row >
      <v-col>
        <v-btn text @click="$router.push({ name: Route.Home })">
          <v-icon class="pr-2"> mdi-keyboard-backspace </v-icon>
          Go Back
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!products.length" class="pa-4 justify-center">
          No products Added
      </v-row>
    <v-row v-else v-for="product in products" :key="product.productId" no-gutters class="pa-4 justify-center">
    <v-col cols="8" >
      <v-card min-height="300px" class="pa-4">
        <v-row no-gutters>
          <v-col  cols="5" class="pr-6">
            <v-card-text class="pb-0" >
              <v-img :src="product.image"  height="300px"> </v-img>
            </v-card-text>
          </v-col>
          <v-divider  vertical></v-divider>
          <v-col class="px-6">
            <v-card-title class="text-center primary--text pb-1">
              {{ product.name }}
            </v-card-title>
            <v-card-title class="pt-0">
              $ {{ product.price }}
            </v-card-title>
            <v-card-subtitle class="pt-4">
                {{product.details}}
            </v-card-subtitle>
            <v-card-actions>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="px-4 my-2"
                    v-bind="attrs"
                    v-on="on"
                    icon
                    text
                    @click.stop="handleClick(product)"
                  >
                    <v-icon color="red">
                      {{ getIcon(product) }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>Like</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="px-4 my-2"
                    v-bind="attrs"
                    v-on="on"
                    icon
                    text
                    @click.stop="removeFromCart(product)"
                  >
                    <v-icon> mdi-cart-minus </v-icon>
                  </v-btn>
                </template>
                <span> Remove From Cart</span>
              </v-tooltip>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ProductList, category, Route } from "../utility/constant";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CartPage",
  data() {
    return {
      ProductList,
      products: [],
      categoryType: Object.keys(category),
      select: category.All,
      Route,
    };
  },
  watch: {
    select(newValue) {
      if (newValue === "All") {
        this.products = ProductList;
      } else {
        this.products = ProductList.filter(
          (item) => item.category === category[newValue]
        );
      }
    },
  },
  computed: {
    ...mapGetters({
      getSelectedProducts: "getSelectedProducts",
      getLikedProductList: "getLikedProductList",
    }),
  },
  mounted() {
    this.getCartProductList()
  },
  // //add alert message
  methods: {
    ...mapActions({
      removeProduct: "removeProduct",
      addToLikedProducts: "addToLikedProducts",
      removeFromLikedProducts: "removeFromLikedProducts",
    }),
    getCartProductList(){
    this.products = ProductList.filter((item) =>
      this.getSelectedProducts.includes(item.productId)
    );
    },
    showDetails(data) {
      this.$router.push({
        name: Route.ProductDetails,
        params: { productId: data.productId },
      });
    },
    removeFromCart(data) {
      this.removeProduct(data.productId);
      this.getCartProductList()
    },
    getIcon(data) {
      this.getLikedProductList.forEach((item) => {
        if (item === data.productId) data.isLiked = true;
      });
      return data?.isLiked ? "mdi-heart" : "mdi-heart-outline";
    },
  },
};
</script>
