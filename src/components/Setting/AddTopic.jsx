import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APITopic } from "../../services/API/APITopic.jsx";

const AddTopic = ({UITopic,handleUITopic}) => {
  const [topicName, setTopicName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name:topicName, description:description
    }
    // Handle form submission, such as sending data to a backend or updating state
    console.log("New Topic:", data);
    const response = APITopic.APICreateTopic(data)
    console.log("🚀 ~ handleSubmit ~ response:", response)
    // Reset fields after submission
    setTopicName("");
    setDescription("");
    handleUITopic()
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Thêm chủ đề mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicName">
            Tên chủ đề
          </label>
          <input
            id="topicName"
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            placeholder="Nhập tên chủ đề"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Mô tả
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập mô tả về chủ đề"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          />
        </div>
        <div className="flex items-center justify-between">
            <button type="button"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleUITopic}>Trở lại</button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Thêm chủ đề
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTopic;
