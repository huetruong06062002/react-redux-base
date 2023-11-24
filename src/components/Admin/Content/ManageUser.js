import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState } from "react";
import {
  getAllUsers,
  getAllUsersWithPaginate,
} from "../../../services/userServices";
import { useEffect } from "react";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUser = (props) => {
  const LIMIT_USER = 5;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
    // fetchAllUsers();
    fetchAllUsersWithPaginate(1);
  }, []);

  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchAllUsersWithPaginate = async (page) => {
    let res = await getAllUsersWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
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
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleClickBtnViewUser={handleClickBtnViewUser}
            handleClickBtnDeleteUser={handleClickBtnDeleteUser}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleClickBtnViewUser={handleClickBtnViewUser}
            handleClickBtnDeleteUser={handleClickBtnDeleteUser}
            fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <ModalCreateUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        fetchAllUsers={fetchAllUsers}
        fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalUpdateUser
        show={showModalUpdateUser}
        setShow={setShowModalUpdateUser}
        dataUpdate={dataUpdate}
        fetchAllUsers={fetchAllUsers}
        resetDataUpdate={resetDataUpdate}
        currentPage={currentPage}
        fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
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
        fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ManagerUser;
