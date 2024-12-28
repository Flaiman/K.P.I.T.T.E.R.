import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../api.jsx";
import { assets } from "../assets/assets.js";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    const navigate = useNavigate();

    // Функция для случайного распределения изображений
    const assignRandomImages = (users, images) => {
        const shuffledImages = [...images].sort(() => Math.random() - 0.5); 
        return users.map((user, index) => ({
            ...user,
            image: shuffledImages[index % shuffledImages.length], 
        }));
    };
    
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);

            const usernames = Array.from({ length: 20 }, (_, i) => `user_${i + 1}`);

            try {
                const usersData = await Promise.allSettled(
                    usernames.map((username) =>
                        getUser(username).then((response) => response.data)
                    )
                );

                const successfulUsers = usersData
                    .filter((result) => result.status === "fulfilled")
                    .map((result) => result.value);

                const usersWithImages = assignRandomImages(successfulUsers, assets.images);
                sessionStorage.setItem("users", JSON.stringify(usersWithImages));

                setUsers(usersWithImages);
                setFilteredUsers(usersWithImages);
            } catch (err) {
                setError("Failed to load the users.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredUsers(
            users.filter((user) =>
                user.username.toLowerCase().includes(term)
            )
        );
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const currentUsers = filteredUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    return (
        <div className="min-h-screen">
            <h1 className="text-3xl text-center pt-6 md:text-4xl lg:text-5xl text-amber-600 font-extrabold leading-tight md:leading-tight lg:leading-tight">
                ALL USERS
            </h1>
            <p className="text-center text-white">
            Introduce yourself
            </p>
            <div className="container mx-auto p-4">
                <div className="flex justify-center items-center mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search by username..."
                        className="p-2 border border-gray-300 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="p-2 rounded-r-md bg-gray-600 hover:bg-gray-500">
                        <img
                            src={assets.search}
                            className="w-7 cursor-pointer invert"
                            alt="Search"
                        />
                    </button>
                </div>
                {loading && (
                    <p className="text-center text-gray-600">Downloading...</p>
                )}
                {error && <p className="text-center text-red-500">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentUsers.map((user, index) => (
                <div
                    key={index}
                    className="bg-gradient-to-b from-orange-900 via-amber-700 to-red-900 shadow-lg shadow-red-900/50 rounded-2xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-500 ease-out"
                >
                    <div className="relative w-28 h-28 mb-4">
                        <img
                            src={user.image} 
                            alt={`${user.username} profile`}
                            className="w-full h-full rounded-full object-cover border-4 shadow-lg"
                        />
                    </div>
                    <h2 className="text-xl font-extrabold text-dust-yellow">
                        {user.full_name}
                    </h2>
                    <p className="text-gray-300 italic">@{user.username}</p>
                    <p className="text-gray-300 mt-3 text-sm">
                        Posts:{" "}
                        <span className="font-bold text-dust-yellow">
                            {user.posts}
                        </span>
                    </p>
                    <Link
                        to={`/users/${user.username}`}
                        className="mt-5 px-6 py-2 bg-yellow-800 hover:bg-green-700 text-gray-200 font-semibold rounded-full shadow-lg transform hover:translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
                    >
                        View User
                    </Link>
                </div>                
                    
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-8">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className={`px-4 py-2 mx-2 rounded-lg ${
                            currentPage === 1
                                ? "bg-gray-300 text-gray-500"
                                : "bg-primary text-white hover:bg-primary-dark"
                        }`}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-white">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className={`px-4 py-2 mx-2 rounded-lg ${
                            currentPage === totalPages
                                ? "bg-gray-300 text-gray-500"
                                : "bg-primary text-white hover:bg-primary-dark"
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
