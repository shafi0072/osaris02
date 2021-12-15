import React from 'react';
import Img1 from '../../Resorce/Wood/Screenshot 2021-12-08 200935.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-container py-5'>
            <div className='row'>
                <div className='col-md-9 pe-5 ps-5'>
                    <div className='d-flex align-items-center justify-content-between cart-title'>
                        <h4 className=''>Shoping Cart</h4>
                        <h4 className=''><span>3 </span>items</h4>
                    </div>
                    <div className='row'>
                        <div className='col-md-2'>
                            <img className='item-img' src={Img1}/>
                        </div>
                        <div className='col-md-10'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <h6>Kala Kath</h6>
                                    <button>Remove</button>
                                </div>
                                <div className='col-md-4 text-center'>
                                    <div className='d-flex justify-content-center align-items center '>
                                        <RemoveIcon/>
                                        <input className='item-count' type="number" value="3"/>
                                        <AddIcon/>
                                    </div>
                                </div>
                                <div className='col-md-4 text-end'>
                                    <div>
                                        <p><span>BDT</span><span> 100</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;