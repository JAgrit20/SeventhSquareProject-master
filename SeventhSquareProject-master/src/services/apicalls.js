const url = process.env.NODE_ENV === 'development' ? 'https://api.seventhsq.com' : "https://api.seventhsq.com"

const update_address = (id, data, callback) => {

  const token = localStorage.getItem('token')

  fetch(`${url}/orders/addresses/${id}/update/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": `token ${token}`
    },
    body: JSON.stringify(data)
  })

    .then(res => res.json())
    .then((res) => {
      callback(res)
    })
    .catch(err => {
      console.log(err)
    })
}


const Delete_address = (id, callback) => {
  const token = localStorage.getItem('token')

  fetch(`${url}/orders/addresses/${id}/delete/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": `token ${token}`
    },
  })
    .then(res => res.json())
    .then((res) => {
      callback()
    })
    .catch(err => {
      console.log(err)
    })
}

const Add_to_whishlist = (uid, pid) => {
  const token = localStorage.getItem('token')
  console.log(uid, pid)
  fetch(`${url}/wishlist/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": `token ${token}`
    },
    body: JSON.stringify({
      product_id: pid,
      user: uid
    })
  })
    .then(res => res.json())
    .then((res) => {
      console.log(res)
    })
    .catch(err => { console.log(err) })
}


export {
  url,
  update_address,
  Delete_address,
  Add_to_whishlist
}