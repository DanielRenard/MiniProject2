import Profile from "./contentProfile/Profile";
import ShotList from "./contentShotList/ShotList";
import ContentRoutes from "/src/routes/ContentRoutes"

export default function Content(){
    return(
        <div className="Content">Here's the Body
        <ContentRoutes/>
        {/* <ShotList/>
        <Profile/> */}
        
        </div>
    )
}