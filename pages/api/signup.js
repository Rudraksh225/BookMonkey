import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    
    try{
        if(req.method == 'POST'){

            const {name, email, password} = req.body
            let u = new User({name, email, password:CryptoJS.AES.encrypt(`${password}`,`total59MonkeyCow`).toString()})
            await u.save();
            console.log(u); 
            res.status(200).json({ success: "success"})
        } 
        else{ 
            res.status(400).json({ error: `${req.method} method is not allowed`})
        }
    }
    catch(err) {
        res.status(500).json({ error: err })
        console.log(err)
    }
}

export default connectDb(handler);