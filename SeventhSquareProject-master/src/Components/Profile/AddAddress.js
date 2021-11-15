import React from 'react'
import { update_address } from '../../services/apicalls'

export default function AddAddress({ callChange, toggle, current }) {
  console.log(current)
  const style = { display: 'grid', gridTemplateColumns: "100% 100%", justifyContent: 'center' }

  return (
    <div>
      <div style={style}>
        <input
          class="form-control"
          type="text"
          name="street_address"
          id="street_address"
          placeholder="Adress Line 1"
          onChange={callChange}
          value={current?.street_address}

        />
        <input
          class="form-control"
          type="text"
          name="apartment_address"
          id="apartment_address"
          placeholder="Adress Line 2"
          onChange={callChange}
          value={current?.apartment_address}
        />
      </div>
      <div style={style}>
        <input
          class="form-control"
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={callChange}
          value={current?.city}
        />
        <input
          class="form-control"
          type="text"
          name="state"
          id="state"
          placeholder="State"
          onChange={callChange}
          value={current?.state}
        />
      </div>
      <div style={style}>
        <input
          class="form-control"
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          onChange={callChange}
          value={current?.country}
        />
        <input
          class="form-control"
          type="text"
          name="zip"
          id="zip"
          placeholder="Zip Code"
          onChange={callChange}
          value={current?.zip}

        />
      </div>

      <div style={style}>
        <div></div>
        <button
          className="edit_add_ok_btn"
          onClick={() => {
            update_address(current.id, current, toggle)
          }}>Ok</button>
      </div>
    </div >
  )
}
