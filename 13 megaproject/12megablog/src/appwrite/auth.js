import config from "../config/config";
import{Client,Account,ID} from 'appwrite';


export class AuthService{
    client = new Client();
    account;

    constructor (){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    
//   deleteSession = async() => {
//   try {
//     const activeSessions = await account.listSessions();
//     if (activeSessions.total > 0) {
//       await account.deleteSession("current")    
//     }
//   } catch (error) {
//     console.log("No session available.");
//   }
// }


    async createAccount({email, password, name}){
        try {
            
          const userAccount =  await this.account.create(ID.unique(), email, password, name);
          if (userAccount) {
            //call another method
            return this.login({email,password});

          } else {
            return userAccount;
          }

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            await this.logout();
            const session= await this.account.createEmailPasswordSession(email, password);
            console.log(session);
            return session;
        } catch (error) {
            throw error;
        }

    }

    async getCurrentUser(){
        try {
            
           return await this.account.get();
            
            
        } catch (error) {
            console.log("Appwrite service :: get CurrentUser :: error", error);
        }

        return null;   // if else vi la sakde  islyi use karia je error ch koi value return aggi ta dikkat aa jugi
    }

    async logout(){
        try {
            
            await this.account.deleteSessions();

        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }

    }

}

const authService = new AuthService();

export default authService;