import React,{useState,useEffect} from 'react';
import './BuilderAdmin.css';
import BuilderCategoryAdmin from './BuilderCategoryAdmin';

const BuilderAdmin = () => {
    const [builderOrder, setBuilderOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/builder/')
        .then(res => res.json())
        .then(data => setBuilderOrder(data))
        .catch(err => console.log(err))

    }, [])
    return (
        <div className='mt-5'>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr className='admin-thead'>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Move On</td>
                        </tr>
                    </thead>
                        <BuilderCategoryAdmin/>
                </table>
            </div>
        
                
                
            
           
            
        </div>
    );
};

export default BuilderAdmin;