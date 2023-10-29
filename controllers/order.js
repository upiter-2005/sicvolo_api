const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


const api = new WooCommerceRestApi({
    url: "https://api.sicvolo.org",
    consumerKey: "ck_5d8ae33b78434a96e7e4cc80fd7d581fd92ad9ac",
    consumerSecret: "cs_5d06d0037e6cf9c452d36cd7942c8d0971494261",
    version: "wc/v3"
  });

const createOrder = async (req, res) => {
    console.log(req.body);
await api.post("orders", req.body)
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
    createOrder
};
