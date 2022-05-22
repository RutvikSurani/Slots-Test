export const actions = {
  addProduct(context: any, addProduct: any) {
    context.commit("addProduct", addProduct);
  },
  removeProduct(context: any, removeProduct: any) {
    context.commit("removeProduct", removeProduct);
  },
  removeAllProduct(context: any) {
    context.commit("removeAllProduct");
  },
  addToLikedProducts(context: any, productId: any) {
    context.commit("addToLikedProducts", productId);
  },
  removeFromLikedProducts(context: any, productId: any) {
    context.commit("removeFromLikedProducts", productId);
  },
  removeAllProducts(context: any){
  context.commit("removeAllProducts")
  },
};
