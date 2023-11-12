import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { productColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import { bulkUploadProducts, buldDeleteProducts } from "../../dataloader";
import ProductService from "../../database/ProductService";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  AddCircleOutlined,
  EditOffOutlined,
  EditOutlined,
} from "@mui/icons-material"; 

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const [showAddEdit, setShowAddEdit] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClick = (id) => {
    navigate("/products/new");
  };

  useEffect(() => {
    const unsubscribe = ProductService.getAllProducts().then((products) => {
      const fmtProducts = products.docs.map((row) => ({
        ...row.data(),
        id: row.id,
        fmtPrice: `₹ ${row.data().price}`,
      }));
      setData(fmtProducts);
    });
    return unsubscribe;
  }, []);

  const handleUpload = async () => {
    await buldDeleteProducts();
    await bulkUploadProducts();
    setToggle(true);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    ProductService.deleteProduct(id);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/products/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">
                <EditOutlined />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlineOutlinedIcon />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Products
            <button
              onClick={handleClick}
              to="/products/new"
              className=" text-center items-center rounded-2xl mx-4 w-40 h-11 text-cyan-50 text-base ml-6950 border-2  bg-slate-500 "
            >
              Add New <AddCircleOutlined />
            </button>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={productColumns.concat(actionColumn)}
            pageSize={12}
            rowsPerPageOptions={[12]}
            rowCount={data.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
