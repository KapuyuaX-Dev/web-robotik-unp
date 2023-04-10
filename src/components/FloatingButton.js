import React, { useState } from 'react'
import '../style/floatingButton.css'
import { Modal } from 'react-bootstrap'

function FloatingButton({isShow}) {
  const [show,setShow] = useState(isShow)
  return (
    <>
    <div className='br-icon' onClick={()=>setShow(true)}></div>

    <Modal show={show} onHide={()=>setShow(false)} aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default FloatingButton