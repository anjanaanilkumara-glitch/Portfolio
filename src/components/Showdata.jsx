import React from "react";

function Showdata({ users }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
                User List
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300 text-center"
                    >
                        {/* User Image */}
                        <img
                            src={`https://i.pravatar.cc/150?img=${user.id}`}
                            alt={user.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                        />

                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            {user.name}
                        </h2>

                        <p className="text-gray-600 mb-2">
                            📧 {user.email}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Showdata;