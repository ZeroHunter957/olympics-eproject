import React from "react";
import "./Login.css";
import { useState } from "react";

function Login() {
  //tạo Errors, setErrors bằng cách dùng useState và xét giá trị bằng rỗng
  const [Errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  //Tạo formDate để chứa giá trị các ô username, email, password khi người dùng nhập dl
  //Ban đầu các ô username, email, password có giá trị rỗng
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const hamChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function validate() {
    let isValid = true;
    var FormErrors = { ...Errors };
    //dùng if kiểm tra nếu ô username bằng rỗng thì gắn cho FormErrors.username thông báo
    if (formData.username.trim() === "") {
      FormErrors.username = "Username is required";
      isValid = false; //ct ngừng chạy và hiện thị lỗi
    } else {
      FormErrors.username = "";
    }
    //dùng if kiểm tra nếu ở email bằng rỗng thì gắn cho FormErrors.email thông báo
    if (formData.email.trim() === "") {
      FormErrors.email = "Email is required";
      isValid = false;
    } else {
      FormErrors.email = "";
    }
    //password
    if (formData.password.trim() === "") {
      FormErrors.password = "Password is required";
      isValid = false;
    } else {
      FormErrors.password = "";
    }

    setErrors(FormErrors);
    return isValid;
  }
  function hamSubmit(e) {
    e.preventDefault();
    if (validate()) {
      alert("Ok");
    }
  }
  return (
    <div className="q-a">
      <div className="quan-login">
        <h2>Sign In</h2>
        <form onSubmit={hamSubmit}>
          <div>
            <label>Username:</label>
            <input
              className="q-user"
              type="text"
              name="username"
              onChange={hamChange}
            />
            <div className="error">{Errors.username}</div>
          </div>
          <div>
            <label>Email:</label>
            <input
              className="q-email"
              type="text"
              name="email"
              onChange={hamChange}
            />
            <div className="error">{Errors.email}</div>
          </div>
          <div>
            <label>Password:</label>
            <input
              className="q-pw"
              type="text"
              name="password"
              onChange={hamChange}
            />
            <div className="error">{Errors.password}</div>
          </div>
          <button type="submit" className="q-button">
            Submit
          </button>
          <button type="reset" className="q-button">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
