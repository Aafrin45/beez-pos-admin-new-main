// const src = name => "image.type === 'asset' ? require('@/assets'+ image.url ) : image.url"

import PaymentMode from "./components/PaymentMode/PaymentMode";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar"/>
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const profileInfo = [
  {
    id: 1,
    field: "profile",
    headerName: "Your Profile Image",
    width: 230,
  },
  {
    id: 2,
    field: "name",
    headerName: "User Name",
    width: 230,
  },
  {
    id: 3,
    field: "emailId",
    headerName: "Email Id",
    width: 230,
  },
  {
    id: 4,
    field: "number",
    headerName: "Mobile Number",
    width: 230,
  },

  {
    id: 5,
    field: "location",
    headerName: "Location",
    width: 100,
  },
  {
    id: 6,
    field: "password",
    headerName: "Password",
    width: 100,
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const productColumns = [
  {
    field: "productId",
    headerName: "Product ID",
    type: "number",
    width: 100,
    uniqueId: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imageName} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },

  {
    field: "fmtPrice",
    headerName: "Price",
    type: "number",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    width: 180,
  },
  {
    field: "favorite",
    headerName: "Favorite",
    type: "boolean",
    width: 100,
  },
];

export const orderColumns = [
  {
    field: "billNo",
    headerName: "Bill No",
    type: "number",
    width: 100,
    uniqueId: true,
  },
  {
    field: "totalQty",
    headerName: "Total Qty",
    type: "number",
    width: 100,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    type: "number",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 230,
  },

  {
    field: "paymentMode",
    headerName: "Payment Mode",
    width: 150,
    
    renderCell: (params) => {
      return <PaymentMode type={params.row.paymentMode} />;
      
    },
  },
  
  {
    field: "paymentStatus",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <span className={`status ${params.row.paymentStatus}`}>
          {params.row.paymentStatus}
        </span>
      );
    },
  },
];

