import React from 'react';
import s from './NavBar.module.css';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useCompanyBrand } from '../../models/company/custom-hooks';

export default function NavBar() {

    const { loading, error, data } = useCompanyBrand();

    if (loading) { console.log('CRAGNDO'); return null }

    if (error) { console.log(error); return null }

    return (
        <Navbar bg="light" expand={false} className={s.navbar}>
            <Container fluid className={s.navbarContainer}>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className={s.toogleButton} />
                <Navbar.Brand href="#" className={s.navbarBrand}>
                    {
                        data.getCompany.logo ?
                            <img src={data.getCompany.logo} alt='Logo' className={s.logo} />
                            :
                            data.getCompany.brand
                    }
                   {/* { data.getCompany.brand} */}
                </Navbar.Brand>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}