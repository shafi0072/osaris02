import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark p-0">
                <div class="container-fluid nav-container">
                    <Link class="navbar-brand text-light" to="./">GUITAR BANGLADESH</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" aria-current="page" to="/guitar">GUITARS</Link>
                        </li>
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/bass">BASSES</Link>
                        </li>
                        <li class="nav-item me-3">
                        <a class="nav-link text-light navbar-item py-3" href="#">BUILDER</a>
                        </li>
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/in-stock">IN STOCKS</Link>
                        </li>
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/merch">MERCH</Link>
                        </li>
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/artist">ARTISTS</Link>
                        </li>
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/blog">BLOG</Link>
                        </li>
                        <li class="nav-item me-3">
                        <Link class="nav-link text-light py-3 navbar-icon" to="/blog"><ShoppingCartIcon className=""/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;