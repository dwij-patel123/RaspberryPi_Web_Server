const express = require("express");
const Gpio = require("onoff").Gpio;
const LED = new Gpio(17,"out");
const app = express();

const PORT = process.env.port || 3003;

app.get("/",(req,res)=>{
    res.send("type /on to turn on the light and /off to turn off the light.");
});

app.get("/on",(req,res)=>{
    if(LED.readSync() === 0){
         LED.writeSync(1);
         return res.send("the lights are on");

    }
   
    res.send("lights are already on ");
});

app.get("/off",(req,res)=>{

    if(LED.readSync() === 1){
         LED.writeSync(0);
        return res.send("the lights are off")
    }
   
    res.send("lights are already off ");
});


app.listen(PORT,console.log(`server is listening on port ${PORT}`));
