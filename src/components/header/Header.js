export default function Header() {
    return (
        <div className="p-4 bg-transparent md:flex md:items-center md:justify-center">
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/#" className="mr-4 font-bold tracking-widest cursor-pointer text-lg text-white md:mr-6 ">HOME</a>
                </li>
                <li>
                    <a href="/#" className="mr-4 font-bold tracking-widest cursor-pointer text-lg text-white md:mr-6">ABOUT</a>
                </li>
                <li>
                    <a href="/#" className="mr-4 font-bold tracking-widest cursor-pointer text-lg text-white md:mr-6">RESUME</a>
                </li>
                <li>
                    <a href="/#" className="cursor-pointer font-bold tracking-widest text-lg text-white">WORKS</a>
                </li>
            </ul>
        </div>
    );
}