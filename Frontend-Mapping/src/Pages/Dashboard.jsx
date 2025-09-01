import Navbar from "../Komponen/Nav";
export default function Dashboard(){
    return(
        <>
        <Navbar />
        <div id="main-content">
            <div className="container-fluid p-4">
                <h1>Dashboard</h1>
            </div>
        </div>
        </>
    );
}