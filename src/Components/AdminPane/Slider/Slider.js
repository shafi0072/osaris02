import React from 'react';
import '../Guitar/AdminGuitar.css';

const Slider = () => {
    return (
        <div className="text-light">
            <h1 className="mb-5 mt-2">Upload Your Slider Details In Here</h1>
            <label className='input-item-name' htmlFor="">Title</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="title" placeholder="model Name"/>
            <br /><br />

            <label className='input-item-name' htmlFor="">Describtion</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="title" placeholder="model Name"/>
            <br /><br />

            <label className='input-item-name' htmlFor="">Pricing</label>
            <label className="colon">:</label>
            <input className="input-box" type="number" name="title" placeholder="model Name"/>
            <br /><br />
            <label className='input-item-name' htmlFor="">Model Name</label>
            <label className="colon">:</label>
            <input className="input-box" type="file" name="title" placeholder="model Name"/>
            <br /><br />
            <label className='input-item-name' htmlFor="">Model Name</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="title" placeholder="model Name"/>
            <br /><br />
            <label className='input-item-name' htmlFor="">Model Name</label>
            <label className="colon">:</label>
            <input className="input-box" type="text" name="title" placeholder="model Name"/>
            <br /><br />
            <label className='input-item-name' htmlFor="">Model Name</label>
            <label className="colon">:</label>
            <input className="input-box" type="date" name="title" placeholder="model Name"/>
            <br /><br />
        </div>
    );
};

export default Slider;