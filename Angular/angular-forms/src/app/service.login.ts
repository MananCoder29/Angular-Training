export class LoginService{
    checkUser(user:string,pass:string):string{
        if(user == "manan" && pass =="1234"){
            return "success";
        }
        else{
            return "FAILURE!";
        }
    }
}