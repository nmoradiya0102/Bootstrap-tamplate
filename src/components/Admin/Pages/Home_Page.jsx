import React, { useState } from 'react'
import { data } from '../../../Data'

const Home_Page = () => {
  const [search , setSearch] = useState('')
  console.log(search);
  return (
    <>
    <div className='App'>
    <h1>admin</h1>

    <div>implement search and sort and filter in data table</div>
    <div className='container table-responsive py-5'>

      <h3 className='text-center'>User list</h3>
      <label>Search here : </label>
      <input className="m-3" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter User Name..." />
      <table className='table table-striped'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>User Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>id</th>
          </tr>
        </thead>
        <tbody>

        {data.filter((user) => {
          return search.toLowerCase() === '' ? user : user.username.toLowerCase().includes(search)
        }).map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.id}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default Home_Page
