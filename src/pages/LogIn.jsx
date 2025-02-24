import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../api/userService";
const LogIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await checkUser(data);
            const user = response.data;

            if (user) {
                console.log("Login successful:", user);
                navigate("/home");
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Failed to log in. Please try again.");
        }
    };


    return (
        <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input type="text" {...register("username", { required: "Username is required" })} />
                    <p style={{ color: "red" }}>{errors.username?.message}</p>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
                    <p style={{ color: "red" }}>{errors.password?.message}</p>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LogIn;
