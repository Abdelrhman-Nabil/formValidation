import './table.css'
const Table = ({columns,data}) => {
 
    const renderRow = (item) => (
        
        <tr className='tr' key={item.id}>
          <td className='td' >{item.fullName}</td>
          <td className='td'>{item.email}</td>
          <td className='td'>{item.gender}</td>
          <td className='td'>{item.phone}</td>
        </tr>
      );
    return (
      <table className="table1">
        <thead>
          <tr >
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tableBody">{data.map((item) => renderRow(item))}</tbody>
      </table>
    );
  };
  
  export default Table;