import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid nav-container">
                    <a class="navbar-brand text-light" href="#">GUITAR BANGLADESH</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <Link class="nav-link text-light" aria-current="page" to="/guitar">Guitars</Link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-light" href="#">Builder</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-light" href="#">In Stocks</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-light" href="#">Merch</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-light" href="#">Artists</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;