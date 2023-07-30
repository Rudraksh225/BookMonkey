import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
import User from "../../models/User"

const handler = async (req, res) => {
    
    try{
        if(req.method == 'POST'){
            let u = new User(req.body)
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