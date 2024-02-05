import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal } from '../features/slice'


const Navbar = () => {

  const {cart, totalQuantity} = useSelector((data)=>data.cartItems);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCartTotal());
  },[cart]);

  return (
    <div>
    <MDBNavbar light bg-color="light">
       <MDBContainer fluid>
            <MDBNavbarBrand>Navbar</MDBNavbarBrand>
            <Link to='/'>All Product</Link>
            <Link to='/cart'><MDBBtn color='dark'>Cart ({totalQuantity})</MDBBtn></Link>
       </MDBContainer>
     </MDBNavbar>      
    </div>
  )
}

export default Navbar
