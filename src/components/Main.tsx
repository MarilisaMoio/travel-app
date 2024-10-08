import React from "react"

interface Props {
    children: React.ReactNode
}

const Main = (props: Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Main
