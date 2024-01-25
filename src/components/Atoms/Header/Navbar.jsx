// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ data }) => {
//   console.log(data, "data");
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a class="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//           {data?.map((val, ind) => {
//             return (
//               <li class="nav-item active" key={ind}>
//                 <Link to={`${val.path}`} class="nav-link">
//                   {val.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'/'} class="nav-link">Home</Link>
      </li>
      <li class="nav-item active">
        <Link to={'/Product'} class="nav-link">Product</Link>
      </li>
      <li class="nav-item active">
        <Link to={'/about'} class="nav-link">About</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export const Admin_Navbar = () => {
  return (
    <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'/'} class="nav-link">Home</Link>
      </li>
      <li class="nav-item active">
        <Link to={'/List'} class="nav-link">List</Link>
      </li>
      {/* <li class="nav-item active">
        <Link to={'/about'} class="nav-link">About</Link>
      </li> */}
    </ul>
  </div>
</nav>
    </>
  )
}
export default Navbar