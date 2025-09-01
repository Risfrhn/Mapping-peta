import Carrousel from "../Komponen/Carrousel";
import InputField from "../Komponen/InputField";
import OptionField from "../Komponen/OptionField";
import Alert from "../Komponen/Alert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



export default function Register() {
    const [Form, setForm] = useState({
        nama:"",
        username:"",
        password:"",
        role:""
    });
    const [alert, setAlert]=useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({...Form, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3000/API/DaftarXYZ", Form);
            navigate("/Login", {state:{alert:{type:"success", message:"Berhasil Membuat akun"}}});
        }catch (err){
            setAlert({type:"error", message:"Gagal membuat akun"});
        }
    }
  return (
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
                    <img src="Images/LoginKomponen5.png" style={{ width: "300px", height: "300px" }} className="d-block d-lg-none mx-auto" alt="..."/>

                    <p className="fw-light fs-1">Selamat datang di{" "}<span className="fw-semibold" style={{ color: "rgb(54, 148, 255)" }}>PT XYZ</span></p>
                    
                    <p className="fw-semibold opacity-50 mb-3" style={{ fontSize: "12px" }}>
                        Optimalkan operasional pelayaran dengan teknologi pelacakan kapal yang cepat, aman, dan efisien.
                    </p>

                    {alert && <Alert type={alert.type} message={alert.message} onClose={()=>setAlert(null)}></Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <InputField
                                    label="Nama lengkap"
                                    name="nama"
                                    type="text"
                                    placeholder="Masukkan nama lengkap"
                                    value={Form.nama}
                                    onChange={handleChange}
                                />

                                <InputField
                                    label="username"
                                    name="username"
                                    type="text"
                                    placeholder="Masukkan username"
                                    value={Form.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <OptionField 
                                    label="Silahkan pilih role"
                                    name="role"
                                    option={[
                                        {value:"Admin", label:"Admin"},
                                        {value:"Worker", label:"Worker"}
                                    ]}
                                    value={Form.role}
                                    onChange={handleChange}
                                />

                                <InputField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Masukkan password"
                                    value={Form.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-2 p-2 shadow-sm" style={{fontSize: "16px"}}>Masuk</button>
                            <button type="button" className="btn btn-primary w-100 mt-2 rounded-2 p-2 shadow-sm" style={{fontSize: "16px"}}>Kembali</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

