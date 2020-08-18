import Requests from './functions/Requests';
import {USER, PASSWORD, MESSAGE, MESSAGE_GROUP} from './config'
 

async function main(){
  const token = await Requests.login(USER, PASSWORD);
  const messageToContact = await Requests.sendMEssageToContact(token,MESSAGE)
  const messageToGroup = await Requests.sendMEssageToGroup(token, MESSAGE_GROUP)
}

main()