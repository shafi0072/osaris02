import React, { useState } from 'react';

const Guitar = () => {
    const [guitar,setGuitar] = useState({})
    const handleOnChange = (e) => {
        const newGuitar = {...guitar};
        newGuitar[e.target.name] = e.target.value;
        setGuitar(newGuitar);
        console.log(guitar)
    }
    return (
        <div className='bg-dark text-light'>
            <h1>Upload Your Guitar Collection In Here</h1>
            <form action="">
                <label htmlFor="">Model Name</label>
                <input type="text" name="title" placeholder="model Name" onChange={handleOnChange} /><br /><br />
                <label htmlFor="">Descriptions</label>
                <textarea type="text" name="description" id=""  placeholder="Description" onChange={handleOnChange}></textarea><br /><br />
                <label htmlFor="">Price</label>
                <input type="number" name="pricing" placeholder="Give the price point" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">Upload image One</label>
                <input type="file" name="imageOne" id="" /><br /><br />
                <label htmlFor="">Upload Image Two</label>
                <input type="file" name="imageTwo" id="" /><br /><br />
                <label htmlFor="">Upload Image Three</label>
                <input type="file" name="imageThree" id="" /><br /><br />
                <label htmlFor="">Body Quality</label>
                <input type="text" name="body" id="" placeholder="Enter the body quality of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">bridge Quality</label>
                <input type="text" name="bridge" id="" placeholder="Enter the bridge quality of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">dimensions</label>
                <input type="text" name="dimensions" id="" placeholder="Enter the dimensions of guitar" onChange={handleOnChange} /><br /><br />
                <label htmlFor="">electronics</label>
                <input type="text" name="electronics" id="" placeholder="Enter the electronics of guitar" onChange={handleOnChange} /><br /><br />
                <label htmlFor="">fringerboard</label>
                <input type="text" name="fringerboard" id="" placeholder="Enter the fringerboard of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">frets</label>
                <input type="text" name="frets" id="" placeholder="Enter the frets of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">hardware</label>
                <input type="text" name="hardware" id="" placeholder="Enter the hardware of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">inlys</label>
                <input type="text" name="inlys" id="" placeholder="Enter the inlys of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">neck</label>
                <input type="text" name="neck" id="" placeholder="Enter the neck of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">neckWidth</label>
                <input type="text" name="neckWidth" id="" placeholder="Enter the neckWidth of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">notes</label>
                <input type="text" name="notes" id="" placeholder="Enter the notes of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">pickups</label>
                <input type="text" name="pickups" id="" placeholder="Enter the pickups of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">scaleLength</label>
                <input type="text" name="scaleLength" id="" placeholder="Enter the scaleLength of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">strings</label>
                <input type="text" name="strings" id="" placeholder="Enter the strings of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">tuners</label>
                <input type="text" name="tuners" id="" placeholder="Enter the tuners of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">weight</label>
                <input type="text" name="weight" id="" placeholder="Enter the tuners of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">category</label>
                <input type="text" name="cat" id="" placeholder="Enter the category of guitar" onChange={handleOnChange}/><br /><br />
                <label htmlFor="">youtubeLink</label>
                <input type="text" name="youtubeLink" id="" placeholder="Enter the youtubeLink of guitar" onChange={handleOnChange}/><br /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Guitar;