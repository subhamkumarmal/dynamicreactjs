import React from 'react';
import './thisAll.css';

const Home = () =>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <div className="row d-flex justify-content-center  align-items-center pt-5 ">

                        <div className="col-lg-6 ">
                            <div>
                                <img src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-6 pt-5 ">
                            <div className="pragraph">
                           <p >
                           A computer is a machine that can be instructed to 
                            carry out sequences of arithmetic or logical operations 
                            automatically via computer programming. Modern computers 
                            have the ability to follow generalized sets of operations,
                             called programs. These programs enable computers to perform
                              an extremely wide range of tasks.
                           </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
<br/><br/><br/><br/><br/><br/><br/>
        <div class="footer">
           <p>HOME</p>
        </div>
        </>
    )
}
export default Home;