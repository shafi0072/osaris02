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
        <div className='mt-5 p-5'>
            <div className='table-container'>
                <table className='admin-table p-5'>
                    <thead>
                        <tr className='admin-thead bg-danger'>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Move On</td>
                        </tr>
                    </thead>
                        {builderOrder.map(data => <BuilderCategoryAdmin data={data} key={data._id}/>)}
                </table>
            </div>
        </div>
    );
};

export default BuilderAdmin;