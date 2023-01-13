import './Body.css';
import Home from '../home/Home';
import Work from '../work/Work';
import Education from '../education/Education';
import Portfolio from '../portfolio/Portfolio'

export default function Body(props) {
  return (
    <div className="bg-[#f7f7ff] pt-[10px] pb-[10px]">
        <div className="makeitcenter">
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home" className='tracking-wide text-[15px] text-[#6A6A6A]'>Home</a></li>
                <li><a data-toggle="tab" href="#menu1" className='tracking-wide text-[15px] text-[#6A6A6A]'>Experience</a></li>
                <li><a data-toggle="tab" href="#menu2" className='tracking-wide text-[15px] text-[#6A6A6A]'>Portfolio</a></li>
                <li><a data-toggle="tab" href="#menu3" className='tracking-wide text-[15px] text-[#6A6A6A]'>Education</a></li>
            </ul>

            <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                    <Home {...props.home}/>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <Work {...props.experience}/>
                </div>
                <div id="menu2" className="tab-pane fade">
                    <Portfolio />
                </div>
                <div id="menu3" className="tab-pane fade">
                    <Education {...props.education}/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
