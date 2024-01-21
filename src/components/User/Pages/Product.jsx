// import React, { useEffect, useRef } from 'react'
// import { getAllData, saveItem } from '../../../firebase/function/function';

// const Product = () => {
//   const productName = useRef();
//   const productPrice = useRef();

//   const save = () => {
//     const data = {
//       productName : productName.current.value,
//       productPrice : productPrice.current.value,
//     };
//     saveItem(data);
//   };
//   useEffect(() => {
//     getAllData();
//   },[]);

//   return (
//     <div className='App'>
//       <h1>Product(firebase data collection)</h1>
//       <div>
//         <input type='text' ref={productName}/>
//         <input type='number' ref={productPrice}/>
//         <button type='button' onClick={save}>submit</button>
//       </div>
//     </div>
//   )
// }

// export default Product

import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product