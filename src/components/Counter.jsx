import React, { useEffect, useState } from "react";

function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("data:", data);
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);

  console.log(users);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        User List
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-2xl shadow-lg hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600 mt-2">{user.email}</p>

            <p className="text-sm text-gray-500 mt-1">
              {user.company?.name}
            </p>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 rounded">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;