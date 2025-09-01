export default function InputField({label, name, type="text", value, placeholder, onChange}){
    return(
        <>
            <div className="mb-3">
                {label && <label className="block mb-1">{label}</label>}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value ?? ""}
                    onChange={onChange ?? (() => {})}
                    className="form-control mb-3 rounded-2 p-2 shadow"
                    style={{ fontSize: "14px", backgroundColor: "transparent" }}
                />
            </div>
        </>
    )
}