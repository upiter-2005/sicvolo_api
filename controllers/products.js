const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "https://api.sicvolo.org",
    consumerKey: "ck_5d8ae33b78434a96e7e4cc80fd7d581fd92ad9ac",
    consumerSecret: "cs_5d06d0037e6cf9c452d36cd7942c8d0971494261",
    version: "wc/v3"
  });

const getProducts = async (req, res) => {
  await api.get("products", {
    per_page: 100, // 20 products per page
  })
    .then((response) => {
      console.log("Response Data:", response.data);
      res.json( response.data );
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

   
  }; 

const getFeatureProducts = async (req, res) => {
  await api.get("products", {
    per_page: 30,
    featured: true, // 20 products per page 
  })
    .then((response) => {
      console.log("Response Data:", response.data);
      res.json( response.data );
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

   
  }; 
const getProductById = async (req, res) => {
    const { id } = req.body;
await api.get("products/" + id, {
    per_page: 1, 
  })
    .then((response) => {
      console.log("Response Data:", response.data);
      res.json( response.data );
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

   
  }; 



module.exports = {
    getProducts,
    getProductById,
    getFeatureProducts
};
