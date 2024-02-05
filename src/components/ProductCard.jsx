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
    <div className='m-2'>
       <MDBContainer>
       <MDBRow className='mb-3'>
        
        {
          data.map((item)=>(
            <MDBCol size='4'>
            <MDBCard>
                  <MDBCardImage src={item.img} className="card-img-top" alt="Fissure in Sandstone"/>
                  <MDBCardBody >
                    <MDBCardTitle >{item.title}</MDBCardTitle>
                    <MDBCardText >{item.price}</MDBCardText>
                    <MDBBtn href="#!" onClick={()=>dispatch(addToCart(item))}>Add to Cart (0)</MDBBtn>
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
