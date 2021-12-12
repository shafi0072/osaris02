import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const BuilderDetailsPage = () => {
    const {id} = useParams();
    const [singleData, setSingleData] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/builder/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, [id])
    
    return (
        <div>
            <h1>Hello its page admin Details</h1>
        </div>
    );
};

export default BuilderDetailsPage;