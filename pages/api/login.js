
import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    
    try{
        if(req.method == 'POST'){

            let user = await User.findOne({ email: req.body.email})
            
            if(user){
                const {email, name, password} = user;

                //decrypt user password 
                var dPassword  = CryptoJS.AES.decrypt(`${password}`,`total59MonkeyCow`).toString(CryptoJS.enc.Utf8);
                // var originalText = dPassword .toString(CryptoJS.enc.Utf8);

                if(req.body.email == email && req.body.password == dPassword ){
                    res.status(200).json({success: true, email, name })     
                }
                else{
                    res.status(401).json({ success:false, error:"Credential is not valid"})
                }
            }
            else{
                res.status(401).json({ success:false, error: "User doesn't exist"})
            }

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