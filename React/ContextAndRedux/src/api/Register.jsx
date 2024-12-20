import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

// Styled wrapper component for encapsulation
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    position: relative;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::after {
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin a {
    color: royalblue;
    text-decoration: none;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    gap: 10px;
  }

  .form label {
    position: relative;
  }

  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
  }

  .form label span {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: grey;
    pointer-events: none;
    transition: 0.2s;
  }

  .input:focus + span,
  .input:not(:placeholder-shown) + span {
    top: 5px;
    font-size: 12px;
    color: royalblue;
  }

  .submit {
    background-color: royalblue;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;
const URL=import.meta.env.VITE_ADMINS_URL;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    console.log("Submitting...", data);
    try {
      const response = await axios.post(URL, data);
      console.log(response);
      if (response.status === 201) {
        toast.success("registered succesfully!")
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      else {
        // alert("unable to register!");
        toast.error("unable to register!")
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit(submitHandler)} >
        <p className="title">Register</p>
        <p className="message">
          Signup now and get full access to our app.
        </p>

        <div className="flex">
          <label>
            <input placeholder="" type="text" className="input" {...register("fname", { required: "pls fill this field" })} />
            <span>Firstname</span>
          </label>

          <label>
            <input placeholder="" type="text" className="input" {...register("lname", { required: "pls fill this field" })} />
            <span>Lastname</span>
          </label>
        </div>
        <div className="grid grid-cols-2 px-5">
          <span>
            {errors.fname && <span style={{ color: "red" }}>{errors.fname?.message}</span>}
          </span>
          <span>
            {errors.lname && <span style={{ color: "red" }}>{errors.lname?.message}</span>}
          </span>
        </div>

        <label>
          <input placeholder="" type="email" className="input" {...register("email", { required: "pls fill this field" })} />
          <span>Email</span>
        </label>
        {errors.email && <span style={{ color: "red" }}>{errors.email?.message}</span>}

        <label>
          <input placeholder="" type="password" className="input" {...register("password", { required: "pls fill this field" })} />
          <span>Password</span>
        </label>
        {errors.password && <span style={{ color: "red" }}>{errors.password?.message}</span>}
        <label>
          <input placeholder="" type="password" className="input" {...register("cpassword", { required: "pls fill this field" })} />
          <span>Confirm Password</span>
        </label>
        {errors.cpassword && <span style={{ color: "red" }}>{errors.cpassword?.message}</span>}
        <button type="submit" className="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account? <Link to={"/login"}>Signin</Link>
        </p>
      </form>
      <ToastContainer />
    </StyledWrapper>
  );
};

export default Register;
