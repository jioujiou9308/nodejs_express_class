import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';

const Register = () => {
  const [member, setMember] = useState({
    email: 'ashleylai58@gmail.com',
    name: 'ashley',
    password: 'testtest',
    confirmPassword: 'testtest',
    photo: '',
  });

  function handleChange(e) {
    // member.email = e.target.value;  (x)
    // 在 react 不可以直接去修改原本的 state 記憶體，
    // 要做一塊新的記憶體，並透過 setXXX 去修改
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  //圖片的質需要改變
  function handlePhoto(e) {
    console.log(e.target.files[0]);
    setMember({ ...member, photo: e.target.files[0] });
  }
  async function handleSubmit(e) {
    // 停掉預設行為
    console.log('handlesubmit');
    e.preventDefault();
    try {
      // axios.get(URL, params)
      // axios.post(URL, data, params)

      // 方法1: 當你的表單沒有圖片的時候，可以直接傳輸 json 到後端去
      // let response = await axios.post(`${API_URL}/auth/register`, member);
      // console.log(response.data);

      //方法2: 如果表單有圖片，會用 FormData 的方式來上傳
      let formData = new FormData();
      formData.append('email', member.email);
      formData.append('name', member.name);
      formData.append('password', member.password);
      formData.append('confirmPassword', member.confirmPassword);
      formData.append('photo', member.photo);
      let response = axios.post(`${API_URL}/auth/register`, formData);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form className="flex flex-col h-screen px-24 py-16 text-gray-800 bg-purple-100 md:h-full md:my-20 md:mx-16 lg:mx-28 xl:mx-40 md:py-8 md:shadow md:rounded md:justify-center">
      <h2 className="flex justify-center pb-2 mb-6 text-3xl border-b-2 border-gray-300">註冊帳戶</h2>
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
      <div className="mb-4 text-2xl">
        <label htmlFor="name" className="flex w-32 mb-2">
          姓名
        </label>
        <input
          className="w-full h-10 px-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400"
          type="text"
          id="name"
          name="name"
          value={member.name}
          onChange={handleChange}
        />
      123
      </div>
      <div className="mb-4 text-2xl">
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
      <div className="mb-8 text-2xl">
        <label htmlFor="password" className="flex w-32 mb-2">
          確認密碼
        </label>
        <input
          className="w-full h-10 px-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={member.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="mb-8 text-2xl">
        <label htmlFor="photo" className="flex w-32 mb-2">
          圖片
        </label>
        <input
          className="w-full h-10 px-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400"
          type="file"
          id="photo"
          name="photo"
          onChange={handlePhoto}
        />
      </div>
      <button className="text-xl bg-indigo-300 px-4 py-2.5 rounded hover:bg-indigo-400 transition duration-200 ease-in" onClick={handleSubmit}>
        註冊
      </button>
    </form>
  );
};

export default Register;
