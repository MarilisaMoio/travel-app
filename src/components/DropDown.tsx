import { useNavigate } from "react-router-dom"

interface Props {
    handleVisibility: () => void
}

const DropDown = (props: Props) => {
    const navigate = useNavigate()

    const closeAndNavigate = () => {
        props.handleVisibility()
        navigate("/new-travel")
    }
    
    return (
        <div className="absolute bottom-0 bg-stone-50 w-full md:w-64 p-4 translate-y-full right-0 z-20">
            <button onClick={closeAndNavigate}>Crea nuovo itinerario</button>
        </div>
    )
}

export default DropDown
