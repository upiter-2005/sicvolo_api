const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WPAPI = require( 'wpapi' );

var wp = new WPAPI({
    endpoint: 'https://api.sicvolo.org/wp-json',
    username: 'sicvoloApi2023',
    password: '4iQg kSPx jxV2 SlfA Z9mw V09S'
});

const api = new WooCommerceRestApi({
    url: "http://api.sicvolo.org",
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
  const getAllUsers = async (req, res) => {
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


  const sendCodeToEmail = async(req, res) => {
    
    const {email} = req.body;
      try {
        const data = await fetch(`https://api.sicvolo.org/wp-json/bdpwr/v1/reset-password`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify({email: email}) 
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        res.json({ resp });
      });
       
      } catch (error) {
        console.log({ error })
        return { error: 'Invalid email!' }
      }
    
  }

  const resetCustomerPasswordWithCode = async(req, res) =>  {
    const { email, code, newPassword } = req.body;
    try {
      const { data } = await fetch(`https://api.sicvolo.org/wp-json/bdpwr/v1/set-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify({email, password: newPassword, code}) 
        })
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          res.json({ resp });
        });
        ;
      res.json({ data });
    } catch (error) {
      console.log({ error })
      res.json({ error });
      return { error: 'Something went wrong...' }
    }
  }


module.exports = {
    getCustomers,
    registerCustomer,
    sendCodeToEmail,
    resetCustomerPasswordWithCode
};
