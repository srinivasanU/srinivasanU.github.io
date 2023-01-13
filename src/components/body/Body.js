import './Body.css';
import Home from '../home/Home';

export default function Body(props) {
  return (
    <div className="flex-grow bg-[#f7f7ff] pt-[10px] pb-[10px]">
        <div className="makeitcenter">
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home" className='tracking-wide text-[18px] text-[#6A6A6A]'>Home</a></li>
                <li><a data-toggle="tab" href="#menu1" className='tracking-wide text-[18px] text-[#6A6A6A]'>Experience</a></li>
                <li><a data-toggle="tab" href="#menu2" className='tracking-wide text-[18px] text-[#6A6A6A]'>Portfolio</a></li>
                <li><a data-toggle="tab" href="#menu3" className='tracking-wide text-[18px] text-[#6A6A6A]'>Contact</a></li>
            </ul>

            <div className="tab-content">
                <div className="container">
                    <div id="home" className="tab-pane fade in active">
                        <Home {...props.home}/>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Some content in menu 1.</p>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                        <h3>Menu 2</h3>
                        <p>Some content in menu 2.</p>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                        <h3>Menu 3</h3>
                        <p>Some content in menu 3.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
