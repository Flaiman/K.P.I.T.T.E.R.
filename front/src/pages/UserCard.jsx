import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, getPosts } from "../api.jsx";

const UserCard = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [totalLikes, setTotalLikes] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            setError(null);

            try {
                const savedUsers = JSON.parse(sessionStorage.getItem("users")) || [];
                const foundUser = savedUsers.find((u) => u.username === username);
                if (!foundUser) {
                    throw new Error("User not found in local storage.");
                }
                setUser(foundUser);
                const postsResponse = await getPosts(username);
                const likesSum = postsResponse.data.reduce((sum, post) => sum + post.likes, 0);
                setTotalLikes(likesSum);
            } catch (err) {
                setError("Failed to fetch user details.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    const handleViewPosts = () => {
        navigate(`/users/${username}/posts`);
    };

    if (loading) {
        return <p className="text-center text-gray-600">Loading user details...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!user) {
        return <p className="text-center text-gray-600">User not found.</p>;
    }

    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-green-900 to-black">
        <div className="relative flex flex-col md:flex-row rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden">
            {/* Left side - User Details */}
            <div className="md:w-1/2 bg-gradient-to-br from-gray-700 to-green-800 p-8 flex flex-col items-center justify-center text-white">
                <div className="relative mb-6 w-18 h-18">
                    <img
                        src={user.image}
                        alt={`${user.username} profile`}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
                    {user.full_name}
                </h1>
                <p className="text-sm sm:text-lg font-light italic mt-1">@{user.username}</p>
                <button
                    onClick={handleViewPosts}
                    className="mt-6 px-8 py-3 bg-yellow-500 text-gray-800 font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-400"
                >
                    View Posts
                </button>
            </div>

            {/* Right side - Statistics */}
            <div className="md:w-1/2 p-8 flex flex-row items-center justify-center space-x-20 bg-gradient-to-br from-green-800 to-black text-white">
                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-40 h-40 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-4xl sm:text-6xl font-extrabold text-gray-800">
                            {user.posts}
                        </span> 
                    </div>
                    <p className="mt-3 text-lg font-medium">Total Posts</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-4xl sm:text-5xl font-extrabold text-gray-800">
                            {totalLikes}
                        </span>
                    </div>
                    <p className="mt-3 text-lg font-medium">Total Likes</p>
                </div>
            </div>
        </div>
    </div>

    );
};

export default UserCard;
