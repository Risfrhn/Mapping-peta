export default function Carrousel({gambar}){
    return(
        <>
            <div id="carouselExampleCaptions" className="carousel slide vh-100" data-bs-ride="carousel" data-bs-wrap="true">
                <div className="carousel-inner h-100">
                    {gambar.map((src, index)=>(
                        <div
                            key={index} 
                            className={`carousel-item ${index === 0 ?  "active" : "" }`} 
                            data-bs-interval="3000">

                            <img
                                src={src}
                                className="d-block w-100 vh-100 object-fit-cover"
                                alt={`slide ${index+1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}