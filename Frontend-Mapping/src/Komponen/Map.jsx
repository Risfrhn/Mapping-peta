import {useEffect } from "react";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css"

export default function Map(){
    useEffect(() => {
        let mapInstance;
        if(!mapInstance){
            mapInstance = L.map("map").setView([51.505, -0.09], 13);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapInstance);

            const ships = [
                {id: 1, name: "Kapal a", coords:[-0.523232, 117.085750], status: "bersandar"},
                {id: 2, name: "Kapal b", coords:[-3.3, 114.6], status: "berlayar"},
                {id: 3, name: "Kapal c", coords:[1.4, 124.8], status: "berlayar"}
            ];
            
            ships.forEach((ship)=>{
                L.marker(ship.coords)
                .addTo(mapInstance)
                .bindPopup(`<b>${ship.name}</b><br/>Koordinat: ${ship.coords.join(", ")}<br/>Status kapal: ${ship.status}`);
            })
        }
        

        // 🧹 Cleanup saat komponen unmount
        return () => {
            if (mapInstance) mapInstance.remove();
        };
    }, []);




    
    // Fullscreen MAP
    const handleResizeMap = () => {
        let mapEl = document.getElementById("map");
        if (!document.fullscreenElement) {
            // masuk ke fullscreen
            if (mapEl.requestFullscreen) {
                mapEl.requestFullscreen();
            } else if (mapEl.webkitRequestFullscreen) { /* Safari */
                mapEl.webkitRequestFullscreen();
            } else if (mapEl.msRequestFullscreen) { /* IE11 */
                mapEl.msRequestFullscreen();
            }
        } else {
            // keluar dari fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }
    return(
        <div id="map" className="rounded-4 mb-3 position-relative" style={{ height:"400px", background:"#ddd"}}>
            <button id="fullscreenBtn" onClick={handleResizeMap}
                className="btn btn-primary rounded-circle position-absolute" 
                style={{ bottom: "15px", right: "15px", width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "1000" }}>
                <i className="fa-solid fa-maximize fs-5"></i>
            </button>
        </div>
    )
}