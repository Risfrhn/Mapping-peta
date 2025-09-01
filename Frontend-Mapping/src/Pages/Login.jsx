import Carrousel from "../Komponen/Carrousel";
import InputField from "../Komponen/InputField";
import { useLocation } from "react-router-dom";
import Alert from "../Komponen/Alert";

export default function Login() {
    const location = useLocation();
    const alertFromRegister = location.state?.alert;


    const handleLogin = (e) => {
        e.preventDefault(); // cegah reload page
        // panggil API login jika perlu
        console.log("Login submitted");
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* Kiri pakai carousel */}
                    <div className="col-12 col-lg-8 min-vh-100 text-white d-none d-lg-block p-0">
                        <Carrousel 
                            gambar={
                                [
                                    "Images/LoginKomponen.png",
                                    "Images/LoginKomponen2.png",
                                    "Images/LoginKomponen3.png"
                                ]
                            } 
                        />
                    </div>

                    {/* Kanan form login */}
                    <div className="col-12 col-lg-4 p-5 d-flex flex-column justify-content-center align-items-center min-vh-100 position-relative"
                    style={{background: "url('Images/LoginKomponen4.png') center/cover no-repeat",}}>
                    
                        {/* Overlay blur */}
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                            backdropFilter: "blur(8px)",
                            backgroundColor: "rgba(255,255,255,0.5)",
                            }}
                        ></div>

                        <div className="w-100 position-relative" style={{ maxWidth: "400px", zIndex: 2 }}>
                            {alertFromRegister && <Alert type={alertFromRegister.type} message={alertFromRegister.message} />}

                            <img src="Images/LoginKomponen5.png" style={{ width: "300px", height: "300px" }} className="d-block d-lg-none mx-auto" alt="..."/>

                            <p className="fw-light fs-1">Selamat datang di{" "}<span className="fw-semibold" style={{ color: "rgb(54, 148, 255)" }}>PT XYZ</span></p>
                            
                            <p className="fw-semibold opacity-50 mb-3" style={{ fontSize: "12px" }}>
                                Optimalkan operasional pelayaran dengan teknologi <br />
                                pelacakan kapal yang cepat, aman, dan efisien.
                            </p>

                            <form onSubmit={handleLogin}>
                                <InputField
                                    label="username"
                                    name="username"
                                    type="text"
                                    placeholder="Masukkan username"
                                />
                            
                                <InputField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Masukkan password"
                                />

                                <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-2 p-2 shadow-sm" style={{ fontSize: "16px" }}>
                                    Masuk
                                </button>
                                <button type="button" className="btn btn-primary w-100 mt-2 rounded-2 p-2 shadow-sm" style={{ fontSize: "16px" }}>
                                    Kembali
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}
