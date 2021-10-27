import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="container my-4">

            {/* <img className="w-25" src={ } alt="" /> */}

            <div className="me-auto navbar-link ">
                <NavLink className="text-white px-3 text-decoration-none" to="/home"> Home </NavLink>
                <NavLink className="text-white px-3 text-decoration-none" to="/"> Donation </NavLink>
                <NavLink className="text-white px-3 text-decoration-none" to="/events"> Events </NavLink>
                <NavLink className="text-white px-3 text-decoration-none" to="/"> Blog </NavLink>
                <Link to="/login" className="text-decoration-none px-2"> <Button className="text-white px-3 text-decoration-none btn-danger">Login </Button> </Link>
                <Link to="/admin" className="text-decoration-none px-2"> < Button className="text-white px-3 text-decoration-none btn-success">Admin </Button> </Link>
            </div>
        </div>
    );
};

export default Header;