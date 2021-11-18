import { useState } from 'react'
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Delete_address } from '../../services/apicalls';
import AddAddress from './AddAddress';

export default function SavedAddress({ curr, index, addressdata, setaddressdata }) {

  const style = { margin: "0pt 5pt", fontSize: "12pt" }

  const [Edit, setEdit] = useState(false)
  const [current, setcurrent] = useState(curr)

  const handle_change = (e) => {
    setcurrent({
      ...current,
      [e.target.name]: e.target.value
    })
  }
  console.log(current)

  const toggle = () => { setEdit(!Edit) }

  const filter = () => {
    setaddressdata(addressdata?.filter(v => v?.id !== current?.id))
  }

  const Delete = () => {
    Delete_address(current?.id, filter)
  }

  return (
    <div class="d-flex justify-content-evenly">
      {Edit ?

        <AddAddress callChange={handle_change} toggle={toggle} current={current} />
        :
        <>
          <input type="text" class="form-control" value={current.apartment_address + ',' + current.street_address + ',' + current.city + ',' + current.state + ',' + current.country + ',' + current.zip} key={index} />
          <div onClick={Delete}>
            <FaRegTrashAlt style={style} />
          </div>
          <div onClick={toggle}>
            <FaEdit style={style} />
          </div>
        </>

      }


    </div>
  )
}
