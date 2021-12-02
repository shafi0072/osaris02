import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import '../../MainResponsive.css';
import {Link} from 'react-router-dom';
import logo from '../../../Resorce/bdlogo3.png';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  p-0 mainbg ">
                <div class="container-fluid nav-container">
                    <Link class="navbar-brand text-light" to="./"><img src={logo} alt="Kiwi standing on oval" style={{width:'110px', marginLeft:'10px', marginTop:'10px', marginBottom:'10px'}}/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light navbar-item py-3" aria-current="page" to="/guitar">OSIRIS</Link>
                        </li>
                        
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light navbar-item py-3" to="/builder">BUILDER</Link>
                        </li>
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light navbar-item py-3" to="/bass">SHOP</Link>
                        </li>
                        {/* <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/in-stock">IN STOCKS</Link>
                        </li> */}
                        {/* <li class="nav-item me-3">
                        <Link class="nav-link text-light navbar-item py-3" to="/gears">USED GEARS</Link>
                        </li> */}
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light navbar-item py-3" to="/care">G.CARE</Link>
                        </li>
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light navbar-item py-3" to="/artist">ARTISTS</Link>
                        </li>
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light navbar-item py-3" to="/learn">MORE</Link>
                        </li>
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light py-3" to="/blog"><SearchIcon className="navbar-icon"/></Link>
                        </li>
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light py-3" to="/blog"><AccountCircleIcon className="navbar-icon"/></Link>
                        </li>
                        <li class="nav-item me-4">
                        <Link class="nav-link text-light py-3" to="/blog"><ShoppingCartIcon className="navbar-icon"/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;