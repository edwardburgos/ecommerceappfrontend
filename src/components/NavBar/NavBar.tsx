import React, { useState } from 'react';
import s from './NavBar.module.css';
import { Navbar, Container, Offcanvas, Nav, Col, Row} from 'react-bootstrap';
import { useCompanyBrand } from '../../models/company/custom-hooks';
import { useMenu } from '../../models/categories/custom-hooks';
import { Category, FirstLevelCategory, SecondLevelCategory } from '../../extras/types';
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { stringToURL } from '../../extras/globalFunctions';


export default function NavBar() {

    const [showSideBar, setShowSideBar] = useState(false);
    const [category, setCategory] = useState({name: '', url: ''});

    const { loading, error, data } = useCompanyBrand();
    const { loading: loadingMenu, error: errorMenu, data: DataMenu } = useMenu();

    if (loading || loadingMenu || error || errorMenu) { return null }

    return (
        <Navbar bg="light" expand={false} className={s.navbar} onMouseLeave={() => setCategory({name: '', url: ''})}>
            <Container fluid className={s.navbarContainer}>
                <div className={s.toogleButton} onClick={() => setShowSideBar(!showSideBar)}>
                    <img src={showSideBar ? close : menu} alt={`${showSideBar ? 'Close' : 'Menu'} icon`} />
                </div>
                <a href="#" className={s.navbarBrand}>
                    {
                        data.getCompany.logo ?
                            <img src={data.getCompany.logo} alt='Logo' className={s.logo} />
                            :
                            data.getCompany.brand
                    }
                </a>
                <div className={s.navbarlinks}>
                    {DataMenu.getMenu.map((e: FirstLevelCategory, index: number) =>
                        <Nav.Link className={`${s.navbarlink} ${s.firstLevel}`} onMouseEnter={() => setCategory({name: e.name, url: e.url})}
                            key={index} href={`/${e.url}`}>{e.name}</Nav.Link>
                    )}
                </div>
                <div className={s.subcategories} onMouseLeave={() => setCategory({name: '', url: ''})}>
                    <Row>
                    {DataMenu.getMenu.filter((e: FirstLevelCategory) => e.name === category.name)[0]?.categories.map((e: SecondLevelCategory, index: number) =>
                        <Col className={s.navbarcol}>
                            <Nav.Link href={`/${category.url}-${e.url}`} className={`${s.secondLevel} ${s.horizontalNavLink}`} key={index}>{e.name}</Nav.Link>
                            {e.categories.map((ee: Category, index: number) =>
                                <Nav.Link href={`/${category.url}-${e.url}-${ee.url}`} className={`${s.thirdLevel} ${s.horizontalThirdNavLink}`} key={index}>{ee.name}</Nav.Link>
                            )}
                        </Col>
                    )}
                    </Row>
                </div>
                <div className={`${showSideBar ? s.show : s.hide} ${s.sidebar}`}>
                    {DataMenu.getMenu.map((e: FirstLevelCategory, index: number) =>
                        <>
                            <Nav.Link href={`/${e.url}`} className={s.firstLevel} key={index}>{e.name}</Nav.Link>
                            {e.categories.map((ee: SecondLevelCategory, index: number) =>
                                <>
                                    <Nav.Link href={`/${e.url}-${ee.url}`} className={s.secondLevel} key={index}>{ee.name}</Nav.Link>
                                    {ee.categories.map((eee: Category, index: number) =>
                                        <Nav.Link href={`/${e.url}-${ee.url}-${eee.url}`} className={s.thirdLevel} key={index}>{eee.name}</Nav.Link>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </Container>
        </Navbar >
    );
}