import { useEffect,FC } from "react"
import "../css/Selection.css"

interface Components {
    destroyUI(arg:boolean): any,
}

const Selection: FC<Components> = ({destroyUI}) => {
    const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : 'nui-frame-app';
    
    const handleAction = (): void => {
        navigator.sendBeacon(`https://${resourceName}/doAction`)
        handleLeave()
    }

    const handleLeave = (): void => {
        destroyUI(false)
        navigator.sendBeacon(`https://${resourceName}/stopInteract`)
    }

    const handleKeyDown = (event:any): void => {
        if (event.key === "Escape" || event.key === "2") {
            handleLeave()
        }
        if (event.key === "1") {
            handleAction()
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])
    return (
        <div className="selection-main">
            <div className="selection-wrapper" onClick={handleAction}>
                <div>1</div>
                <h3>I'm In</h3>
            </div>
            <div className="selection-wrapper" onClick={handleLeave}>
                <div>2</div>
                <h3>Leave Conversation</h3>
            </div>
        </div>
    )
}

export default Selection
