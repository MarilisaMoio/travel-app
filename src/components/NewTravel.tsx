import { useState } from "react"

const NewTravel = () => {
    const [travelName, setTravelName] = useState<string>("")

    const handleClick = () => {
        
    }

    return (
        <div className="m-auto flex flex-col justify-center items-center h-full bg-stone-50 space-y-4">
            <h2 className="text-2xl">Come vuoi chiamare questo itinerario?</h2>
            <input className="outline-orange-400 rounded-md border-solid border-orange-400 border-[1px] py-1 px-2" type="text" value={travelName} onChange={(e) => setTravelName(e.target.value)}/>
            <button className="p-2 px-4 mt-5 rounded-full bg-orange-500" onClick={handleClick}>Prosegui</button>
        </div>
    )
}

export default NewTravel
