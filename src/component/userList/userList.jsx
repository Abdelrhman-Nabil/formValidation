import Table from '../table/table';
import "./userList.css"
const UserList=({users})=>{

    const columns = [

        {
          header: "Full Name",
        },
        {
          header: "email",
          accessor: "email",
        },
        {
            header: "gender",
          },
        {
          header: "Phone",
      
        },
      ];

      return (
        <div className="frist1">
          {/* TOP */}
            <h1 className='h12'>All User</h1>
          {/* LIST */}
          <div className='fristTable'>
          <Table columns={columns}  data={users} />
          </div>
        </div>
      );
};

export default UserList