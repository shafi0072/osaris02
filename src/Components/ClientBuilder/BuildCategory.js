import React from 'react';
import './ClientBuilder.css'
const BuildCategory = () => {
    return (
        <div className="maincategoryOfbuild pt-5 pb-5">
           <div className='d-flex justify-content-center '>
           <div className='buildDivision'>
                <h1 className="text-light">BUILD YOUR GUITAR</h1>
            </div>
           </div>
           <p className='text-center text-light mt-2'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
            <div className=" d-flex justify-content-evenly mt-5">
                <div>
                    <div className='categoryDv'>
                        <h1 className='text-light'>Acousitc</h1>
                    </div>
                </div>
                <div>
                    <div className='categoryDv'>
                        <h1 className='text-light'>Electric</h1>
                    </div>
                </div>
                <div>
                    <div className='categoryDv'>
                        <h1 className='text-light'>Bass</h1>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default BuildCategory;