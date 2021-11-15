import React from 'react'

export default function AddAddress({ handleSubmit, callChange, toggle }) {

  const style = { display: 'grid', gridTemplateColumns: "100% 100%", justifyContent: 'center' }

  return (
    <form method="POST" class="register-form" onSubmit={handleSubmit} id="address-form" >
      <div style={style}>
        <input
          class="form-control"
          type="text"
          name="street_address"
          id="street_address"
          placeholder="Adress Line 1"
          onChange={callChange}


        />
        <input
          class="form-control"
          type="text"
          name="apartment_address"
          id="apartment_address"
          placeholder="Adress Line 2"
          onChange={callChange}


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


        />
        <input
          class="form-control"
          type="text"
          name="state"
          id="state"
          placeholder="State"
          onChange={callChange}

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

        />
        <input
          class="form-control"
          type="text"
          name="zip"
          id="zip"
          placeholder="Zip Code"
          onChange={callChange}


        />
      </div>

      <div style={style}>
        <div></div>
        <button
          className="edit_add_ok_btn"
          onClick={toggle}>Ok</button>
      </div>
    </form >
  )
}
