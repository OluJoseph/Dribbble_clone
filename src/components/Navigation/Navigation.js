import Button from '../Button/Button';
import Svg from '../Svg/Svg';
import { search, dribbble } from '../svgDimensions';

const Navigation = (props) => {
    return (
        <div className='pl-6 py-5 pr-10 flex justify-between items-center'>
            <div className='flex flex-row'>

                <Svg pathClassNames={"hover:fill-slate-600"} svgClassNames={'cursor-pointer'} color={"black"} width={"76"} viewBox={"0 0 76 19"} drawingPath={dribbble} />

                <ul className="flex flex-row pl-8 gap-8 items-center text-sm font-[550] text-slate-500">
                    <li onMouseEnter={props.handleDisplayPopup} onMouseLeave={props.handleCollapsePopup} className="hover:text-gray-800 cursor-pointer">Inspiration</li>
                    <li className="hover:text-gray-800 cursor-pointer">Find Work</li>
                    <li className="hover:text-gray-800 cursor-pointer">Learn Design</li>
                    <li className="hover:text-gray-800 cursor-pointer">Go Pro</li>
                    <li className="hover:text-gray-800 cursor-pointer">Marketplace</li>
                    <li className="hover:text-gray-800 cursor-pointer">Hire Designers</li>
                </ul>
   
            </div>
            
            <div className='grid grid-cols-3 gap-2 content-center justify-items-center'>
                
                <a href="#0" className='self-center justify-self-end text-slate-400'>
                    <Svg width={"16"} viewBox={"0 0 16 16"} svgClassNames={"icon icon-18 fill-current"} drawingPath={search} />
                </a>
                <a href='#0' className='self-center'><p className='text-slate-500'>Sign in</p></a>

                <Button title={"Sign up"} padding={"px-2.5"}/> 
                
            </div>
            
        </div>
    )
}

export default Navigation;