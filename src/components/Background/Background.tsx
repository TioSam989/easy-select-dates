import React from "react"
import { BackgroundProps } from "../../utils/interfaces"

const Background: React.FC<BackgroundProps> = ({ children }): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Background