import React, { useState } from 'react';
import '../Guitar/AdminGuitar.css';

const Slider = () => {
    const [slider, setSlider] = useState({});
    const [file, setFile] = useState(null);
    const handleOnChange = (e) => {
        const newSlider = {...slider}
        newSlider[e.target.name] = e.target.value;
        setSlider(newSlider);
        console.log(slider);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(file)
    }
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('description', slider.description);
        formData.append('pricing', slider.pricing);
        formData.append('cat', slider.cat);
        formData.append('link', slider.link);
        fetch('http://localhost:5000/slider/',{
            method:"POST",
            body:formData,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        

        e.preventDefault();
    }
    return (
        <div className="text-light">
            <h1 className="mb-5 mt-2">Upload Your Slider Details In Here</h1>
           <form action="" onSubmit={handleSubmit}>
           <label className='input-item-name' htmlFor="">Title</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="title" placeholder="model Name" onChange={handleOnChange}/>
            <br /><br />

            <label className='input-item-name' htmlFor="">Describtion</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="description" placeholder="model Name" onChange={handleOnChange}/>
            <br /><br />

            <label className='input-item-name' htmlFor="">Pricing</label>
            <label className="colon">:</label>
            <input className="input-box" type="number" name="pricing" placeholder="model Name" onChange={handleOnChange}/>
            <br /><br />
            <label className='input-item-name' htmlFor="">category</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="cat" placeholder="category Name" onChange={handleOnChange}/>
            <br /><br />
            <label className='input-item-name' htmlFor="">Model Name</label>
            <label className="colon">:</label>
            <input className="input-box" type="file"  placeholder="uploadSLider Image" onChange={handleFileChange}/>
            <br /><br />
            <label className='input-item-name' htmlFor="">Link</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="link" placeholder="model Name" onChange={handleOnChange}/>
            <br /><br />
           
            <br /><br />
           <button className="btn btn-primary" type="submit">Submit</button>
            <br /><br />
           </form>
        </div>
    );
};

export default Slider;