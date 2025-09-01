export default function Alert({type="info", message, onClose}){
    const colors={
        success: "bg-green-100 text-green-800",
        error: "bg-red-100 text-red-800",
        info: "bg-blue-100 text-blue-800",
    }
    const icons={

    }
    return(
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className={`max-w-sm w-full p-6 rounded shadow-lg text-center ${colors[type]}`}>
                    {/* Icon */}
                    {icons[type]}
                    
                    {/* Message */}
                    <p className="mt-4 text-lg font-medium">{message}</p>
                    
                    {/* Close button */}
                    <button
                    onClick={() => { setShow(false); onClose && onClose(); }}
                    className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
                    >
                    Close
                    </button>
                </div>
            </div>
        </>
    )
}