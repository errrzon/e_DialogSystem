import Header from './Header.tsx'
import Text from "./Text.tsx"
import Selection from "./Selection.tsx"
import '../css/App.css'
import { useEffect, useState } from 'react'

interface pedINFO {
    name: string;
    type: string;
    rep: number;
    text: string,
  }

export default () => {
    const [show,setShow] = useState(false)
    const [headerData,setHeaderData] = useState<pedINFO>({
        name: "",
        type: "",
        rep: 100,
        text: "",
      });
      
    const handleShowNUI = (event:any): void => {
        if (event.data.type === 'open') {
            const data = event.data.values
            setHeaderData({
                name: data.pedName,
                type: data.pedType,
                rep: data.currentRep,
                text: data.dialog,
            })
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('message', handleShowNUI);
    }, [])

    if (!show) {
        window.removeEventListener('keydown', handleShowNUI);  
    }
    if (show) {
        return (<div className ={`main-container`}>
        <Header {...headerData}/>
        <Text description = {headerData.text} />
        <Selection destroyUI={setShow}/>
    </div>)
    }
}