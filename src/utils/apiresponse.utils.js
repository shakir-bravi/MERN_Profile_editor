export class APIResponse {
    constructor(data , message =" Respons Succeess !" , statuscode = 200 ) {
        this.message = message ; 
        this.data = data ;
        this.statuscode = statuscode || 201 ;
    }
}