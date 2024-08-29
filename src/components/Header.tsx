import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="p-3 px-5">
            <NavLink to="/" className="flex items-center">
                <img src="/travel.png" alt="logo" className="h-12" />
                <h1 className="ml-2 text-xs font-semibold">Mission <br /> Impossible</h1>
            </NavLink>
        </div>
    )
}

export default Header

