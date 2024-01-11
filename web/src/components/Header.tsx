import '../css/Header.css'
import {FC} from 'react'

interface pedINFO {
    name: string;
    type: string;
    rep: number
}

const Header: FC<pedINFO> = ({name,type,rep}) => {
    return (
        <div className="header-container">
            <h1 className='header-h1'>{name}</h1>
            <div className='header-type'>{type}</div>
            <div className='header-rep'>{rep} REP</div>
        </div>
    )
}

export default Header