import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BuilderAdmin.css'
import { Link } from 'react-router-dom';
const BuilderCategoryAdmin = (props) => {
    return (
        
           <div className="row">
               <div className="col-md-3">
                   <p className='text-light'>{props.data.fullName}</p>
               </div>
               <div className="col-md-3">
               <p className='text-light'>{props.data.Phone}</p>
               </div>
               <div className="col-md-3">
               <p className='text-light'>{props.data.email}</p>
               </div>
               <div className="col-md-3">
                    <Link to={`/adminPanel/${props.data._id}`}><ArrowForwardIosIcon className="text-light goOn"/></Link>
               </div>
           </div>
    );
};

export default BuilderCategoryAdmin;