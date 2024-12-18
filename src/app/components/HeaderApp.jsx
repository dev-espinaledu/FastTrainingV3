import Logo from './Logo';
import SearchBar from './SearchBar';

export default function HeaderApp() {
    return (
        <header className="flex h-[10vh] w-full gap-8 items-center justify-center top-0">
            <section className=' flex  w-full'>
                <Logo />
                <SearchBar />
            </section>
        </header>
    )
}
