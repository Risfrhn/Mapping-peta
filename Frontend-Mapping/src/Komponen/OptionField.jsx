export default function OptionField({label, name, option=[], value, placeholder="Silahkan pilih", onChange}){
    return(
        <>
            <div className="mb-3">
                {label && <label className="block mb-1">{label}</label>}
                <select 
                    name={name} 
                    className="form-select mb-3 rounded-3 p-2 shadow" 
                    style={{fontSize:"12px", backgroundColor: "transparent"}} 
                    value={value}
                    onChange={onChange}>
                    <option value="">{placeholder}</option>
                    {option.map(opt =>(
                        <option key={opt.value} value={opt.value}>{opt.label}</option>    
                    ))}
                </select>
            </div>
        </>
    )
}