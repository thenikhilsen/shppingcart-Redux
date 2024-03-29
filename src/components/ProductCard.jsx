import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/slice'


const ProductCard = () => {

  const data = useSelector((c)=>{
    return c.cartItems.items;
  })

  const dispatch = useDispatch();

  return (
    <div className=''>
       <MDBContainer>
       <MDBRow className='sectionOfItems'>
        
        {
          data.map((item)=>(
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

export default ProductCard
