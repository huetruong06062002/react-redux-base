import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManagerUser = (props) => {
  return (
    <div className="manager-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
      </div>
      <ModalCreateUser />
    </div>
  );
};

export default ManagerUser;
