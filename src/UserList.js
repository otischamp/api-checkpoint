import { useEffect, useState } from "react"
import  axios  from "axios";


const UserList = () => {

const [listOfUSer, setListOfUser] = useState([]);
const [error, setError] = useState(null);

useEffect( ()=>{
    const fetchData= () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res => setListOfUser(res.data))
       .catch(err => setError(err)); // if there is an error here what you have to do.
    
    
    
    }
    fetchData();

} ,[]);
console.log('error:', error);
console.log('userlist:',listOfUSer);

return (
    <div>
     <ul>
       {listOfUSer.map(userData => (
         <li>
           <p>{userData.username}</p>
         </li>
       ))}
     </ul>
   </div>
)

}

export default UserList