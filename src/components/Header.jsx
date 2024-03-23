import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Home from '../pages/Home'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Kids from '../pages/Kids'
import Contacts from '../pages/Contacts'
import { Link, Route, Routes } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container">
                        <Dropdown className="drop">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Shirst</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Jeans</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Swimmer</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Blazers</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Jockets</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Shoes</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/men">Men's</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/women">Women's</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/kid">Kid's</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/men' element={<Men />} />
                <Route path='/women' element={ <Women />} />
                <Route path='/kid' element={<Kids/>} />
                <Route path='/contact' element={<Contacts/>} />    
            </Routes>
        </>

    )
}

export default Header
