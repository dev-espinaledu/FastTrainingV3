function Navbar() {
    return (
        <div className="flex flex-col  items-center justify-center  align-self-center  h-auto bg-white shadow-lg w-16 p-1.5 bg-white/50 rounded ">
            <nav className="flex h-full flex-col justify-center w-full rounded bg-slate-50 group-hover:items-baseline group-hover:pl-4  items-center">
                <div className="my-4">
                <button className="bg-transparent border-none p-0" aria-label="Collapse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z" ></path></svg>
                </button>
                </div>
                <div className="my-4">
                <button className="bg-transparent border-none p-0" aria-label="Magic wand">

                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1664 1664"><path fill="currentColor" d="m1190 581l293-293l-107-107l-293 293zm447-293q0 27-18 45L333 1619q-18 18-45 18t-45-18L45 1421q-18-18-18-45t18-45L1331 45q18-18 45-18t45 18l198 198q18 18 18 45M286 98l98 30l-98 30l-30 98l-30-98l-98-30l98-30l30-98zm350 162l196 60l-196 60l-60 196l-60-196l-196-60l196-60l60-196zm930 478l98 30l-98 30l-30 98l-30-98l-98-30l98-30l30-98zM926 98l98 30l-98 30l-30 98l-30-98l-98-30l98-30l30-98z"></path></svg>
                </button>
                </div>
                
                <div className="my-6">
                    <button className="bg-transparent border-none p-0" aria-label="Text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fillRule="evenodd" d="M7.934 2h8.132c.886 0 1.65 0 2.262.082c.655.088 1.284.287 1.793.797c.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061c-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v17a1 1 0 1 1-2 0V4H8c-.971 0-1.599.002-2.061.064c-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262c.088-.655.287-1.284.797-1.793c.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2" clipRule="evenodd"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10"></path></g></svg>
                    </button>
                </div>
                <div className="my-6">

                    <button className="bg-transparent border-none p-0" aria-label="Bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M13 2.5a5.5 5.5 0 0 1 4.213 9.036a5.5 5.5 0 0 1-2.992 9.96L14 21.5H6.1a1.6 1.6 0 0 1-1.593-1.454L4.5 19.9V4.1a1.6 1.6 0 0 1 1.454-1.593L6.1 2.5zm1 11H7.5v5H14a2.5 2.5 0 0 0 0-5m-1-8H7.5v5H13a2.5 2.5 0 0 0 0-5"></path></g></svg>
                    </button>
                </div>
                <div className="my-6">
                    <button className="bg-transparent border-none p-0" aria-label="Attach">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8.738 7.78l-3.891 3.977c-1.17 1.196-1.755 1.794-1.834 2.523q-.025.232 0 .464c.08.73.664 1.327 1.834 2.523l.149.152c.624.639.937.958 1.31 1.172q.328.188.689.291c.413.118.856.118 1.743.118c.886 0 1.33 0 1.743-.118q.361-.104.688-.29c.374-.215.686-.534 1.31-1.173l2.845-2.907M8.738 7.78l3.582-3.657C13.706 2.708 14.4 2 15.263 2s1.556.708 2.941 2.125l.743.76C20.316 6.283 21 6.983 21 7.85s-.685 1.566-2.054 2.964l-3.622 3.698M8.738 7.78l6.586 6.732M10 22h11" color="currentColor"></path></svg>
                    </button>
                </div>
                <div className="my-6">

                    <button className="bg-transparent border-none p-0" aria-label="Cut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M238.78 183.79L98.28 87.65A40.2 40.2 0 0 0 100 76a40 40 0 1 0-15.29 31.45l30 20.56l-30 20.56a40 40 0 1 0 3.57 59.74A39.73 39.73 0 0 0 100 180a40.2 40.2 0 0 0-1.72-11.66l37.72-25.8l89.22 61.06a12 12 0 0 0 13.56-19.81m-167.47 7.54A16 16 0 1 1 76 180a16 16 0 0 1-4.69 11.33M48.69 87.3a16 16 0 1 1 22.62 0a16 16 0 0 1-22.62 0m112.82 23.24a12 12 0 0 1 3.13-16.68l60.58-41.46a12 12 0 0 1 13.56 19.81l-60.59 41.46a12 12 0 0 1-16.68-3.13"></path></svg>
                    </button>
                </div>
                <div className="my-6">

                    <button className="bg-transparent border-none p-0" aria-label="Cut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11h3m3 0h-3m0 0V8m0 3v3m6 3l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></path></svg>
                    </button>
                </div>
                <div className="my-6">

                    <button className="bg-transparent border-none p-0" aria-label="Cut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M8 11h6"></path></svg>
                    </button>
                </div>

                <div className="my-6">

                    <button className="bg-transparent border-none p-0" aria-label="Cut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="currentColor" d="m27.71 9.29l-5-5A1 1 0 0 0 22 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a1 1 0 0 0-.29-.71M12 6h8v4h-8Zm8 20h-8v-8h8Zm2 0v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8H6V6h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.41l4 4V26Z"></path></svg>
                    </button>
                </div>
                <div className="my-6">
                    <button className="bg-transparent border-none p-0" aria-label="Cut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"></path></svg>
                    </button>
                </div>
                </nav>
        </div>
    );
}

export default Navbar;
