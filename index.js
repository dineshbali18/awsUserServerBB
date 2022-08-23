const express=require("express")
require('dotenv').config()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")


const app=express();
app.use(bodyParser.json())
app.use(cors());


mongoose
  .connect('mongodb+srv://dineshbali45:DiNeSh5@cluster0.ecyxn.mongodb.net/Bigboss', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e)=>{
      console.log(e);
      console.log("DB NOT CONNECTED SUCCESFULLY");
  });


const contestantRoutes=require("./routes/contestant")
const userRoutes=require("./routes/user")
const authRoutes=require("./routes/auth")
const otpRoutes=require("./routes/otp")
const voteRoutes=require("./routes/votes");

app.use("/api",contestantRoutes);
app.use("/api",userRoutes)
app.use("/api",authRoutes);
app.use("/api",otpRoutes);
app.use("/api",voteRoutes);




app.listen(5000||process.env.PORT,()=>{
    console.log(`app is running at ${5000}`)
})