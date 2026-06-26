import {
    RouterProvider
} from "react-router-dom";

import { router }
    from "./app/router";


function App() {

    return (
        <div className="bg-background text-text p-10 min- h-screen">
            <RouterProvider router={router} />
        </div>
    )

}


export default App;