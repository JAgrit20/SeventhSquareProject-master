import { useState } from 'react'
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import AddAddress from './AddAddress';

export default function SavedAddress({ curr, index }) {

  const style = { margin: "0pt 5pt", fontSize: "12pt" }

  const [Edit, setEdit] = useState(false)
  const [current, setcurrent] = useState(curr)

  console.log(current)

  const toggle = () => { setEdit(!Edit) }


  return (
    <div class="d-flex justify-content-evenly">
      {Edit ?

        <AddAddress handleSubmit={() => { }} callChange={() => { }} toggle={toggle} current={current} />
        :
        <>
          <input type="text" class="form-control" value={current.apartment_address + ',' + current.street_address + ',' + current.city + ',' + current.state + ',' + current.country + ',' + current.zip} key={index} />
          <FaRegTrashAlt style={style} />
          <div onClick={toggle}>
            <FaEdit style={style} />
          </div>
        </>

      }


    </div>
  )
}
