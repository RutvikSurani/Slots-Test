<template>
  <v-container class="pa-6">
    <v-row>
      <v-col cols="auto">
        <v-combobox
          v-model="select"
          :items="categoryType"
          label="Select Category"
          outlined
          dense
        ></v-combobox>
      </v-col>
      <v-spacer />
      <v-col cols="auto pr-0" v-if="getSelectedProducts.length">
         <v-btn text class=" primary--text" @click="emptyCart()">
            Empty Cart
         </v-btn>
      </v-col>
      <v-col cols="auto pl-0">
         <v-btn text class=" primary--text" @click="$router.push({ name: Route.Cart })">
            go To Cart
         </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="product in products" :key="product.productId" cols="auto">
        <v-card width="400px" min-height="300px" @click="showDetails(product)">
          <v-card-text class="pb-0">
            <v-img :src="product.image" height="250px"> </v-img>
          </v-card-text>
          <v-row>
            <v-col>
              <v-card-title class="text-center primary--text">
                <div class="pl-2">{{ product.name }}</div>
              </v-card-title>
              <v-card-subtitle>
                <div class="pa-2">$ {{ product.price }}</div>
              </v-card-subtitle>
            </v-col>
            <v-col cols="auto" class="pa-6">
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
                      @click.stop="disabled(product) ? '' : addToCart(product)"
                    >
                      <v-icon :disabled="disabled(product)">
                        mdi-cart-plus
                      </v-icon>
                    </v-btn>
                  </template>
                  <span v-if="disabled(product)"> Already Added In Cart </span>
                  <span v-else> Add To Cart</span>
                </v-tooltip>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <ProductDetails v-if="showDialog" />
  </v-container>
</template>

<script>
import { ProductList, category, Route } from "../../utility/constant";
import { mapActions, mapGetters } from "vuex";
import ProductDetails from "./ProducctDetails.vue";
export default {
  name: "ProductList",
  components: {
    ProductDetails,
  },
  data() {
    return {
      ProductList,
      products: ProductList,
      categoryType: Object.keys(category),
      select: category.All,
      Route
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
    showDialog() {
      return this.$route.name === Route.ProductDetails;
    },
  },
  //add alert message
  methods: {
    ...mapActions({
      addProduct: "addProduct",
      removeProduct: "removeProduct",
      addToLikedProducts: "addToLikedProducts",
      removeFromLikedProducts: "removeFromLikedProducts",
      removeAllProducts:"removeAllProducts"
    }),
    emptyCart(){
     this.removeAllProducts()
      this.$snotify.warning(`Your Cart is Now Empty`)
    },
    showDetails(data) {
      this.$router.push({
        name: Route.ProductDetails,
        params: { productId: data.productId },
      });
    },
    addToCart(data) {
      this.addProduct(data.productId);
       this.$snotify.success(`${data.name} Added To Cart Successfully`)
    },
    handleClick(data) {
      if (!data?.isLiked) {
        this.addToLikedProducts(data.productId);
        data.isLiked = true;
        this.$snotify.success(`${data.name} Marked As Liked Product Successfully`)
      } else {
        this.removeFromLikedProducts(data.productId);
        this.$snotify.info(`${data.name} Removed From Liked Product`)
        data.isLiked = false;
      }
    },
    getIcon(data) {
      this.getLikedProductList.forEach((item) => {
        if (item === data.productId) data.isLiked = true;
      });
      return data?.isLiked ? "mdi-heart" : "mdi-heart-outline";
    },
    disabled(data) {
      return this.getSelectedProducts.includes(data.productId);
    },
  },
};
</script>
