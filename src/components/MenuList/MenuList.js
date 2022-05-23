

const MenuList = (props) => {

    const linksList = props.links.map((link, index) => {
        return <li className='hover:text-gray-900 cursor-pointer' key={index}><a href='#0'>{link}</a></li>
    })

    return (
        <div className="mb-7">
            <h6 className=' mb-4 text-[14px] font-bold text-gray-900'>{props.title}</h6>
            <ul className='text-[14px] flex flex-col gap-4 text-gray-600 font-light'>
                {linksList}
            </ul>
        </div>
    )
}
export default MenuList;