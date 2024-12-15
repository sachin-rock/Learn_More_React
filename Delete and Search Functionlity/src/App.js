import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [serach, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const api = " https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      setData(response.data);
      setFilterData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchData = data.filter((user) =>
      user.name.toLowerCase().includes(serach.toLowerCase())
    );
    setFilterData(searchData);
  }, [data, serach]);

  console.log(data);

  const handleSerach = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const Delete = data.filter((item) => id !== item.id);
    setData(Delete);
    setFilterData(Delete);
  };

  return (
    <div>
      <input
        type="text"
        value={serach}
        placeholder="serach by name ....."
        onChange={handleSerach}
        className="border border-black p-2"
      />
      <table>
        <thead>
          <th className="border border-black p-2">id</th>
          <th className="border border-black p-2">userName</th>
          <th className="border border-black p-2">Email</th>
          <th className="border border-black p-2">Delete</th>
        </thead>
        <tbody>
          {filterData.map((item) => (
            <tr key={item.id}>
              <td className="border border-black p-2">{item.id}</td>
              <td className="border border-black p-2">{item.name}</td>
              <td className="border border-black p-2">{item.email}</td>
              <td className="border border-black p-2">
                <button
                  className="border border-black p-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
