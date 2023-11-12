import "./profile.scss";

/*const ImageUpload=()=>{
    const fileE1=document.getElementById("file-el");
    const btn=document.getElementById('btn');
    btn.addEventListener('change',()=>{
        const fr=new FileReader();
        fr.readAsDataURL(fileE1.files[0]);
        fr.addEventListener('load',()=>{
            const url=fr.result;
            console.log(url);
        })
    })
    const[image,setImage]=useState('')
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    function handleApi(){
        const formData=new FormData()
        formData.append('image',image)
        axios
}
    return(
        <div>
            <input type='file' name="file" onChange={handleImage}/>
            <button onClick={handleApi}>Submit</button>
        </div>
    )
}
export default ImageUpload
const[file,setFile]=useState()
function handleFile(event){
    setFile(event.target.files[0])
   // console.log(event.target.file[0])
}
function handleUpload(){
    const formData=new FormData()
    formData.append('file',file)
    fetch(
        'url',
        {
            maethod:"POST",
            body:formData
        }
    ).then((response)=>response.json()).then(
        (result)=>{
            console.log('success',result)
        }
       
    )
}
return(
    <div>
        <form onSubmit={handleUpload}>
            <input type="file" name='file' onChange={handleFile}/>
            <button>Upload</button>
        </form>
    </div>
)
}
export default ImageUpload
const[image,setImage]=useState(null);
const[url,setUrl]=useState(null);
const handleImageChange=(e)=>{
    if(e.target.files[0]){
        setImage(e.target.files[0]);
    }
}
const handleSubmit=()=>{
   
    
}
return(
    <div>
        <Avatar  alt="remy sharp"
        src={"/static/images/avatar/1.jpg"}
        sx={{width:150,height:150}}/>
        <input type='file' onChange={handleImageChange}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
const inputRef=useRef(null);
const handleImageClick=()=>{
    inputRef.current.click();
}
return(
    <div 
)
}
export default ImageUpload
   const inputRef=useRef(null);
    const[image,setImage]=useState('')
const handleImageClick=()=>{
    inputRef.current.click();
}
const handleImageChange=(event)=>{
    
    const file=event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
    
}

return(
    <>
    <div className="image-upload-container">
        <div className="box-decoration">
        <Navbar onChange={handleImageChange}/>
            <label htmlFor="image-upload-input" className="image-upload-label">
            </label>
        <div onClick={handleImageClick}>
        
        {image ?
        (<img src={URL.createObjectURL(image)} alt=""/>
        ):(
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdgjJ7O865uwcYhVaRLDYIxfM5DWTotFivx6e79E&s" alt=""/>
        )}
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>
             </div>
        <button className="image-upload-button" onClick={Navbar.handleImageChange}>Upload</button>
    
        </div>
    </div>
    </>
)
}
export default ImageUpload
return(
    <div>
        <input type="file" id="file-el"/>
        <button id="btn"></button>
       
           
        
    </div>
)
}
export default ImageUpload*/
import React from "react";

const Update = () => {
  const profilePIcDefault =
    "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg";

  return (
    <div>
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3"></h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={profilePIcDefault}
                  alt="proffile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
