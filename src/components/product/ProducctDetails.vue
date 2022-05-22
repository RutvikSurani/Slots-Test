<template>
  <v-dialog v-model="showDialog" v-if="productData" max-width="30%" eager>
    <v-card min-height="400px" class="pa-6 pb-2">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12">
          <v-img
            :src="productData.image"
            position="center"
            min-height="100px"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-card-title class="justify-center primary--text pb-0">
        <div class="pl-2">{{ productData.name }}</div>
      </v-card-title>
      <v-card-title class="justify-center pt-0 pb-2">
        <div class="pa-2">$ {{ productData.price }}</div>
      </v-card-title>
      <v-card-subtitle>
        <div class="pa-2">{{productData.details}}</div>
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-6 my-2"
              v-bind="attrs"
              v-on="on"
              icon
              text
              @click.stop="handleClick"
            >
              <v-icon color="red">
                {{ getIcon() }}
              </v-icon>
            </v-btn>
          </template>
          <span>Like</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="px-6 my-2 pr-4"
              v-bind="attrs"
              v-on="on"
              icon
              text
              @click.stop="addToCart"
            >
              <v-icon> mdi-cart-plus </v-icon>
            </v-btn>
          </template>
          <span>Add To Cart</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { Route, ProductList } from "../../utility/constant";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductDetails",
  computed: {
    ...mapGetters({
      getSelectedProducts: "getSelectedProducts",
      getLikedProductList: "getLikedProductList",
    }),
    showDialog: {
      get() {
        return this.$route.name === Route.ProductDetails;
      },
      set(newValue) {
        if (!newValue) {
          this.$router.push({ name: Route.Home });
        }
      },
    },
    productId() {
      return this.$route?.params?.productId;
    },
  },
  mounted() {
    if (!this.productId) {
      this.showDialog = false;
    }
    this.productData = ProductList.find(
      (item) => item?.productId === Number.parseInt(this.productId)
    );
  },
  data() {
    return {
      productData: undefined,
    };
  },
  methods: {
    ...mapActions({
      addProduct: "addProduct",
      removeProduct: "removeProduct",
      addToLikedProducts: "addToLikedProducts",
      removeFromLikedProducts: "removeFromLikedProducts",
    }),
    addToCart() {
      this.addProduct(this.productData.productId);
    },
    handleClick() {
      if (!this.productData?.isLiked) {
        this.addToLikedProducts(this.productData.productId);
        this.productData.isLiked = true;
      } else {
        this.removeFromLikedProducts(this.productData.productId);
        this.productData.isLiked = false;
      }
    },
    getIcon() {
      this.getLikedProductList.forEach((item) => {
        if (item === this.productData.productId)
          this.productData.isLiked = true;
      });
      return this.productData?.isLiked ? "mdi-heart" : "mdi-heart-outline";
    },
  },
};
</script>
