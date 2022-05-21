<template>
  <v-container class="pt-6">
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
    </v-row>
    <v-row class="text-center">
      <v-col
        v-for="product in ProductList"
        :key="product.productId"
        cols="auto"
      >
        <v-card width="400px" min-height="250px" @click="showDetails(product)">
          <v-card-title>
            {{ product.name }}
          </v-card-title>
          <v-card-text>
            <v-img :src="product.image"> </v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ProductList, category } from "../utility/constant";
export default {
  name: "HelloWorld",
  data() {
    return {
      ProductList,
      categoryType: Object.keys(category),
      select: category.All,
    };
  },
  methods: {
    showDetails(data) {
      console.log("lol ", data);
    },
  },
};
</script>
