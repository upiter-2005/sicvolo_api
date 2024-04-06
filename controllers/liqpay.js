const LiqPay = require('../libs/liqpay'); // Adjust the path to your LiqPay class file
const crypto = require('crypto');

var liqpay = new LiqPay('i44810903824', 'F0qSdzxgmC9EUGOCavHmSSa39XKOoi7DOopzddPX');

const doPayment = async (req, res) => {
    const {amount, description} = req.body;

    console.log(amount, description);

    var html = liqpay.cnb_form({
        'action'         : 'pay',
        'amount'         : amount,
        'currency'       : 'UAH',
        'description'    : description,
        'order_id'       : 'order_id_1',
        'version'        : '3',
        });

        res.json(html); 
}

module.exports = {
    doPayment 
};
