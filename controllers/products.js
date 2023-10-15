const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "http://api.sicvolo.com",
    consumerKey: "ck_5b5e9bd41bcbbe005563695989d776f6a1550e36",
    consumerSecret: "cs_b0cdb6991f842ca70ba08c3da7ba80df5e8d79b7",
    version: "wc/v3"
  });

const getProducts = async (req, res) => {
 // List products
await api.get("products", {
    per_page: 20, // 20 products per page
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


// const setTree = async (req, res) => {
//   try {
//     const { id, tree } = req.body;

    
//     // const options = await Options.findOneAndUpdate({ _id: id }, { tree }, { new: true });
//     res.json({ options });
//   } catch (e) {
//     res.json({ message: "Not denie" });
//   }
// };

module.exports = {
    getProducts,
    getProductById
};
