import React, { useState } from 'react';
import s from './NavBar.module.css';
import { Navbar, Container, Nav, Col, Row} from 'react-bootstrap';
import { useCompanyBrand } from '../../models/company/custom-hooks';
import { useMenu } from '../../models/categories/custom-hooks';
import { Category, FirstLevelCategory, SecondLevelCategory } from '../../extras/types';
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { NavLink, Link } from 'react-router-dom';



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
                <Link to="/" className={s.navbarBrand} onClick={() => setShowSideBar(false)}>
                    {
                        data.getCompany.logo ?
                            <img src={data.getCompany.logo} alt='Logo' className={s.logo} />
                            :
                            data.getCompany.brand
                    }
                </Link>
                <div className={s.navbarlinks}>
                    {DataMenu.getMenu.map((e: FirstLevelCategory, index: number) =>
                        <div className={`${s.navbarlink} ${s.firstLevel}`} onMouseEnter={() => setCategory({name: e.name, url: e.url})}
                            key={index} onClick={() => setCategory({name: e.name, url: e.url})}>{e.name}</div>
                    )}
                </div>
                <div className={s.subcategories} onMouseLeave={() => setCategory({name: '', url: ''})}>
                    <Row>
                    {DataMenu.getMenu.filter((e: FirstLevelCategory) => e.name === category.name)[0]?.categories.map((e: SecondLevelCategory, index: number) =>
                        <Col className={s.navbarcol}>
                            <Nav.Link as={NavLink} to={`/${category.url}-${e.url}`} className={`${s.secondLevel} ${s.horizontalNavLink}`} key={index} onClick={() => setCategory({name: '', url: ''})}>{e.name}</Nav.Link>
                            {e.categories.map((ee: Category, index: number) =>
                                <Nav.Link as={NavLink} to={`/${category.url}-${e.url}-${ee.url}`} className={`${s.thirdLevel} ${s.horizontalThirdNavLink}`} key={index} onClick={() => setCategory({name: '', url: ''})}>{ee.name}</Nav.Link>
                            )}
                        </Col>
                    )}
                    </Row>
                </div>
                <div className={`${showSideBar ? s.show : s.hide} ${s.sidebar}`}>
                    {DataMenu.getMenu.map((e: FirstLevelCategory, index: number) =>
                        <>
                            <div className={s.firstLevel} key={index}>{e.name}</div>
                            {e.categories.map((ee: SecondLevelCategory, index: number) =>
                                <>
                                    <Nav.Link as={NavLink} to={`/${e.url}-${ee.url}`} className={s.secondLevel} key={index} onClick={() => setShowSideBar(false)}>{ee.name}</Nav.Link>
                                    {ee.categories.map((eee: Category, index: number) =>
                                        <Nav.Link as={NavLink} to={`/${e.url}-${ee.url}-${eee.url}`} className={s.thirdLevel} key={index} onClick={() => setShowSideBar(false)}>{eee.name}</Nav.Link>
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