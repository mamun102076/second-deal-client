import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <div className='mb-4'>
                <h1 className='text-2xl font-semibold mb-2'>Q:What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl'><span className='font-semibold'>ans:</span> There are several other ways to manage state​s in React, including the use of:
                    1.Hooks.
                    2.React Context API.
                    3.Apollo Link State.</p>
            </div>
            <div className='mb-4'>
                <h1 className='text-2xl font-semibold mb-2'>Q:How does prototypical inheritance work?</h1>
                <p className='text-xl'><span className='font-semibold'>ans:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='mb-4'>
                <h1 className='text-2xl font-semibold mb-2'>Q:What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl'><span className='font-semibold'>ans:</span> Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-2'>Q: React vs. Angular vs. Vue</h1>
                <p className='text-xl'><span className='font-semibold'>ans:</span>
                    <br />
                    --- React is a JavaScript library created by Facebook.React is a User Interface (UI) library.React is a tool for building UI components.
                    <br />
                    --- AngularJS lets you extend HTML with HTML attributes called directives.AngularJS directives offers functionality to HTML applications.AngularJS provides built-in directives and user defined directives.
                    <br />
                    --- Vue.js lets you extend HTML with HTML attributes called directives.Vue.js directives offers functionality to HTML applications.Vue.js provides built-in directives and user defined directives
                </p>
            </div>
        </div>
    );
};

export default Blog;