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
        <div className="absolute bottom-0 bg-stone-50 w-full sm:w-40 p-4 translate-y-full right-0 z-20">
            <button onClick={closeAndNavigate}>Ciaoooo</button>
        </div>
    )
}

export default DropDown
