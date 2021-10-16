import React, { useState } from 'react';
import './AdminGuitar.css'

const Guitar = () => {
    const [guitar,setGuitar] = useState({})
    const handleOnChange = (e) => {
        const newGuitar = {...guitar};
        newGuitar[e.target.name] = e.target.value;
        setGuitar(newGuitar);
        console.log(guitar)
    }
    return (
        <div className=' text-light'>
            <h1 className="mb-5 mt-2">Upload Your Guitar Details In Here</h1>
            <form action="">
                <label className='input-item-name' htmlFor="">Model Name</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="title" placeholder="model Name" onChange={handleOnChange} /><br /><br />
                <label className='input-item-name' htmlFor="">Descriptions</label>
                <label className="colon">:</label>
                <textarea className="input-box" type="text" name="description" id=""  placeholder="Description" onChange={handleOnChange}></textarea><br /><br />
                <label className='input-item-name' htmlFor="">Price</label>
                <label className="colon">:</label>
                <input className="input-box" type="number" name="pricing" placeholder="Give the price point" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">Upload image One</label>
                <label className="colon">:</label>
                <input className="input-box" type="file" name="imageOne" id="" /><br /><br />
                <label className='input-item-name' htmlFor="">Upload Image Two</label>
                <label className="colon">:</label>
                <input className="input-box" type="file" name="imageTwo" id="" /><br /><br />
                <label className='input-item-name' htmlFor="">Upload Image Three</label>
                <label className="colon">:</label>
                <input className="input-box" type="file" name="imageThree" id="" /><br /><br />
                <label className='input-item-name' htmlFor="">Body Quality</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="body" id="" placeholder="Enter the body quality of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">bridge Quality</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="bridge" id="" placeholder="Enter the bridge quality of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">dimensions</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="dimensions" id="" placeholder="Enter the dimensions of guitar" onChange={handleOnChange} /><br /><br />
                <label className='input-item-name' htmlFor="">electronics</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="electronics" id="" placeholder="Enter the electronics of guitar" onChange={handleOnChange} /><br /><br />
                <label className='input-item-name' htmlFor="">fringerboard</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="fringerboard" id="" placeholder="Enter the fringerboard of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">frets</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="frets" id="" placeholder="Enter the frets of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">hardware</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="hardware" id="" placeholder="Enter the hardware of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">inlys</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="inlys" id="" placeholder="Enter the inlys of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">neck</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="neck" id="" placeholder="Enter the neck of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">neckWidth</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="neckWidth" id="" placeholder="Enter the neckWidth of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">notes</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="notes" id="" placeholder="Enter the notes of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">pickups</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="pickups" id="" placeholder="Enter the pickups of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">scaleLength</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="scaleLength" id="" placeholder="Enter the scaleLength of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">strings</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="strings" id="" placeholder="Enter the strings of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">tuners</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="tuners" id="" placeholder="Enter the tuners of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">weight</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="weight" id="" placeholder="Enter the tuners of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">category</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="cat" id="" placeholder="Enter the category of guitar" onChange={handleOnChange}/><br /><br />
                <label className='input-item-name' htmlFor="">youtubeLink</label>
                <label className="colon">:</label>
                <input className="input-box" type="text" name="youtubeLink" id="" placeholder="Enter the youtubeLink of guitar" onChange={handleOnChange}/><br /><br />
                <div className="admin-button-container">
                    <button type="button" class="btn btn-primary admin-submit">Submit Now</button>
                </div>
                
            </form>
        </div>
    );
};

export default Guitar;