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
  removeAllProduct(state: any) {
    state.products = [];
  },
};
