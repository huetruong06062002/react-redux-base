const TableUser = (props) => {
  const {
    listUsers,
    handleClickBtnUpdateUser,
    handleClickBtnViewUser,
    handleClickBtnDeleteUser,
  } = props;
  console.log(props);
  return (
    <>
      <table className="table table-striped table-hover table-bordered">
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
              console.log(index);
              return (
                <tr key={`table-user-${index}`}>
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleClickBtnViewUser(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-secondary mx-3"
                      onClick={() => handleClickBtnUpdateUser(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDeleteUser(item)}
                    >
                      Delete
                    </button>
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
    </>
  );
};

export default TableUser;
