import Table from "../Komponen/Table"
import Map from "../Komponen/Map"
import Navbar from "../Komponen/Nav";

export default function Tracker(){
    return(
        <>
        <Navbar />
        <div id="main-content">
            <div className="container-fluid p-4">
                <h1>Tracker</h1>
                <Map />
                <div className="card shadow-sm rounded-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div className="row w-100 p-4">
                            <div className="col-12 col-lg-6 col-md-6 mb-2 mb-md-0">
                                <button className="btn btn-primary btn-lg ">
                                    Tambah Data Kapal
                                </button>
                            </div>

                            <div className="col-12 col-lg-6 col-md-6 mt-3 mt-md-0">
                                <div className="d-flex gap-2">
                                    <input type="text" className="form-control form-control-lg" placeholder="Search..."/>
                                    <button className="btn btn-primary btn-lg">
                                        <i className="fa-solid fa-filter"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <Table 
                                columns={['no', 'nama', 'nim']}
                                data={[
                                    [1, "Risky", "Farhan"],
                                    [1, "Risky", "Farhan"],
                                    [1, "Risky", "Farhan"]
                                ]}
                                buttonAction={(row)=>(
                                    <>
                                        <button class="btn btn-sm btn-danger mx-2">Informasi Kapal</button>
                                        <button class="btn btn-sm btn-danger mx-2">Informasi Kapal</button>
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}