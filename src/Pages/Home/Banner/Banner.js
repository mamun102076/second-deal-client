import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media1.moneywise.com/cdn-cgi/image/fit=cover,g=left,width=756,height=336,f=auto,quality=80/a/13004/the-best-time-to-buy-a-laptop-in-2020_hero_1800x800_v20200920104450.jpg")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Laptop lovers</h1>
                        <p className="mb-5 text-2xl">Looking for used or second-hand lapotops? you are in the right place.Second Deal is a platform on which you can buy and sell used laptops!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;