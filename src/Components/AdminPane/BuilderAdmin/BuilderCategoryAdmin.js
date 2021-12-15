import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BuilderAdmin.css'
import { Link } from 'react-router-dom';
const BuilderCategoryAdmin = (props) => {
    return (
            <tbody>
                <tr className='admin-tbody'>
                    <td>{props.data.fullName}</td>
                    <td>{props.data.Phone}</td>
                    <td>{props.data.email}</td>
                    <td className='moveon'><Link to={`/adminPanel/${props.data._id}`}><ArrowForwardIosIcon className='admin-icon bg-dark'/></Link></td>
                </tr>
            </tbody>
            
           
    );
};

export default BuilderCategoryAdmin;