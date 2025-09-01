export default function Table({columns = [], data = [], buttonAction = []}){
    return(
        <table className="table table-hover align-middle mb-0">
        <thead>
            <tr>
                {columns.map((col, index)=>(
                    <th key={index}>{col}</th>    
                ))}
                {buttonAction && <th>aksi</th>}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex)=>(
                <tr key={rowIndex}>
                    {row.map((cell, colIndex)=>(
                        <td key={colIndex}>{cell}</td>  
                    ))}
                    {buttonAction && (
                        <td>{buttonAction(row)}</td>
                    )} 
                </tr>   
            ))}
        </tbody>
    </table>
    )
}