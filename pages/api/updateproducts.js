import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    
    try{
        if(req.method == 'POST'){
            for(let i=0; i<req.body.length; i++){
                let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]) 
                console.log(p)
            }
            res.status(200).json({ success: "success"})
        }
        else{
            res.status(400).json({ error: "This method is not allowed"})
        }
    }
    catch(err) {
        res.status(500).json({ error: err })
        console.log(err)
    }
}

export default connectDb(handler);