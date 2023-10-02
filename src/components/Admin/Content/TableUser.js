import { useState } from "react";
import { getAllUsers } from "../../../services/userServices";
import { useEffect } from "react";
const TableUser = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);
  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    setListUsers(res.DT);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">No</th>
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
                <th scope="row">{index + 1}</th>
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
      </tbody>
    </table>
  );
};

export default TableUser;
