import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const DitModal = ( { show, handleClose, detils }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
          <Tabs
            // defaultActiveKey="home"
            className="mb-3 bg-transparent"
          >
            <Tab className='bg-transparent' eventKey="home" title="جزئیات اصلی">
              <div className=' d-flex border-bottom'>
                <span>
                  نوع :
                </span>
                <p className='mx-3'>
                  {detils.name}
                </p>
              </div>
              <div className=' d-flex my-2'>
                <span>
                  تاریخ تدوین و به روزرسانی :
                </span>
                <p className='mx-3'>
            {detils.date}
                </p>
              </div>
            </Tab>

            <Tab className='bg-transparent shadow-none ModalActive2' eventKey="contact" title="شایستگی">
              <div className=' d-flex border-bottom'>
                <span>
                  نوع :
                </span>
                <p className='mx-3'>
                  بدون عنوان شایستگی
                </p>
              </div>

            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

