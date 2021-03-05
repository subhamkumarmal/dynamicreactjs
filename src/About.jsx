import React from 'react';
import './about.css';

const About = () =>{
    return(
        <>


<div className="container secondContainer">
            
            <pre>
                   Hi  I  am  Subham  Kumar  Mal  and  also  <strong>Computer Engineer</strong>
            </pre>
</div>







        <div className="container ">
            <div className="row">
                <div className="col-10">
                    <div className="row d-flex align-items-center pt-2 ">

                        <div className="col-lg-6 pt-5 order-md-2  order-lg-1">
                            <div className="pragraph">
                           <p >
                           Coding is a list of step-by-step instructions that get computers to do what 
                           you want them to do. Coding makes it possible for us to create computer software,
                            games, apps and websites. 
                           Coders, or programmers, are people who write the programmes
                            behind everything we see and do on a computer.
                           </p>
                            </div>
                        </div>
                       
                        <div className="col-lg-6  ml-5 order-md-1  order-lg-2 ">
                            <div >
                                <img className="imgabout1" src="https://image.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg" alt=""/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

 

<div className="container">
  <div className="row">
    <div className="col-md">
      <img src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg" alt=""/>
      <h3 className="tagcomputerengineer">Computer Engineer</h3>
    </div>
    <div className="col-md">
           
    
      Academic programs vary between colleges. Courses usually include introduction to 
      programming, introduction to algorithms and data structures, computer architecture, 
      operating systems, computer networks, parallel computing, embedded systems, algorithms
       design, circuit analysis and electronics, digital logic and processor design, computer
        graphics, scientific computing, software engineering, database systems, digital signal
         processing, virtualization, computer simulations and games programming. CSE programs
          also include core subjects of theoretical computer science such as theory of computation,
           numerical methods, machine learning, programming theory and paradigms. Modern academic
            programs also cover emerging computing fields like image processing, data science, robotics,
             bio-inspired computing, computational biology, autonomic computing and artificial intelligence.
              Most of the above CSE areas require initial mathematical knowledge, hence the first year of study
               is dominated by mathematical courses, primarily discrete mathematics, mathematical analysis, 
      linear algebra and statistics, as well as the basics of physics - field theory and electromagnetism.
      <br/><br/><br/><br/><br/><br/>
      
    </div>
    
  </div>
</div>

        






<div class="footer">
<p>About</p>
</div>
        </>
    )
}
export default About;