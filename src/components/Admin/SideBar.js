import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.scss";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { GiFluffyWing, GiLibertyWing } from "react-icons/gi";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  const navigate = useNavigate();
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {collapsed ? (
              <TbLayoutSidebarLeftExpand size={"3em"} color={"fff"} />
            ) : (
              <>
                <GiFluffyWing size={"3em"} color={"00bfff"} />
                <p onClick={()=> {navigate('/')}} style={{cursor:"pointer"}}>Side Bar</p>
                <GiLibertyWing size={"3em"} color={"00bfff"} />
              </>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">New</span>}
            >
              Dashboard
              <Link to="/admins" />
            </MenuItem>
            <MenuItem icon={<FaGem />}> components </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              title="Features"
              suffix={<span className="badge yellow">3</span>}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>
                Quản lí Users
                <Link to="/admins/manage-users" />
              </MenuItem>
              <MenuItem>
                Quản lí Bài Quiz
                <Link to="/admins/manage-quizzes" />
              </MenuItem>
              <MenuItem> 
                Quản lí Câu Hỏi 
                <Link to="/admins/manage-questions" />
               </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                &#169;Chân footer
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
