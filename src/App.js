import Login from './page/Login/Login';
import NavigationBar from './component/NavigationBar/NavigationBar';
import Home from './page/Home/Home';
import Cart from './page/Cart/Cart';

import {Route, BrowserRouter, Routes} from 'react-router-dom';
import User from './page/User/User';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import UserList from './page/UserList/UserList';
import Register from './page/Register/Register';
import axios from 'axios';
import ErrorPage from './page/ErrorPage/ErrorPage';

function App() {
    //thông tin mà người dùng đã đăng nhập
    const [user, setUser] = useState({"id": 1, "username":"huy123", "FName": "Le", "MName": "Anh", "LName": "Huy", "BDate": "2002-09-07", "Email": "huy123@gmail.com", "Gender": "Male", "Age": 20});
    /*React.useEffect(() => {
      axios.get('/info', {}, {headers: {token: localStorage.getItem("token")}})
      .then(function (response) {
        //console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);*/

    const [foods, setFoods] = useState([
      {"Res_id": 1, "F_id": 1, "Type_ID": 3, "Fname": "com suon bi", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 1, "F_id": 2, "Type_ID": 4, "Fname": "com suon bi trung", "Unit_price": 35000, "Description": "1 suon+bi+trung", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 2, "F_id": 3, "Type_ID": 2, "Fname": "com suon bi cha", "Unit_price": 35000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 2, "F_id": 4, "Type_ID": 1, "Fname": "bun them", "Unit_price": 5000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 3, "F_id": 5, "Type_ID": 4, "Fname": "tra sua bac ha", "Unit_price": 20000, "Description": "1 suon+bi", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 4, "F_id": 6, "Type_ID": 3, "Fname": "tra sua truyen thong", "Unit_price": 25000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 5, "F_id": 7, "Type_ID": 2, "Fname": "tra sua olong", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
    ]);
    /*React.useEffect(() => {
      axios.get('/foods')
      .then(function (response) {
        setFoods(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);*/
    const [combos, setCombos] = useState([
      {"Cb_id": 1, "Cb_name": "Combo 1", "Cost": 30000, "Description": "1 suon+bi", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
      {"Cb_id": 2, "Cb_name": "com suon bi trung", "Cost": 35000, "Description": "1 suon+bi+trung", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
      {"Cb_id": 3, "Cb_name": "com suon bi cha", "Cost": 35000, "Description": "1 suon+bi", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
      {"Cb_id": 4, "Cb_name": "bun them", "Cost": 5000, "Description": "1 suon+bi", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
      {"Cb_id": 5, "Cb_name": "tra sua bac ha", "Cost": 20000, "Description": "1 suon+bi", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
      {"Cb_id": 6, "Cb_name": "tra sua truyen thong", "Cost": 25000, "Description": "1 suon+bi", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
      {"Cb_id": 7, "Cb_name": "tra sua olong", "Cost": 30000, "Description": "1 suon+bi", "Status": 1, "PictureURL": "https://cdn.cet.edu.vn/wp-content/uploads/2018/01/combo-la-gi.jpg"},
    ]);
    /*React.useEffect(() => {
      axios.get('/combos')
      .then(function (response) {
        setCombos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);*/
    const [cart, setCart] = useState([
      {"Res_id": 1, "F_id": 1, "Type_ID": 3, "Fname": "com suon bi", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 4},
      {"Res_id": 1, "F_id": 2, "Type_ID": 4, "Fname": "com suon bi trung", "Unit_price": 35000, "Description": "1 suon+bi+trung", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 5},
      {"Res_id": 2, "F_id": 3, "Type_ID": 2, "Fname": "com suon bi cha", "Unit_price": 35000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 7},
      {"Res_id": 2, "F_id": 4, "Type_ID": 1, "Fname": "bun them", "Unit_price": 5000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 8},
      {"Res_id": 3, "F_id": 5, "Type_ID": 4, "Fname": "tra sua bac ha", "Unit_price": 20000, "Description": "1 suon+bi", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 10},
      {"Res_id": 4, "F_id": 6, "Type_ID": 3, "Fname": "tra sua truyen thong", "Unit_price": 25000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 2},
      {"Res_id": 5, "F_id": 7, "Type_ID": 2, "Fname": "tra sua olong", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png", "quantity": 3},
    ]);
    /*React.useEffect(() => {
      axios.get('/cart')
      .then(function (response) {
        setFoods(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);*/

    const [users, setUsers] = useState([
      {"Cus_id": 1, "username":"huy123", "FName": "Le", "MName": "Anh", "LName": "Huy", "BDate": "2002-09-07", "Email": "huy123@gmail.com", "Gender": "Male", "Age": 20, "Rank": 1, "Mem_id": 12, "Accumulated_point": 100, "Registration_date": "2023-01-01"},
      {"Cus_id": 2, "username":"thuy123", "FName": "Le", "MName": "Anh", "LName": "Thuy", "BDate": "2002-08-07", "Email": "thuy123@gmail.com", "Gender": "Female", "Age": 20, "Rank": 4, "Mem_id": 13, "Accumulated_point": 100, "Registration_date": "2023-01-01"},
      {"Cus_id": 3, "username":"huynh123", "FName": "Le", "MName": "Anh", "LName": "Huynh", "BDate": "2002-07-07", "Email": "huynh123@gmail.com", "Gender": "Male", "Age": 20, "Rank": 5, "Mem_id": 14, "Accumulated_point": 100, "Registration_date": "2023-01-01"},
      {"Cus_id": 4, "username":"chuy123", "FName": "Le", "MName": "Anh", "LName": "Chuy", "BDate": "2002-06-07", "Email": "chuy123@gmail.com", "Gender": "Female", "Age": 20, "Rank": 6, "Mem_id": 15, "Accumulated_point": 100, "Registration_date": "2023-01-01"},
      {"Cus_id": 5, "username":"ahuy123", "FName": "Nguyen", "MName": "Anh", "LName": "Huy", "BDate": "2002-05-07", "Email": "ahuy123@gmail.com", "Gender": "Male", "Age": 20, "Rank": 8, "Mem_id": 16, "Accumulated_point": 100, "Registration_date": "2023-01-01"},
    ]);
    /*React.useEffect(() => {
      axios.get('/GetAllCus', {
          token: localStorage.getItem("token")
        })
      .then(function (response) {
        //console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      }, []);*/


    function Search() {
      // Get the userId param from the URL.
      let { keyword } = useParams();
      return (
        <Home foods = {foods} filter={keyword} combos = {combos}/>
      );
      // ...
    }
  if (localStorage.getItem("route") == "Customer") return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        <Route path = '/cart' element = {<Cart cart = {cart}/>}/>
        <Route path = '/user' element = {<User user = {user}/>}/>
        <Route path="/search/:keyword" element={<Search />} />
        <Route path = '/' element = {<Home foods = {foods} filter = {""} combos = {combos}/>}/>
        <Route path = '/*' element = {<ErrorPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
  else if (localStorage.getItem("route") == "Admin") return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        <Route path = '/' element = {<UserList users = {users}/>}/>
        <Route path = '/*' element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
  else if (localStorage.getItem("route") == "Co-Restaurant") return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        <Route path = '/*' element = {<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
  else return (
    <BrowserRouter>
      <Routes>
        
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/*' element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



