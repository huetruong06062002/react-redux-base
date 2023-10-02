import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState } from "react";
import { getAllUsers } from "../../../services/userServices";
import { useEffect } from "react";
const ManagerUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});

  const [listUsers, setListUsers] = useState([]);

  const resetDataUpdate = () => {
    setDataUpdate({});
  };

  const handleClickBtnUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnViewUser = (user) => {
    setShowModalViewUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setDataUpdate(user);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleClickBtnViewUser={handleClickBtnViewUser}
            handleClickBtnDeleteUser={handleClickBtnDeleteUser}
          />
        </div>
      </div>
      <ModalCreateUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        fetchAllUsers={fetchAllUsers}
      />
      <ModalUpdateUser
        show={showModalUpdateUser}
        setShow={setShowModalUpdateUser}
        dataUpdate={dataUpdate}
        fetchAllUsers={fetchAllUsers}
        resetDataUpdate={resetDataUpdate}
      />

      <ModalViewUser
        show={showModalViewUser}
        setShow={setShowModalViewUser}
        dataUpdate={dataUpdate}
      />

      <ModalDeleteUser
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        dataUpdate={dataUpdate}
        fetchAllUsers={fetchAllUsers}
      />
    </div>
  );
};

export default ManagerUser;
