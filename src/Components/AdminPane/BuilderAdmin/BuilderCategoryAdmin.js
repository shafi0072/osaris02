import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BuilderAdmin.css'
import { Link } from 'react-router-dom';
const BuilderCategoryAdmin = (props) => {
    return (
            <tbody>
                <tr className='admin-tbody'>
                    <td>Raktim</td>
                    <td>01717330748</td>
                    <td>hol254@gmail.com</td>
                    <td className='moveon'><ArrowForwardIosIcon className='admin-icon bg-dark'/></td>
                </tr>
            </tbody>
            
           
    );
};

export default BuilderCategoryAdmin;