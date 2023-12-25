import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'

const Home = () => {
    let role = "admin"

    let total = 0
    const product_name = useRef()
    const product_price = useRef()
    const product_available = useRef()

    const [data, setdata] = useState([])
    const [view, setview] = useState({})
    const [index, setindex] = useState()
    const [cart, setcart] = useState([])

    const arr = JSON.parse(localStorage.getItem("detail")) || []
    const cart_arr = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() => {
        setdata([...arr])
        setcart([...cart_arr])
    }, [])

    const submit_handle = () => {
        const input = {
            product_name: product_name.current.value,
            product_price: product_price.current.value,
            product_available: product_available.current.value,
        }
        if (input.product_name !== '' && input.product_price !== '' && input.product_available !== '') {
            arr.push(input)
            localStorage.setItem("detail", JSON.stringify(arr))
            setdata([...arr])
        }
    }

    const delete_handler = (ind) => {
        arr.splice(ind, 1)
        localStorage.setItem("detail", JSON.stringify(arr))
        setdata([...arr])
        Swal.fire({
            title: "Deleted successfully..!",
            text: "You clicked the Ok button..!",
            icon: "success"
        })
    }

    const view_handler = (ind) => {
        setview(arr[ind])
        setindex(ind)
    }

    const update_input_handler = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    const update_handle = () => {
        if (view.product_name !== '' && view.product_price !== '' && view.product_available !== '') {
            arr.splice(index, 1, view)
            localStorage.setItem("detail", JSON.stringify(arr))
            setdata([...arr])
            Swal.fire({
                title: "Updated successfully..!",
                text: "You clicked the Ok button..!",
                icon: "success"
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All inputs are necessary",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    }

    const cart_add = (val, ind) => {
        cart_arr.push(arr[ind])
        localStorage.setItem("cart", JSON.stringify(cart_arr))
        setcart([...cart_arr])
        Swal.fire({
            title: "Product added to cart successfully !",
            text: "You clicked the button!",
            icon: "success"
        })
    }

    const cart_item_remove = (ind) => {
        cart_arr.splice(ind, 1)
        localStorage.setItem("cart", JSON.stringify(cart_arr))
        setcart([...cart_arr])
        Swal.fire({
            title: "Product removed from cart successfully !",
            text: "You clicked the button!",
            icon: "success"
        })
    }
    if (role === "admin") {
        return (
            <>
                <div>
                    <input type="text" name='product_name' placeholder='Product name' ref={product_name} />
                    <input type="number" name='product_price' placeholder='Product price' ref={product_price} />
                    <input type="text" name='product_available' placeholder='Availability' ref={product_available} />
                    <button type='button' onClick={submit_handle}>Submit</button>
                </div>
                {
                    data?.map((val, ind) => {
                        return (
                            <>
                                <h1>{val.product_name}</h1>
                                <h6>${val.product_price}</h6>
                                <h6>{val.product_available}</h6>
                                <button onClick={() => delete_handler(ind)}>Delete</button>

                                <button type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => view_handler(ind)}>View</button>

                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <input type="text" name='product_name' placeholder='Product name' value={view.product_name} onChange={update_input_handler} />
                                                <input type="number" name='product_price' placeholder='Product price' value={view.product_price} onChange={update_input_handler} />
                                                <input type="text" name='product_available' placeholder='Availability' value={view.product_available} onChange={update_input_handler} />
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" onClick={update_handle}>Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    else {
        return (
            <>
                {
                    data?.map((val, ind) => {
                        if (val.product_available === "true") {
                            return (
                                <>
                                    <h1>{val.product_name}</h1>
                                    <h6>${val.product_price}</h6>
                                    <button type='button' onClick={() => cart_add(val, ind)}>Add to cart</button>
                                </>
                            )
                        }
                    })
                }
                <h1>=== === Cart === ===</h1>
                {
                    cart?.map((val, ind) => {
                        total += Number(val.product_price)
                        return (
                            <>
                                <h1>{val.product_name}</h1>
                                <h6>${val.product_price}</h6>
                                <button type='button' onClick={() => cart_item_remove(ind)}>Remove from cart</button>
                            </>
                        )
                    })
                }
                <h1>Total: ${total}</h1>
            </>
        )
    }
}

export default Home
