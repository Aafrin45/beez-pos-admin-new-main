// import './users.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import {
  // productColumns,
  // productRows,
  userColumns,
  userRows,
} from "../../datatablesource";

const Users = ({ page }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable title={"Users"} cols={userColumns} rows={userRows} addEdit />
      </div>
    </div>
  );
};

export default Users;
