import { NavLink } from "react-router-dom"

const Hero = () => {

    return (
        <div className="h-full">
            <div className="w-full h-full relative bg-[url(../../public/hero-image.jpeg)] bg-cover bg-center">
                <div className="w-full h-full absolute z-0 top-0 left-0 bg-amber-500 opacity-50"></div>

                <div className="h-full w-full flex flex-col items-center relative z-10 justify-center text-stone-50">
                    <h1 className="font-bold sm:text-[4rem] text-[2rem] drop-shadow-md animate-entry">Mission Impossible</h1>
                    <div className="sm:text-[1.6rem] text-[1rem]">The travel manager app</div>
                    <NavLink to="/new-travel" className="bg-slate-50 p-2 px-4 mt-5 rounded-full text-stone-900">Inizia Ora!</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero
