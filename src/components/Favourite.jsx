import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { addToCart } from '../features/slice'
import { useDispatch, useSelector } from 'react-redux'

const Favourite = () => {

    const { favourite } = useSelector((item)=>item.cartItems);
    const dispatch = useDispatch();

  return (
    <div className=''>
       <MDBContainer>
       <MDBRow className='sectionOfItems'>
        
        {
            favourite.map((item)=>(
            <MDBCol size='4' className='col'>
            <MDBCard className='item'>
                  <MDBCardImage src={item.img} className="sizeOfImage" alt="Fissure in Sandstone"/>
                  <MDBCardBody className='detailsOfProduct' >
                    <MDBCardTitle className='title' >{item.title}</MDBCardTitle>
                    <MDBCardText className='price' >${item.price}</MDBCardText>
                    <MDBBtn href="#!" onClick={()=>dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                  </MDBCardBody>
            </MDBCard>
            </MDBCol>
          ))
        } 
        
       </MDBRow>
       </MDBContainer>     
    </div>
  )
}

export default Favourite
