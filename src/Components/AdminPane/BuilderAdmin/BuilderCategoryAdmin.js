import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BuilderAdmin.css'
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
                    <ArrowForwardIosIcon className="text-light goOn"/>
               </div>
           </div>
    );
};

export default BuilderCategoryAdmin;