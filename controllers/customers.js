const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WPAPI = require( 'wpapi' );

var wp = new WPAPI({
    endpoint: 'https://api.sicvolo.com/wp-json',
    // This assumes you are using basic auth, as described further below
    username: 'sicvoloApi2023',
    password: '4iQg kSPx jxV2 SlfA Z9mw V09S'
});

const api = new WooCommerceRestApi({
    url: "http://api.sicvolo.com",
    consumerKey: "ck_5b5e9bd41bcbbe005563695989d776f6a1550e36",
    consumerSecret: "cs_b0cdb6991f842ca70ba08c3da7ba80df5e8d79b7",
    version: "wc/v3"
  });

const getCustomers = async (req, res) => {

await api.get("customers")
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


  const registerCustomer = async (req, res) => {
    const { username, email, password} = req.body;

    wp.users().create({
        username,
        email,
        roles: 'customer',
        password
    }).then(function( response ) {
        // "response" will hold all properties of your newly-created post,
        // including the unique `id` the post was assigned on creation
        console.log( response.id  );
        res.json({ response });
    }).catch(function( err ) {
        res.json({err})
    });
   
  };  



module.exports = {
    getCustomers,
    registerCustomer
};
