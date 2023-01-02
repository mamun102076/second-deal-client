import React from 'react';

const RatioBar = () => {
    return (
        <div className='bg-pink-100 py-9'>
            <h1 className='text-4xl text-center font-bold text-teal-600 p-3'>Brand Demand according to market</h1>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center text-center mt-16'>
                <div>
                    <div className="radial-progress" style={{ "--value": "70", "--size": "14rem", "--thickness": "2px", "color": 'blue' }}>50%</div>
                    <p className='font-bold text-2xl my-4'>HP</p>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "90", "--size": "14rem", "--thickness": "2px" }}>70%</div>
                    <p className='font-bold text-2xl my-4'>DELL</p>
                </div>
                <div>
                    <div className="radial-progress" style={{ "--value": "60", "--size": "14rem", "--thickness": "2px"  ,"color": 'red'}}>60%</div>
                    <p className='font-bold text-2xl'>ASUS</p>
                </div>
            </div>
        </div>
    );
};

export default RatioBar;