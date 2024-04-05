const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");


const productsRoutes = require("./routs/productsRoutes.js");
const customersRoutes = require("./routs/customersRoutes.js");
const orderRoutes = require("./routs/orderRoutes.js");
const paymentRoutes = require("./routs/paymentRoutes.js");
const emailRoutes = require("./routs/emailRoutes.js");
const liqpayRoutes = require("./routs/liqpayRoutes.js");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static("uploads"));



app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/mail", emailRoutes);
app.use("/api/pay", liqpayRoutes);

const PORT = 5000;

 // "dev": "nodemon index.js"

const start = async () => {
  try {
    console.log("Main server page");
    // await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`app has been started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

start();
