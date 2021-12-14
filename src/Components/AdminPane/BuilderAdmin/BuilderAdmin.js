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
                <table className='admin-table'>
                    <thead>
                        <tr className='admin-thead bg-danger'>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Move On</td>
                        </tr>
                    </thead>
                        <BuilderCategoryAdmin/>
                </table>
            </div>
        
                
<<<<<<< HEAD
                {
                builderOrder.map(data => <BuilderCategoryAdmin key={data._id} data={data}/>)
            }
=======
                
            
           
            
>>>>>>> 7d47ddd21ae9269bcb498f29c7c4252b8d0dbaad
        </div>
    );
};

export default BuilderAdmin;