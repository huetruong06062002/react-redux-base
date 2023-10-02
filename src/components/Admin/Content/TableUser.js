const TableUser = (props) => {
  const { listUsers } = props;
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            console.log(item);
            return (
              <tr key={`table-user-${index}`}>
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  {" "}
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-danger mx-3">Delete</button>
                  <button className="btn btn-secondary">Update</button>
                </td>
              </tr>
            );
          })}

        {listUsers && listUsers.length === 0 && (
          <tr>
            <td colSpan={4}>Not found data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableUser;
