import { useState } from "react"
import { NavLink } from "react-router-dom"
import DropDown from "./DropDown"

const Header = () => {
    const [visibility, setVisibility] = useState<boolean>(false)

    const handleVisibility = () => {
        setVisibility((visibility) => !visibility)
    }

    return (
        <div className="p-3 px-5 flex bg-stone-50 justify-between items-center relative">
            <NavLink to="/" className="flex items-center w-fit">
                <img src="/travel.png" alt="logo" className="h-12" />
                <h1 className="ml-2 text-xs font-semibold">Mission <br /> Impossible</h1>
            </NavLink>
            <button onClick={() => setVisibility(visibility => !visibility)}>
                sono la tendina
            </button>
            {visibility && <DropDown handleVisibility={handleVisibility} />}
        </div>
    )
}

export default Header

