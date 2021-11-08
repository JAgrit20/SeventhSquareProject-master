import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
function BrandName() {
    const {id} = useParams();
  const NewID = id.toString();
  const [users, setUsers] = useState([]);
  const getUsers = async () =>{
    const response  = await fetch('https://api.seventhsq.com/account/companyname/' + NewID);
    setUsers(await response.json());
  }
  useEffect (() => {
    getUsers()
  },[])
  
    return (
        <div>
            {users.comoanyName}
        </div>
    )
}

export default BrandName
