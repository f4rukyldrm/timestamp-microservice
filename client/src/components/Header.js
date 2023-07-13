function Header() {
    return (
        <header className=' py-3 w-4/5 mx-auto h-[60px] items-center bg-white flex justify-start fixed top-0 left-0 right-0 z-10'>
            <a href="/" className=''><h1 className='text-md font-bold'>Timestamp Microservice</h1></a> <span className='text-xs font-light ml-1'>/api/:date?</span>
            <nav className='w-3/5'>
                <ul className='flex gap-10 justify-end'>
                    <li><a href="#demo">Demo</a></li>
                    <li><a href="#guide">Guide</a></li>
                </ul>
            </nav>
        </header>)
}

export default Header