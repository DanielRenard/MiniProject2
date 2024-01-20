import CameraData from "../../data/CameraData"
import ShotListItem from "./ShotListItem"


export default function ShotList(){
    const cameraList = CameraData?.map(camera => {
        const shotList = camera.shotList.map((shot, index) => {
            return(<ShotListItem key={index} item={shot}/>)
        })

        return (
            <div key={camera.name}>
                <div>{camera.name}</div>
                <div>{shotList}</div>
            </div>
        )
        
    })

    return(
        <div className="ShotList">{cameraList}</div>

    )
}