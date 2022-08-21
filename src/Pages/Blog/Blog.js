import React from 'react';

const Blog = () => {
    return (
        <div className='container border '>
            <h1 className='text-center text-success'> Blog</h1>
            <div className='row g-4 mt-4 mx-8' >
                <div className='col-sm-12 col-md-12 col-lg-6 '>
                    <h3 className=''>Difference between javascript and nodejs</h3>
                    <hr />
                    <h6>Nodejs</h6>
                    <p className='text-justify'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                    <h6>Javascript</h6>
                    <p className='text-justify'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 '>
                    <h3> What is the purpose of jwt and how does it work</h3>
                    <hr />
                    <p>JWT are mainly used for authentication. After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.</p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 '>
                    <h3> Differences between SQL and NoSQL databases.</h3>
                    <h6>SQL</h6>
                    <li>Relational Database Management System (RDBMS)</li>
                    <li>These databases have fixed or static or predefined schema</li>
                    <li>These databases are not suited for hierarchical data storage.</li>
                    <h6>NoSQL</h6>
                    <li>They have dynamic schema</li>
                    <li>These databases are best suited for hierarchical data storage.</li>
                    <li>These databases are not so good for complex queries</li>
                    <hr />
                </div>
                
            </div>

        </div>
    );
};

export default Blog;