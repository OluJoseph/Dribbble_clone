
import Button from '../Button/Button';

const Header = (props) => {
    return (
        <div className='items-center text-center bg-[#E9ECFF] grid grid-rows-1 md:grid-cols-2 py-10 px-[20px] md:px-[32px] xl:px-[72px] h-fit'>
            <div className=' xl:pr-28 md:text-left '>
                <h1 className="text-3xl md:text-3xl xl:text-5xl text-gray-900 font-[700] py-2 tracking-tight ">Discover the world's top designers & creatives</h1>
                <p className="py-2 mb-2 leading-relaxed">Dribbble is the leading destination to find & showcase creative work and home to the world's
                   best design professionals
                </p>

                <Button title={"Sign up"} padding={"px-2.5"}/>
            </div>      
            <div className='row-start-1 md:col-start-2 xl:text-right'>
                    <img className="xl:mr-4 inline-block mb-4 w-1/2 md:w-5/6 xl:w-8/12 xl:self-end" alt="Dribbble is the leading destination to find &amp; showcase creative work and home to the world's best design professionals." src="https://cdn.dribbble.com/assets/art-banners/mergedevt-600w-57271ebfdf4f44412491e6ac02d1dfdc2b2631f553e4c462db4776c94ca2ce0b.png" />
                    <p className="text-slate-400 text-[14px] xl:self-end md:text-right "><span className='link cursor-pointer'>Learn</span> more about how we are supporting Ukraine. Art by <span className="link cursor-pointer">Merge Development</span></p>
            </div>
        </div>
    )
}

export default Header;