// var LiqPay = require('liqpay');
//

const LiqPay = require('../libs/liqpay'); // Adjust the path to your LiqPay class file
const crypto = require('crypto');

var liqpay = new LiqPay('i44810903824', 'F0qSdzxgmC9EUGOCavHmSSa39XKOoi7DOopzddPX');

const doPayment = async (req, res) => {
    const {amount, description} = req.body;

    console.log(amount, description);

    var html = liqpay.cnb_form({
        'action'         : 'pay',
        'amount'         : amount,
        'currency'       : 'USD',
        'description'    : description,
        'order_id'       : 'order_id_1',
        'version'        : '3',
        
        });


        res.json(html); 
}

// const getProductById = async (req, res) => {
//     const { id } = req.body;
// await api.get("products/" + id, {
//     per_page: 1, 
//   })
//     .then((response) => {
//       console.log("Response Data:", response.data);
//       res.json( response.data );
//     })
//     .catch((error) => {
//       // Invalid request, for 4xx and 5xx statuses
//       console.log("Response Status:", error.response.status);
//       console.log("Response Headers:", error.response.headers);
//       console.log("Response Data:", error.response.data);
//     })
//     .finally(() => {
//       // Always executed.
//     });

   
//   }; 



module.exports = {
    doPayment
    
};
