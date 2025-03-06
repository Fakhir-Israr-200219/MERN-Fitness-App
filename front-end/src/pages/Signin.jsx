import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";  // Import Axios
import logo from "../assets/logo_black.png";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: null,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file input separately
    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePic: e.target.files[0] });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("userName", formData.username);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        if (formData.profilePic) {
            formDataToSend.append("profile_image", formData.profilePic);
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:5000/user/register", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("User registered:", response.data);
            // alert("Registration Successful!");
            navigate("/login");
        } catch (err) {
            console.error("Registration failed:", err);
            setError(err.response?.data?.message || "Something went wrong");
            alert("Failed to register. Try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signin flex flex-col justify-center items-center">
            <div className="logo h-[289px]">
                <img src={logo} alt="Logo" />
            </div>

            <form onSubmit={handleSubmit} className="form w-[90vw] m-auto flex flex-col justify-center items-center">
                <div className="w-full max-w-sm my-4">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter User Name"
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div className="w-full max-w-sm my-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div className="w-full max-w-sm my-4">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div className="w-full max-w-sm my-4">
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div className="w-full max-w-sm my-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <p className="p-2 m-2">
                    Go to <Link to="/login" className="text-[#ed563b]">Log In</Link>
                </p>

                <button
                    type="submit"
                    className="mt-2 min-w-[200px] py-2.5 px-5 text-sm font-medium text-black bg-[#ed563b] rounded-lg hover:bg-black hover:text-[#ed563b]"
                    disabled={isLoading}
                >
                    {isLoading ? "Registering..." : "Register"}
                </button>

                {error && <p className="text-red-500 mt-2">Error: {error}</p>}
            </form>
        </div>
    );
};

export default Signin;
