import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import React, { useContext } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { modalStateContext } from '../../contexts/ModalStateContext';



function LoginModal() {
    const { modalState, setModalState } = useContext( modalStateContext )

    return (
        <Modal className='modal-signUp'
            show={modalState.modalLogin}
            onHide={() => setModalState( { ...modalState, modalLogin: false } )}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter1"
            centered>

            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter1">
                    <p className='fw-bold'> صفحه ورود </p>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <b >از قسمت مورد نظر وارد شوید</b>
                <p></p>
                <p>
                    {/* داخل مودال - قسمت تب */}
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={4} >
                                <Nav variant="pills" className="flex-column ">
                                    <Nav.Item className="border mb-2 rounded shadow-none">
                                        <Nav.Link className=' shadow-none' eventKey="first">آموزشگاه</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="border mb-2 rounded shadow-none">
                                        <Nav.Link className=' shadow-none' eventKey="first2">مدیر</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="border mb-2 rounded">
                                        <Nav.Link className=' shadow-none' eventKey="second">همکاران</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="border mb-2 rounded">
                                        <Nav.Link className=' shadow-none' eventKey="third">عادی</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} >
                                <Tab.Content className="border-end pe-2 pe-md-2">

                                    <Tab.Pane className="bg-transparent shadow-none" eventKey="first">
                                        <Form className='bg-white rounded shadow-none p-1'>
                                            <p className='bg-info p-2 rounded fw-bold col-8 col-md-11 col-lg-12 mx-auto'>آموزشگاه</p>
                                            <Form.Group className="mb-3 input-f" controlId="formBasicPassword">
                                                <Form.Label>شماره همراه</Form.Label>
                                                <Form.Control className='' type="text" placeholder="شماره موبایل خود را وارد کنید" />
                                                <Button className='p-1 input-c justify-content-start' variant="danger" type="submi">
                                                    ارسال کد
                                                </Button>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>رمز عبور</Form.Label>
                                                <Form.Control type="password" placeholder="رمز عبور" />
                                            </Form.Group>
                                            <Link to="/Admin">
                                            <Button variant="success" type="submit" onClick={() => setModalState( { modalState: false } )}>
                                                ورود
                                            </Button>
                                            </Link>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane className="bg-transparent shadow-none" eventKey="first2">
                                        <Form className='bg-white rounded shadow-none p-1'>
                                            <p className='bg-info p-2 rounded fw-bold col-8 col-md-11 col-lg-12 mx-auto'>مدیر</p>
                                            <Form.Group className="mb-3 input-f" controlId="formBasicPassword">
                                                <Form.Label>شماره همراه</Form.Label>
                                                <Form.Control className='' type="text" placeholder="شماره موبایل خود را وارد کنید" />
                                                <Button className='p-1 input-c justify-content-start' variant="danger" type="submi">
                                                    ارسال کد
                                                </Button>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>رمز عبور</Form.Label>
                                                <Form.Control type="password" placeholder="رمز عبور" />
                                            </Form.Group>
                                            <Link to="/Manage">
                                            <Button variant="success" type="submit" onClick={() => setModalState( { modalState: false } )}>
                                                ورود
                                            </Button>
                                            </Link>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane className="bg-transparent shadow-none" eventKey="second">
                                        <Form className='bg-white rounded shadow-none p-1'>
                                            <p className='bg-info p-2 rounded fw-bold col-8 col-md-11 col-lg-12 mx-auto'>همکاران</p>
                                            <Form.Group className="mb-3 input-f" controlId="formBasicPassword">
                                                <Form.Label>شماره همراه</Form.Label>
                                                <Form.Control className='' type="text" placeholder="شماره موبایل خود را وارد کنید" />
                                                <Button className='p-1 input-c justify-content-start' variant="danger" type="submit">
                                                    ارسال کد
                                                </Button>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>رمز عبور</Form.Label>
                                                <Form.Control type="password" placeholder="رمز عبور" />
                                            </Form.Group>
                                            <Link to="/Colleague">
                                            <Button variant="success" type="submit" onClick={() => setModalState( { modalState: false } )}>
                                                ورود
                                            </Button>
                                            </Link>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane className="bg-transparent shadow-none" eventKey="third">
                                        <Form className='bg-white rounded shadow-none p-1'>
                                            <p className='bg-info p-2 rounded fw-bold col-8 col-md-11 col-lg-12 mx-auto'>عادی</p>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>شماره همراه</Form.Label>
                                                <Form.Control type="text" placeholder="شماره موبایل خود را وارد کنید" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>رمز عبور</Form.Label>
                                                <Form.Control type="password" placeholder="رمز عبور" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                ورود
                                            </Button>
                                        </Form>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setModalState( { ...modalState, modalLogin: false } )}>بستن</Button>
            </Modal.Footer>
            {/* پایان قسمت تب */}
        </Modal>
    );
}

export default LoginModal;