export const productRows = [
  {
    name: "Ginger Lemon Tea",
    category: "HOT-DRINKS",
    price: 20,
    description: "Ginger Lemon Tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fginger_lemon_tea_1008.jpg?alt=media&token=de275dde-3f2c-4dea-ae9d-e501928e3f39",
    productId: 1001,
    favorite: false,
  },
  {
    name: "Ban the Banana",
    category: "MILK-SHAKES",
    price: 99,
    description: "Ban The Banana is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fban_the_banana_1034.jpg?alt=media&token=3dcb7939-ea4c-4581-9c35-b3677c70698b",
    productId: 1002,
    favorite: false,
  },
  {
    name: "sukku coffee",
    category: "HOT-DRINKS",
    price: 15,
    description: "sukku coffee ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230220-134951~2.png?alt=media&token=b6707cf7-e556-4626-8810-835af599dedd",
    productId: 1003,
    favorite: false,
  },
  {
    name: "Italian Shake",
    category: "MILK-SHAKES",
    price: 99,
    description: "Italian Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Flemon_juice_1060.jpg?alt=media&token=4ceaa40e-1b1d-4c57-b9aa-13563b153ae5",
    productId: 1004,
    favorite: false,
  },
  {
    name: "Californian Shake",
    category: "MILK-SHAKES",
    price: 99,
    description: "Californian Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fcalifornian_shake_1030.jpg?alt=media&token=e9e40a47-16a0-4874-9f21-dbb1286fafe2",
    productId: 1005,
    favorite: false,
  },
  {
    name: "Veg Puff",
    category: "SNACKS",
    price: 15,
    description: "puffs",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2Fimages%20(14).jpeg?alt=media&token=224c67b6-190b-41dc-9afb-ac40b8485f9d",
    productId: 1006,
    favorite: false,
  },
  {
    name: "pop corn ",
    category: "SNACKS",
    price: 30,
    description: "pop corn ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230220-133056~2.png?alt=media&token=e35728c6-e618-4209-ac0c-1a07d3cc2ead",
    productId: 1007,
    favorite: false,
  },
  {
    name: "Rs 5",
    category: "MISC",
    price: 5,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Frs_5_1049.jpg?alt=media&token=c38203d2-f4b2-4d4d-b914-b6e0e8612bfd",
    productId: 1008,
    favorite: false,
  },
  {
    name: "5 L",
    category: "WATER-BOTTLE",
    price: 70,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2F5_l_1046.jpg?alt=media&token=caf27440-eb2c-480e-a629-f835031e0391",
    productId: 1009,
    favorite: false,
  },
  {
    name: "Rs 50",
    category: "MISC",
    price: 50,
    description: "Rs 50 ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2Fimages%20(17)~2.jpeg?alt=media&token=1546a79f-c6f0-4e6f-8eba-45a00f44f7f5",
    productId: 1010,
    favorite: false,
  },
  {
    name: "Milo",
    category: "HOT-DRINKS",
    price: 25,
    description: "Milo is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmilo_1014.jpg?alt=media&token=caeadb62-5a30-4478-9603-39fa879def71",
    productId: 1011,
    favorite: false,
  },
  {
    name: "Dum Tea",
    category: "HOT-DRINKS",
    price: 12,
    description: "Dum tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fdum_tea_1001.jpg?alt=media&token=e25ebdcf-aa19-46f1-8242-5d4c65124e44",
    productId: 1012,
    favorite: false,
  },
  {
    name: "Ginger Lemon Ice Tea",
    category: "COOLERS",
    price: 40,
    description: "Ginger Lemon Ice Tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fginger_lemon_ice_tea_1019.jpg?alt=media&token=01cdc6c9-58bd-4803-97f6-67e91b40c66f",
    productId: 1013,
    favorite: false,
  },
  {
    name: "Butter Biscuit",
    category: "SNACKS",
    price: 6,
    description: "Snacks is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fbutter_biscuit_1053.jpg?alt=media&token=53d07285-f0b6-4e01-b947-bac55f0f3e3d",
    productId: 1014,
    favorite: false,
  },
  {
    name: "Star Blast Shake",
    category: "MILK-SHAKES",
    price: 99,
    description: "Star Blast Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fstar_blast_shake_1035.jpg?alt=media&token=6f110175-84f2-4b9c-90ee-243173f8438c",
    productId: 1015,
    favorite: false,
  },
  {
    name: "Bovonto ",
    category: "MISC",
    price: 20,
    description: "Bovonto ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-131633~2.png?alt=media&token=8ea98fd5-95be-4f55-9c28-5f0c1aab2013",
    productId: 1016,
    favorite: false,
  },
  {
    name: "2 L",
    category: "WATER-BOTTLE",
    price: 30,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2F2_l_1045.jpg?alt=media&token=fb9eff85-5a51-4b6b-a383-b5d8f92ee9e5",
    productId: 1017,
    favorite: false,
  },
  {
    name: "Oreo Milk Shake",
    category: "MILK-SHAKES",
    price: 60,
    description: "Oreo Milk Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Foreo_milk_shake_1023.jpg?alt=media&token=5770c28b-0df9-4714-917a-cd88501825af",
    productId: 1018,
    favorite: false,
  },
  {
    name: "Matka Lassi",
    category: "COOLERS",
    price: 50,
    description: "Matka Lassi is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmatka_lassi_1016.jpg?alt=media&token=5e817880-ad54-4fee-9cdf-72495f297b7f",
    productId: 1019,
    favorite: false,
  },
  {
    name: "Veg Roll",
    category: "SNACKS",
    price: 17,
    description: "vag roll...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2Fimages%20(16)~2.jpeg?alt=media&token=c0915c3a-3f50-4cca-866c-e1ffe6fc9c23",
    productId: 1020,
    favorite: false,
  },
  {
    name: "Coffee",
    category: "HOT-DRINKS",
    price: 20,
    description: "Coffee is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fcoffee_1009.jpg?alt=media&token=1e5530b5-d571-455c-acf5-eb93df9857e1",
    productId: 1021,
    favorite: false,
  },
  {
    name: "Chocolate Milk Shake",
    category: "MILK-SHAKES",
    price: 60,
    description: "Chocolate Milk Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fchocolate_milk_shake_1026.jpg?alt=media&token=32f6f558-de86-4dad-8681-37a7f8b5b69c",
    productId: 1022,
    favorite: false,
  },
  {
    name: "Samosa",
    category: "SNACKS",
    price: 6,
    description: "Samosa is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fsamosa_1038.jpg?alt=media&token=b7fbee1d-5367-44a3-9c95-0a3b92179d68",
    productId: 1023,
    favorite: false,
  },
  {
    name: "Mango Milk Shake",
    category: "MILK-SHAKES",
    price: 60,
    description: "Mango Milk Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fginger_lemon_ice_tea_1019.jpg?alt=media&token=01cdc6c9-58bd-4803-97f6-67e91b40c66f",
    productId: 1024,
    favorite: false,
  },
  {
    name: "donut ",
    category: "SNACKS",
    price: 60,
    description: "Donut ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230216-131141~2.png?alt=media&token=31fce2f4-88c0-4244-8784-bf1df0b909b1",
    productId: 1025,
    favorite: false,
  },
  {
    name: "Fizi Mojito",
    category: "COOLERS",
    price: 60,
    description: "Fizi Mojito is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Ffizi_mojito_1017.jpg?alt=media&token=a7165429-51ef-4155-8983-ff6fba8bdfd5",
    productId: 1026,
    favorite: false,
  },
  {
    name: "Ginger Tea",
    category: "HOT-DRINKS",
    price: 20,
    description: "Ginger tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fginger_tea_1004.jpg?alt=media&token=b340b495-0e8f-4e82-be93-90a2338446a5",
    productId: 1027,
    favorite: false,
  },
  {
    name: "mashroom puff",
    category: "SNACKS",
    price: 20,
    description: "mashroom puff ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2Fimages%20(13).jpeg?alt=media&token=30ebd5ed-d937-4e09-b8e7-757fa0d774ec",
    productId: 1028,
    favorite: false,
  },
  {
    name: "Cutlet",
    category: "SNACKS",
    price: 15,
    description: "cutlet ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2Fimages%20(15).jpeg?alt=media&token=1a3b9ae1-072b-47e2-9191-68b35425f44e",
    productId: 1029,
    favorite: false,
  },
  {
    name: "Cold Coffee",
    category: "COOLERS",
    price: 60,
    description: "Cold Coffee is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fcold_coffee_1015.jpg?alt=media&token=c759cd09-5552-4764-a237-6adee4dd67d5",
    productId: 1030,
    favorite: false,
  },
  {
    name: "Vada Bonda",
    category: "SNACKS",
    price: 6,
    description: "Vada/Bonda is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fvada_bonda_1039.jpg?alt=media&token=e2879af2-f26b-4bc7-9ca9-d61d9d45c718",
    productId: 1031,
    favorite: false,
  },
  {
    name: "Masala Tea",
    category: "HOT-DRINKS",
    price: 20,
    description: "Masala tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmasala_tea_1005.jpg?alt=media&token=c3130a0d-e2e4-464d-b399-c7f2b4a800c6",
    productId: 1032,
    favorite: false,
  },
  {
    name: "plain bun ",
    category: "SNACKS",
    price: 7,
    description: "plain bun",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230216-130029~2.png?alt=media&token=698729db-b337-4cc5-9da6-323ca6afb3dc",
    productId: 1033,
    favorite: false,
  },
  {
    name: "black tea ",
    category: "HOT-DRINKS",
    price: 10,
    description: "Black tea ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-133822~2.png?alt=media&token=56143844-0ec9-4987-83a0-9233eb856787",
    productId: 1034,
    favorite: false,
  },
  {
    name: "Horlicks",
    category: "HOT-DRINKS",
    price: 25,
    description: "Horlicks is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fhorlicks_1013.jpg?alt=media&token=0564c59a-5cae-49f8-b7a8-310f32644968",
    productId: 1035,
    favorite: false,
  },
  {
    name: "chocolate ",
    category: "SNACKS",
    price: 60,
    description: "chocolate ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230220-133850~2.png?alt=media&token=66d4207d-ed90-4aeb-98fa-df14efbdde01",
    productId: 1036,
    favorite: false,
  },
  {
    name: "Kozhukattai",
    category: "SNACKS",
    price: 10,
    description: "Kozhukattai is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fkozhukattai_1040.jpg?alt=media&token=6094ad97-b455-45c7-bfd4-40f1c232209e",
    productId: 1037,
    favorite: false,
  },
  {
    name: "Egg Puff",
    category: "SNACKS",
    price: 17,
    description: "Egg Puff is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fegg_puff_1036.jpg?alt=media&token=237e700f-76b6-4531-bbd0-a7750534a219",
    productId: 1038,
    favorite: false,
  },
  {
    name: "Sundal",
    category: "SNACKS",
    price: 10,
    description: "Sundal is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fsundal_1041.jpg?alt=media&token=676e3f61-6969-4378-8aea-77c085c7500c",
    productId: 1039,
    favorite: false,
  },
  {
    name: "coconut bun",
    category: "SNACKS",
    price: 10,
    description: "coconut bun",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230216-130130~2.png?alt=media&token=3389919f-e3a3-4823-8f5c-ae5bb82b068b",
    productId: 1040,
    favorite: false,
  },
  {
    name: "500 ml",
    category: "WATER-BOTTLE",
    price: 10,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2F500_ml_1052.jpg?alt=media&token=9ea56481-9f15-4d5a-9ceb-8dea97828055",
    productId: 1041,
    favorite: false,
  },
  {
    name: "Mulberry Shake",
    category: "MILK-SHAKES",
    price: 99,
    description: "Mulberry Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmulberry_shake_1028.jpg?alt=media&token=8f2236e2-4ed9-41cb-a157-d46b469e840e",
    productId: 1042,
    favorite: false,
  },
  {
    name: "SLICE ",
    category: "MISC",
    price: 40,
    description: "SLICE ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-134015~2.png?alt=media&token=cea8b3b0-5ac7-4090-8d1a-01473a2e6e38",
    productId: 1043,
    favorite: false,
  },
  {
    name: "Boost",
    category: "HOT-DRINKS",
    price: 25,
    description: "Boost is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fboost_1012.jpg?alt=media&token=21a0e65a-0e6d-4fb0-bfc4-01f15f400717",
    productId: 1044,
    favorite: false,
  },
  {
    name: "Rs 2",
    category: "MISC",
    price: 2,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Frs_2_1048.jpg?alt=media&token=350cbc27-5be8-4f44-91b5-9de9b77a6ba9",
    productId: 1045,
    favorite: false,
  },
  {
    name: "Lays",
    category: "SNACKS",
    price: 50,
    description: "Lays",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-135218~2.png?alt=media&token=d5814d1b-5bbb-4d4e-ba5b-adb34f536d17",
    productId: 1046,
    favorite: false,
  },
  {
    name: "Somas",
    category: "SNACKS",
    price: 13,
    description: "Somas is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fsomas_1037.jpg?alt=media&token=0b077784-666e-40dc-88f9-d4d231882c79",
    productId: 1047,
    favorite: false,
  },
  {
    name: "Bovonto ",
    category: "MISC",
    price: 40,
    description: "Bovonto ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-131714~2.png?alt=media&token=96aa9999-2be2-4806-a733-a8b0e51c48cc",
    productId: 1048,
    favorite: false,
  },
  {
    name: "Murukku",
    category: "SNACKS",
    price: 5,
    description: "Snacks is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmurukku_1054.jpg?alt=media&token=40e3b603-3f77-48d9-bff9-f1742a084f92",
    productId: 1049,
    favorite: false,
  },
  {
    name: "cup cake ",
    category: "SNACKS",
    price: 35,
    description: "Cup cake ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230216-130959~2.png?alt=media&token=60c6d0f7-6e85-4084-ab1f-a3ba44d4dc8f",
    productId: 1050,
    favorite: false,
  },
  {
    name: "Rose Milk",
    category: "COOLERS",
    price: 50,
    description: "Rose Milk is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Frose_milk_1021.jpg?alt=media&token=5dba1236-d4dd-4a9a-9e55-597b9250ec2f",
    productId: 1051,
    favorite: false,
  },
  {
    name: "Kashmiri Chai",
    category: "HOT-DRINKS",
    price: 25,
    description: "Kashmiri Chai is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fkashmiri_chai_1007.jpg?alt=media&token=3a78ce31-3372-41fc-adf6-8688e236bec7",
    productId: 1052,
    favorite: false,
  },
  {
    name: "Water Melon",
    category: "COOLERS",
    price: 50,
    description: "Water Melon is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fwater_melon_1018.jpg?alt=media&token=61a9d4ca-0e03-40f1-9753-5812f212b0cd",
    productId: 1053,
    favorite: false,
  },
  {
    name: "Lime Mint Cooler",
    category: "COOLERS",
    price: 40,
    description: "Lime Mint Cooler is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Flime_mint_cooler_1020.jpg?alt=media&token=26b46c6c-279e-4243-94f4-b8e627d3584c",
    productId: 1054,
    favorite: false,
  },
  {
    name: "bread ",
    category: "SNACKS",
    price: 40,
    description: "bread",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230216-130502~2.png?alt=media&token=ba1209e6-b5c8-4b64-8fda-43d59fcdfe7c",
    productId: 1055,
    favorite: false,
  },
  {
    name: "black coffee ",
    category: "HOT-DRINKS",
    price: 15,
    description: "black coffee ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230220-134528~2.png?alt=media&token=249c762b-5647-4170-8145-39f8c59f0ec3",
    productId: 1056,
    favorite: false,
  },
  {
    name: "Pista Shake",
    category: "MILK-SHAKES",
    price: 99,
    description: "Pista Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fpista_shake_1029.jpg?alt=media&token=40cc2929-0632-48a2-8b83-6bb8227f29d1",
    productId: 1057,
    favorite: false,
  },
  {
    name: "Milk shake ",
    category: "MISC",
    price: 30,
    description: "Milk shake ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230220-132656~2.png?alt=media&token=9893d68d-ca61-4a21-ba1c-a863274a4644",
    productId: 1058,
    favorite: false,
  },
  {
    name: "SLICE ",
    category: "MISC",
    price: 10,
    description: "SLICE ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-134015~2.png?alt=media&token=a01a7d03-f2ea-4687-b0fd-bbe832be7c30",
    productId: 1059,
    favorite: false,
  },
  {
    name: "Bisleri soda",
    category: "MISC",
    price: 12,
    description: "Bisleri soda ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-134831~2.png?alt=media&token=29697170-a810-4def-aa0a-501ca1159841",
    productId: 1060,
    favorite: false,
  },
  {
    name: "vibro",
    category: "MISC",
    price: 20,
    description: "vibro soda ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230220-132859~2.png?alt=media&token=a492e04d-bea3-4d01-a597-8a875adfee9c",
    productId: 1061,
    favorite: false,
  },
  {
    name: "Green Tea",
    category: "HOT-DRINKS",
    price: 25,
    description: "Green tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fgreen_tea_1003.jpg?alt=media&token=1485bef0-89aa-41e2-8cda-868018e2156a",
    productId: 1062,
    favorite: false,
  },
  {
    name: "Chilled Badam Milk",
    category: "COOLERS",
    price: 50,
    description: "Chilled Badam Milk is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fchilled_badam_milk_1022.jpg?alt=media&token=ea440320-69dd-4ce5-8dc4-c7073d24dc78",
    productId: 1063,
    favorite: false,
  },
  {
    name: "chicken piff",
    category: "SNACKS",
    price: 20,
    description: "chicken puff",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2Fimages%20(14).jpeg?alt=media&token=0e0d0d5c-6cc5-4e78-969a-0c093942ad32",
    productId: 1064,
    favorite: false,
  },
  {
    name: "Misc",
    category: "MISC",
    price: 0,
    description: "Random item, price needs to be entered",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmisc_9999.jpg?alt=media&token=5f12c610-e65b-448c-851b-203a6fcee3ad",
    productId: 1065,
    favorite: false,
  },
  {
    name: "Strawberry Milk Shake",
    category: "MILK-SHAKES",
    price: 60,
    description: "Strawberry Milk Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fstrawberry_milk_shake_1027.jpg?alt=media&token=95de5821-0139-46f9-8f1d-19944a95a1c4",
    productId: 1066,
    favorite: false,
  },
  {
    name: "10-RS SNACKS",
    category: "SNACKS",
    price: 10,
    description: "Snacks is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2F10-rs_snacks_1043.jpg?alt=media&token=32f5fc0b-18c6-4c96-994e-64c96bf82764",
    productId: 1067,
    favorite: false,
  },
  {
    name: "Lemon Tea",
    category: "HOT-DRINKS",
    price: 20,
    description: "Lemon tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Flemon_tea_1006.jpg?alt=media&token=99161dbb-3abf-4aa4-bb18-d534aeea533f",
    productId: 1068,
    favorite: false,
  },
  {
    name: "Bisleri soda",
    category: "MISC",
    price: 12,
    description: "Bisleri soda ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-134831~2.png?alt=media&token=29697170-a810-4def-aa0a-501ca1159841",
    productId: 1069,
    favorite: false,
  },
  {
    name: "Royal Dates",
    category: "MILK-SHAKES",
    price: 99,
    description: "Royal Dates is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Froyal_dates_1032.jpg?alt=media&token=238527c7-6212-4550-998a-d34a6d8510d9",
    productId: 1070,
    favorite: false,
  },
  {
    name: "Rs 10",
    category: "MISC",
    price: 10,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Frs_10_1050.jpg?alt=media&token=4ed13fcc-d425-4874-aaaa-533009bc83d4",
    productId: 1071,
    favorite: false,
  },
  {
    name: "5-RS SNACKS",
    category: "SNACKS",
    price: 5,
    description: "Snacks is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2F5-rs_snacks_1042.jpg?alt=media&token=10839626-fc61-4210-8e2c-a39ee53c7062",
    productId: 1072,
    favorite: false,
  },
  {
    name: "Limonata",
    category: "MISC",
    price: 10,
    description: "Limonata ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-132042~2.png?alt=media&token=9e1c54d9-e642-4132-a826-5668ed36c5a7",
    productId: 1073,
    favorite: false,
  },
  {
    name: "Lemon Juice",
    category: "COOLERS",
    price: 30,
    description: "Lemon juice is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Flemon_juice_1060.jpg?alt=media&token=4ceaa40e-1b1d-4c57-b9aa-13563b153ae5",
    productId: 1074,
    favorite: false,
  },
  {
    name: "1 L ",
    category: "WATER-BOTTLE",
    price: 20,
    description:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2F1_l_1044.jpg?alt=media&token=0eaa84a6-15d6-4ea5-8525-8127c1466f4d",
    imageName: "1_l_1044.jpg",
    productId: 1075,
    favorite: false,
  },
  {
    name: "Kullad Tea",
    category: "HOT-DRINKS",
    price: 25,
    description: "Kullad tea is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fkullad_tea_1002.jpg?alt=media&token=56bad87c-4bc0-45cb-bac9-d73cd2e7fbc7",
    productId: 1076,
    favorite: false,
  },
  {
    name: "Badam Milk",
    category: "HOT-DRINKS",
    price: 25,
    description: "Badam Milk is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fbadam_milk_1010.jpg?alt=media&token=82ce1e9d-5d54-4a60-afef-55f2e526cf71",
    productId: 1077,
    favorite: false,
  },
  {
    name: "Cranberry Shake",
    category: "MILK-SHAKES",
    price: 99,
    description: "Cranberry Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fcranberry_shake_1033.jpg?alt=media&token=197e9b79-7131-4321-94d8-46c0c1ebca9c",
    productId: 1078,
    favorite: false,
  },
  {
    name: "Milk",
    category: "HOT-DRINKS",
    price: 15,
    description: "Milk is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fmilk_1011.jpg?alt=media&token=bebd942a-4ef8-4230-b7fa-502ca0b787d4",
    productId: 1079,
    favorite: false,
  },
  {
    name: "Vanilla Shake",
    category: "MILK-SHAKES",
    price: 60,
    description: "Vanilla Shake is made with...",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fvanilla_shake_1024.jpg?alt=media&token=9af91012-5e76-48b0-b1cf-f513e5fbc970",
    productId: 1080,
    favorite: false,
  },
  {
    name: "IMMUNITEA",
    category: "HOT-DRINKS",
    price: 25,
    description: "IMMUNITEA ",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/productImage%2FScreenshot_20230219-133409~2.png?alt=media&token=dce513d6-6320-492b-9826-f6e278997483",
    productId: 1081,
    favorite: false,
  },
  {
    name: "Nattu Sakkarai Tea",
    category: "HOT-DRINKS",
    price: 15,
    description: "Nattu sakkarai tea is made with",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Fnattu_sakkarai_tea_1059.jpg?alt=media&token=a91b711f-8428-4548-877d-ba314d63035e",
    productId: 1082,
    favorite: false,
  },
  {
    name: "Rs 1",
    category: "MISC",
    price: 1,
    description: "",
    imageName:
      "https://firebasestorage.googleapis.com/v0/b/beez-pos.appspot.com/o/products%2Frs_1_1047.jpg?alt=media&token=e46ef81d-e7c5-4e9c-aebf-b948ff2ddc85",
    productId: 1083,
    favorite: false,
  },
];
