const loadScript = () => {
  const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  const script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
}


const ShopifyBuyInit = () => {
  const client = ShopifyBuy.buildClient({
    domain: 'applied-brain-research-inc.myshopify.com',
    storefrontAccessToken: '5d17dbfff7e6fd1c5b5f5930620874df',
  });
  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.client.product.fetchAll().then((products) => {
      console.log(products)
    })

    const productNodes = document.getElementsByClassName('shopify-product');

    for (let i = 0; i < productNodes.length; i++) {
      const productNode = productNodes[i];

      const productVariantNodes = document.getElementsByClassName(`shopify-product-${productNode.dataset.productid}`);

      for(let a = 0; a < productVariantNodes.length; a++) {
        const variantNode = productVariantNodes[a];

        generateComponent({ui,id:productNode.dataset.productid, variantId:variantNode.dataset.variantid, node:variantNode});
      }

      const singleProductNode = document.getElementsByClassName(`shopify-single-product-${productNode.dataset.productid}`);

      if(singleProductNode.length > 0) {
        generateComponent({ui,id:productNode.dataset.productid, node:singleProductNode[0]});
      }

      generateComponent({ui,id:productNode.dataset.productid, node:productNode, isViewProduct: true, text:productNode.dataset.productname});
    }
  });
}

const generateComponent = ({ui, variantId, id, node, isViewProduct, text="Add Product"}) => {
  const options = isViewProduct ? VIEWPRODUCT: ADDPRODUCT;
  ui.createComponent('product', {
    id,
    variantId,
    node,
    moneyFormat: '%24%7B%7Bamount%7D%7D%20USD',
    options: {
      product: {
        text:{button: text}
        , ...options
      },
      ...GENERALOPTIONS
    }
  });

}

const VIEWPRODUCT = {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        "color": "#8bb684",
        ":hover": {
          "background-color": "#ffffff"
        },
        "background-color": "#ffffff",
        ":focus": {
          "background-color": "#ffffff"
        },
        "border-radius": "2px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "options": false,
    },
    "googleFonts": [
      "Roboto"
    ]
};

const ADDPRODUCT = {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        ":hover": {
          "background-color": "#7da477"
        },
        "background-color": "#8bb684",
        ":focus": {
          "background-color": "#7da477"
        },
        "border-radius": "2px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": true,
      "options": false,
      "buttonWithQuantity": true,
      "button": false,
    },
    "googleFonts": [
      "Roboto"
    ]
};

const GENERALOPTIONS = {
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        ":hover": {
          "background-color": "#7da477"
        },
        "background-color": "#8bb684",
        ":focus": {
          "background-color": "#7da477"
        },
        "border-radius": "2px"
      }
    },
    "googleFonts": [
      "Roboto"
    ],
    "text": {
      "button": "View Product"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        ":hover": {
          "background-color": "#7da477"
        },
        "background-color": "#8bb684",
        ":focus": {
          "background-color": "#7da477"
        },
        "border-radius": "2px"
      }
    },
    "text": {
      "total": "Subtotal",
      "notice": "Shipping and discount codes are added at checkout.",
      "button": "Checkout"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        "background-color": "#8bb684",
        ":hover": {
          "background-color": "#7da477"
        },
        ":focus": {
          "background-color": "#7da477"
        }
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  }
};
