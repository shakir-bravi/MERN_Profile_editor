import { APIResponse } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asynhandler.utils.js";


export const Register = asyncHandler( async (req,res) =>{

    console.log(req.url);


    res
    .status(200)
    .json(
        new APIResponse("Respons Success Fullly !!!" , {} , 202)
    )
    

})