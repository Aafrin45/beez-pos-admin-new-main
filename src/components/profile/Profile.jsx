/*import { useRef, useState } from "react"

import './profile.scss'
import ImageUpload from "./localstorage"
const Profile=()=>{
    return(
        <div className="wrappper">
            <div className="left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
                alt="User" width='100px'/>
                <h4>Anwar</h4>
                <p>React</p>
            </div>
            <div className="right">
                <div className="info">
                    <h3>Information</h3>
                    <div className="info_data">
                        <div className="data">
                            <h4>Email</h4>
                            <p>anwar@gmail.com</p>
                        </div>
                        <div className="data">
                            <h4>Phone</h4>
                            <p>9078689679</p>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <h3>Location</h3>
                    <div className="projects_data">
                        <div className="data">
                            <h4>country:</h4>
                            <p>India</p>
                        </div>
                        <div className="data">
                            <h4>State:</h4>
                            <p>Tamil Nadu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile
import React, { useState } from "react";
export default function Profile(){
    const[ourname,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')

const handle=()=>{
    localStorage.setItem('name',ourname)
    localStorage.setItem('email',email)
    localStorage.setItem('mobile',mobile)
}
return(
    <div className="form">
        <input type="name" placeholder="Enter your name" onChange={e.target.value}/>
        <input type="email" placeholder="Enter your email" onChange={setEmail(e.target.value)}/>
        <input type="mobile" placeholder="Enter your mobile number" onChange={setMobile(e.target.value)}/>
        <button onClick={handle}>Click me</button>
        <div>
            <div>{localStorage.getItem('name')}</div>
            <div>{localStorage.getItem('email')}</div>
            <div>{localStorage.getItem('mobile')}</div>
        </div>
    </div>
)
}

const Profile=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    
    function newpic(){
        document.querySelector('#fillee').addEventListener('change',function(){
            const reader=new FileReader();
            reader.addEventListener('load',()=>{
                localStorage.setItem('recent-image',reader.result)
            })
            reader.readAsDataURL(this.files[0]);
        })
        
      
       
    }
    function saveData(){
        
        var courses=JSON.parse(localStorage.getItem('courses') || '[]')
        var course={
            name:name,
            email:email,
            mobile:mobile
        }
        courses.push(course)
        localStorage.setItem('our data',JSON.stringify(courses))
    }
   
    return(
        <div className="newtext">
            <div className="new-admin">
                
                <br></br>
                <h3>Profile Page</h3>
                <br></br><br></br><br></br>
            <input type="text" id="textbox1" className="textbox1" placeholder="Enter your name" width={'100%'} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br></br><br></br><br></br>
            <input type="text" placeholder="Enter your email" className="textbox1" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br><br></br><br></br>
            <input type="text" placeholder="Enter your mobile number" className="textbox1" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
            <br></br><br></br><br></br>
            <button onClick={saveData}>Save data</button>
            <input type="file" id="fillee"/>
            </div>
            
            </div>
        
        
    )
}
export default Profile
/*function save(){
    var new_data=document.getElementById('input').value;
    if(localStorage.getItem('data')==null){
        localStorage.getItem('data','[]')
    }
    var old_data=JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    localStorage.setItem('data',JSON.stringify(old_data));
}

const Profile=()=>{
    return(
        <div>
            <input type="text" placeholder=""/>
            <button onClick={save()}>save</button>
        </div>
    )
}
export default Profile
/*function Profile(){
    const data=useRef()
    const handleClick=()=>{
        console.log(data.current.value,'initial value')
        localStorage.setItem('inputValue',data.current.value)
    }
    console.log(localStorage.getItem('inputValue'),'*****')
    return(
        <div>
            <input ref={data}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default Profile*/
import { base64 } from "@firebase/util";
import React, { useState } from "react";

const Profile = () => {
  const profilePIcDefault =
    "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState(profilePIcDefault);
  const [gender, setGender] = useState("");
  const [checked, setChecked] = useState(false);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("file Store", base64);
    });
  };
  function click() {
    <img
      src={
        localStorage.getItem("img")
          ? localStorage.getItem("img")
          : profilePIcDefault
      }
      alt="proffile_pic"
      className="img-thumbnail"
      height={200}
      width={200}
    />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    //localStorage.setItem('img',img)
    localStorage.setItem("gender", gender);
    // localStorage.setItem('terms',checked)
  };
  return (
    <div>
      <div className="prof">
        <h5>Change Profile</h5>
        <br></br>
        <div className="row">
          <div className="col">
            <div className="mb">
              <br></br>
              <label htmlFor="exampleInputName" className="form-label1">
                UserName
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control7"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
              <div>
                <br></br>
                <br></br>
                <br></br>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label2">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control2"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword" className="form-label3">
                    Password
                  </label>
                  <input
                    type="Password"
                    value={password}
                    className="form-control3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex">
                  <label className="form-check-label">Gender:</label>
                  <div className="form-check1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Gender"
                      value="Male"
                      defaultChecked={gender === "Male"}
                      onClick={(e) => setGender(e.target.value)}
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label7"
                      htmlFor="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check2">
                    <input
                      className="form-check-input8"
                      type="radio"
                      name="Gender"
                      value="Female"
                      defaultChecked={gender === "Female"}
                      onClick={(e) => setGender(e.target.value)}
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label8"
                      htmlFor="flexRadioDefault2"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-check-submit">
                  <br></br>
                </div>
                <button
                  type="submit"
                  className="form-submit-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div className="col-md-4">
                <div className="profile-section">
                  <p>select profile picture</p>
                  <br></br>
                  <img
                    src={profilePIcDefault}
                    alt="proffile_pic"
                    className="img-thumbnail1"
                    height={250}
                    width={250}
                  />
                  <br></br>
                  <div className="mb">
                    <label htmlFor="formFile" className="form-label"></label>
                    <br></br>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleImg}
                      id="formFile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
