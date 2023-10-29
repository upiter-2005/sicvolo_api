




const makePayment = async (req, res) => {
    console.log("payyyyyyyment");
    const {id, name} = req.body;

   
    let formData = new FormData();
    formData.append('id', id)
    formData.append('name', name)
    fetch('https://sicvolo.org/test.php',
    {
        method: "POST",
        body: req.body
    })
    // .then((response) => response.text())
    .then((body) => {
        console.log(body);
        res.json(body)
    }); 
  }; 

module.exports = {
    makePayment
};
