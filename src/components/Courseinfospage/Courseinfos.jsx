import './infos.css'
import cours2 from "/src/assets/cours2.jpg"
import { FcAddColumn } from "react-icons/fc";
import { MdDone } from "react-icons/md";
import { FcBarChart } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";
// import Menusdown from '../component/Menusdown';

export function Courseinfos () {
  return (
    <>
    
    <div className="Home-contain">
      {/* <Navbar /> */}
   
      <div className="container-infos">
     <section className='about'>
        <div className='about-image'>
            <div className='about-us'>
            <h2><strong>About us</strong></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Debitis, eius repellat amet ipsa fugit nihil modi accusamus impedit. 
             *   Similique veniam hic a dolores ab impedit, culpa ipsum cum facere expedita?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Debitis, eius repellat amet ipsa fugit nihil modi accusamus impedit. 
                Similique veniam hic a dolores ab impedit, culpa ipsum cum facere expedita?
            </p>
            <button className='showmore'><i><FcAddColumn /></i>&nbsp;&nbsp;Show More</button>
            </div><br /><br />
             <div className='whatu'>
            <h2><strong>What you will learn</strong></h2><br />
        <p1><i><MdDone className='icon'/></i>Skills Update</p1>&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <p1><i><MdDone className='icon'/></i>Self Update</p1><br />
        <br />
        <p1><i><MdDone className='icon'/></i>prepared Yourself</p1>
        &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;
        <p1><i><MdDone className='icon'/></i>Learn New Things</p1>
        </div> 
        

        <br />
        <h4><strong>About the instructor</strong></h4><br /><br />
        <div className='instructor'>
        <div className='left-sd'>
    
    <img src = {cours2} className='logo' />
    
    
    </div>
    <div className='right-sd'>
        <h5 className='custom-para'>React Themes</h5><br />
        <a className='reply-text' href='#' ><i className='Fas-fa-reply' /></a>
        <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. eque.</p>
        
        </div>

</div>



 


        </div>
        
 
            
        <div className="about-content">
            <h2></h2>
        
            <div className='image'>
           <img src ={cours2} className='img' /><br /><br />
           <button className='start'>Start learning</button>
           <br/><br />
           <div className='second'>
            <br />
            <div className='left'>
            <p1><i><FcBarChart /></i>Level</p1><br />
            <p1><i><FcClock /></i>Duration</p1><br />
            <p1><i><FcRefresh /></i>Last Update</p1>
            
            </div>
            <div className='right'>
            <p1>Beginner</p1><br />
            <p1>5hours 30min</p1><br />
            <p1>Feb 2,2023</p1><br />
            </div>
           
            
          
            </div>
            <br />
            <div className='requirement'>
        <h2><strong>Requirements</strong></h2><br />
        <p1><i><MdDone className='icon'/></i>Basic programming</p1>
        <br />
        <p1><i><MdDone className='icon'/></i>Daily Update</p1><br />
        <p1><i><MdDone className='icon'/></i>Routine study</p1><br />
        <p1><i><MdDone className='icon'/></i>Regular join class</p1><br />
        </div>
        <div className='requirement'>
          <br />
        <h2><strong>Audience</strong></h2><br />
        <p1><i><MdDone className='icon'/></i>Technical People</p1>
        <br />
        <p1><i><MdDone className='icon'/></i>Engineering Students</p1><br />
        <p1><i><MdDone className='icon'/></i>Programming Lover</p1><br />
       
        </div>
            <br />
            

            </div>  
        </div>
        
       </section>
       </div>

      </div>
      </>
  )
}

export default Courseinfos;