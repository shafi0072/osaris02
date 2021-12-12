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
       <div className="row">
               <div className="col-md-3">
                   <p className='text-danger'>Name</p>
               </div>
               <div className="col-md-3">
               <p className='text-danger'>Phone</p>
               </div>
               <div className="col-md-3">
               <p className='text-danger'>Email</p>
               </div>
               <div className="col-md-3">
               <p className='text-danger'>Move</p>
               </div>
           </div>
                
                {
                builderOrder.map(data => <BuilderCategoryAdmin key={data._id} data={data}/>)
            }
           
            
        </div>
    );
};

export default BuilderAdmin;