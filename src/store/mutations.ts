export const mutations = {
  addProduct(state: any, productId: any) {
    state.products.push(productId);
  },
  removeProduct(state: any, productId: any) {
    const index = state.products.indexOf(productId);
    if (index > -1) {
      state.products.splice(index, 1);
    }
  },
  addToLikedProducts(state: any, productId: any) {
    state.likedProducts.push(productId);
  },
  removeFromLikedProducts(state: any, productId: any) {
    const index = state.likedProducts.indexOf(productId);
    if (index > -1) {
      state.likedProducts.splice(index, 1);
    }
  },
  removeAllProducts(state:any){
    state.products = []
  },
  emptyStore(state: any) {
    state.products = [];
    state.likedProducts = [];
  },
};
