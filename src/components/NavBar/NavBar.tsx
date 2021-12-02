import React, { useState } from 'react';
import s from './NavBar.module.css';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useCompanyBrand } from '../../models/company/custom-hooks';
import { useMenu } from '../../models/categories/custom-hooks';
import { Category, FirstLevelCategory, SecondLevelCategory } from '../../extras/types';
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'


export default function NavBar() {

    const [showSideBar, setShowSideBar] = useState(false);

    const { loading, error, data } = useCompanyBrand();
    const { loading: loadingMenu, error: errorMenu, data: DataMenu } = useMenu();

    if (loading || loadingMenu || error || errorMenu) { return null }

    return (
        <Navbar bg="light" expand={false} className={s.navbar}>
            <Container fluid className={s.navbarContainer}>
                <div className={s.toogleButton} onClick={() => setShowSideBar(!showSideBar)}>
                    <img src={showSideBar ? close : menu} alt={`${showSideBar ? 'Close' : 'Menu'} icon`} />
                </div>
                <Navbar.Brand href="#" className={s.navbarBrand}>
                    {
                        data.getCompany.logo ?
                            <img src={data.getCompany.logo} alt='Logo' className={s.logo} />
                            :
                            data.getCompany.brand
                    }
                </Navbar.Brand>
                <div className={`${showSideBar ? s.show : s.hide} ${s.sidebar}`}>
                    {DataMenu.getMenu.map((e: FirstLevelCategory) =>
                        <>
                            <Nav.Link href="#action1" className={s.firstLevel}>{e.name}</Nav.Link>
                            {e.categories.map((e: SecondLevelCategory) =>
                                <>
                                    <Nav.Link href="#action1" className={s.secondLevel}>{e.name}</Nav.Link>
                                    {e.categories.map((e: Category) =>
                                        <>
                                            <Nav.Link href="#action1" className={s.thirdLevel}>{e.name}</Nav.Link>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )} 
                </div>
            </Container>
        </Navbar>
    );
}