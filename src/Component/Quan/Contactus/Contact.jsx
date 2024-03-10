import React, { useState } from "react";
import "./Contact.css";

function Contact(props) {
  const [Errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  //Tạo formDate để chứa giá trị các ô username, email, message khi người dùng nhập dl
  //Ban đầu các ô username, email, message có giá trị rỗng
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
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
    // phone
    if (formData.phone.trim() === "") {
      FormErrors.phone = "Phone is required";
      isValid = false;
    } else {
      FormErrors.phone = "";
    }
    //message
    if (formData.message.trim() === "") {
      FormErrors.message = "Message is required";
      isValid = false;
    } else {
      FormErrors.message = "";
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
    <div className="contact">
      <h2>CONTACT US </h2>
      <div className="contact-box">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391569.0099647078!2d116.06782001604583!3d39.9384170513371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2s!4v1709988051046!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-right">
          <form onSubmit={hamSubmit}>
            <div>
              <label>Username</label>
              <input type="text" name="username" onChange={hamChange} />
              <div className="error">{Errors.username}</div>
            </div>
            <div>
              <label>Email</label>
              <input type="text" name="email" onChange={hamChange} />
              <div className="error">{Errors.email}</div>
            </div>
            <div>
              <label>Phone</label>
              <input type="text" name="phone" onChange={hamChange} />
              <div className="error">{Errors.phone}</div>
            </div>
            <div>
              <label>Message</label>
              <textarea
                type="text"
                className="message"
                onChange={hamChange}
                rows={7}
              />
              <div className="error">{Errors.message}</div>
            </div>
            <div className="nut">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
