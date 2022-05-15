import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const Navigation = (props) => {
    return (
        <div className='pl-6 py-5 pr-10 flex justify-between items-center'>
            <div className='flex flex-row'>
                
                <Logo hoverColor={"fill-slate-600"} color={"black"} width={"76"}/>

                <ul className="flex flex-row pl-8 gap-8 items-center text-sm font-[550] text-slate-500">
                    <li className="hover:text-gray-800 cursor-pointer">Inspiration</li>
                    <li className="hover:text-gray-800 cursor-pointer">Find Work</li>
                    <li className="hover:text-gray-800 cursor-pointer">Learn Design</li>
                    <li className="hover:text-gray-800 cursor-pointer">Go Pro</li>
                    <li className="hover:text-gray-800 cursor-pointer">Marketplace</li>
                    <li className="hover:text-gray-800 cursor-pointer">Hire Designers</li>
                </ul>
   
            </div>
            
            <div className='grid grid-cols-3 gap-2 content-center justify-items-center'>
                
                <a href="#0" className='self-center justify-self-end text-slate-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon icon-18 fill-current">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
                    </svg>
                </a>
                <a href='#0' className='self-center'><p className='text-slate-500'>Sign in</p></a>

                <Button title={"Sign up"} />
            </div>
            
        </div>
    )
}

export default Navigation;