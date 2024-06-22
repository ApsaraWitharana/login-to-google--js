import{Client,Account} from "appwrite";

const Client = new Client()
.setEndpoint('')
.setProject('')

const account = new Account(Client)

export{account, Client}