import React from "react"
import { BackgroundProps } from "../../utils/interfaces"
import styles from './index.module.scss';

const Background: React.FC<BackgroundProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.background} >
            {children}
        </div>
    )
}

export default Background