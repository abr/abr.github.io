// const client = Client.buildClient({
//   domain: 'applied-brain-research-inc.myshopify.com',
//   storefrontAccessToken: '5d17dbfff7e6fd1c5b5f5930620874df',
// });

const ShopifyBuyInit = () => {
  const client = ShopifyBuy.buildClient({
    domain: 'applied-brain-research-inc.myshopify.com',
    storefrontAccessToken: '5d17dbfff7e6fd1c5b5f5930620874df',
  });

  client.product.fetchAll().then(renderProducts)
}

const renderProducts = (products) => {
  console.log(products);
}