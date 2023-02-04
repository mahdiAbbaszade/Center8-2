import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import { Col, Nav, Row } from 'react-bootstrap';
import { singupApi } from '../../utils/API';
import { useMutation } from 'react-query';
import { useContext, useState } from 'react';
import React from 'react';
import { modalStateContext } from '../../contexts/ModalStateContext';
// import axios from 'axios';



function SignUpModal() {
    // const [condicational, setCondicational] = useState({
    //     isLoading: false,
    //     isSuccess: false,
    //     isError: false
    // })

    const { modalState, setModalState } = useContext( modalStateContext )


    const [formData, setFormData] = useState({
        phoneNumber: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    
    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    // react-query - fech-data

    const data = {
        user: {
            phoneNumber: formData.phoneNumber,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        }
    }
    const fechData = useMutation(() => singupApi(data),{
        retry:0,
        onSuccess:()=>{
            setFormData({
                phoneNumber: "",
                firstName: "",
                lastName: "",
                email: ""
            })
        }
    })

    // end

    const submitHandler = event => {
        event.preventDefault();
        fechData.mutate()
    }


    return (
        <Modal className='modal-signUp'
            show={modalState.modalSignup}
            onHide={() => setModalState( { ...modalState, modalSignup: false } )}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className='fw-bold'> فرم ثبت نام </p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b >مشخصات خود را وارد فرمایید </b>
                <p></p>
                <>
                    {/* داخل مودال - قسمت تب */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={4} >
                                <Nav variant="pills" className="flex-column ">
                                    <Nav.Item className="border mb-2 rounded shadow-none">
                                        <Nav.Link className='shadow-none' eventKey="first">عادی</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} className="bg-transparent shadow-none" >
                                <Tab.Content className="border-end pe-2 pe-md-2 ">
                                    <Tab.Pane eventKey="first" className=" bg-transparent shadow-none">
                                        <Form className='' onSubmit={submitHandler}>
                                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                                <Form.Label>نام  </Form.Label>
                                                <Form.Control onChange={onChange} name="firstName" value={formData.firstName} type="text" placeholder="نام خود را وارد کنید " required />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label> نام خانوادگی </Form.Label>
                                                <Form.Control onChange={onChange} name="lastName" value={formData.lastName} type="text" placeholder="نام خانوادگی خود را وارد کنید" required />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>ایمیل</Form.Label>
                                                <Form.Control onChange={onChange} name="email" value={formData.email} type="email" placeholder="ایمیل خود را وارد کنید - example@gmail.com" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>شماره همراه</Form.Label>
                                                <Form.Control onChange={onChange} name="phoneNumber" value={formData.phoneNumber} type="text" placeholder="09123456789" required />
                                            </Form.Group>

                                            <br></br>
                                            <div className='pt-3 d-flex justify-content-between'>
                                                <Button variant="success" type="submit">  ارسال </Button>
                                                <span className='p-2 px-3 rounded'>{fechData.isLoading ? "در حال ارسال" : fechData.isError ? " با یک ارور مواجه شده اید " : fechData.isSuccess ? "کاربر با موفقیت ثبت شد" : null}</span>
                                            </div>
                                        </Form>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => {
                    setModalState( { ...modalState, modalSignup: false } )
                    fechData.reset()
                }}>بستن</Button>
            </Modal.Footer>
            {/* پایان قسمت تب */}
        </Modal>
    );
}

export default SignUpModal;