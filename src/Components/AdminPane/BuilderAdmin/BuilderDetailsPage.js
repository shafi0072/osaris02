import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const BuilderDetailsPage = () => {
    const {id} = useParams();
    const [singleData, setSingleData] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/builder/${id}`)
        .then(res => res.json())
        .then(data => setSingleData(data))
        .catch(err => console.log(err))
    }, [id])
    
    return (
        <div>
            <h1>Details about <span>{singleData[0].fullName}</span> Order</h1>
        </div>
    );
};

export default BuilderDetailsPage;