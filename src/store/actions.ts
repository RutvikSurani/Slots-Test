export const actions = {
  addProduct(context: any, addProduct: any) {
    context.commit("addProduct", addProduct);
  },
  removeProduct(context: any, removeProduct: any) {
    context.commit("addProduct", removeProduct);
  },
  removeAllProduct(context: any) {
    context.commit("removeAllProduct");
  },
};
