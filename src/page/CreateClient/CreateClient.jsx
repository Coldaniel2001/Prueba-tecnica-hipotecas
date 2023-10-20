import React from "react"

import Navbar from "../../component/Navbar/Navbar"
import InfoCreateClient from "../../component/InfoCreateClient/InfoCreateClient";


const CreateClient = () => {

    return (
        <>
            <div className="h-[20vh] w-[100vw]">
                <Navbar />
            </div>
            <div className="flex justify-center items-center  h-[80vh] w-[100vw] bg-backgroundSky">
                <InfoCreateClient />
            </div>
        </>
    )
}

export default CreateClient