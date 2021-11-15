const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : ""

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



export {
  url,
  update_address
}