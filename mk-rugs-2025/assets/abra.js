(() => {
  window.addEventListener("abra:cart:changed", () => {
    Shopify.getCart((cart) => {
      window.halo.updateSidebarCart(cart);
    });
  });
})();
