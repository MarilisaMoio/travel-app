const Hero = () => {

    return (
        <div className="h-full">
            <div className="w-full h-full relative bg-[url(../../public/hero-image.jpeg)] bg-cover bg-center">
                <div className="w-full h-full absolute z-0 top-0 left-0 bg-amber-500 opacity-50"></div>

                <div className="h-full w-full flex flex-col items-center relative z-10 justify-center text-stone-50">
                    <h1 className="font-bold text-[4rem] drop-shadow-md animate-entry">Mission Impossible</h1>
                    <div className="text-[1.6rem]">The travel manager app</div>
                    <button className="bg-slate-50 p-2 px-4 mt-5 rounded-full text-stone-900">Inizia Ora!</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
