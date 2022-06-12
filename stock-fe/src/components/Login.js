import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';

const Login = () => {
  const [member, setMember] = useState({
    email: 'ashleylai58@gmail.com',
    password: 'testtest',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // 方法1: 當你的表單沒有圖片的時候，可以直接傳輸 json 到後端去
      // axios.post(URL, data, config)
      let response = await axios.post(`${API_URL}/auth/login`, member, {
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
      });
      console.log('登入成功', response.data);
    } catch (e) {
      console.error('登入失敗', e.response.data);
    }
  }
  return (
    <form className="flex flex-col h-screen px-24 py-16 text-gray-800 bg-purple-100 md:h-full md:my-20 md:mx-16 lg:mx-28 xl:mx-40 md:py-8 md:shadow md:rounded md:justify-center">
      <h2 className="flex justify-center pb-2 mb-6 text-3xl border-b-2 border-gray-300">登入帳戶</h2>
      <div className="mb-4 text-2xl">
        <label htmlFor="name" className="flex w-32 mb-2">
          Email
        </label>
        <input
          className="w-full h-10 px-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400"
          type="text"
          id="email"
          name="email"
          value={member.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-8 text-2xl">
        <label htmlFor="password" className="flex w-16 mb-2">
          密碼
        </label>
        <input
          className="w-full h-10 px-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400"
          type="password"
          id="password"
          name="password"
          value={member.password}
          onChange={handleChange}
        />
      </div>
      <button className="text-xl bg-indigo-300 px-4 py-2.5 rounded hover:bg-indigo-400 transition duration-200 ease-in" onClick={handleSubmit}>
        登入
      </button>
    </form>
  );
};

export default Login;
