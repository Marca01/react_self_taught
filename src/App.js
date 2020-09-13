import React, { useState, useEffect, useRef, Suspense } from "react";
import queryString from "query-string";
import "./App.css";
// import Test from "./Test";
// import { styled } from "@material-ui/core";
// import TodoForm from "./TodoForm";
// import PostList from "./PostList";
// import Pagination from "./Pagination";
// import PostFiltersForm from "./PostFiltersForm";
// import useClock from "./useClock";
// import useColorBox from "./useColorBox";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import RouterDemo from "./RouterDemo";
// import NavRouter from "./NavRouter";
// import RouterDemo2 from "./RouterDemo2";
// import PokeItems from "./PokeItems";
// import { useSelector, useDispatch } from "react-redux";
// import { increase, decrease } from "./actions";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
// import loadingEffect from "./assets/loading/loading";
import LoadingEff from "./assets/loading/loading.gif";

// const user = {
//     name: "Khale",
//     email: "lkha.5023@gmail.com"
// };

// // const elemennt = < h1 > Hello world,
// //     my name is: { user.name }, and email: { user.email } < /h1>
// const elemennt = (
//     <div className="hello">
//         <h1> Hello world!!! </h1>
//         <h2> My name is {user.name}, and my email address is {user.email} </h2>
//     </div>
// );
// let numbers = [1, 2, 3, 4, 5];
// let cloneNumbers = numbers.map((value) => value + 2 + " ");
// // document.write(cloneNumbers);
// ReactDOM.render (
//     <div>
//         <p>{elemennt}</p>
//         <p>Clone numbers: {cloneNumbers}</p>,
//     </div>,
//     document.getElementById('root')
// )
// function simpleClock() {
//   const time = (
//       <div>
//           <h1>Simple clock with React</h1>
//           <h2>Current time: {new Date().toLocaleTimeString()}</h2>
//       </div>
//   )
//   ReactDOM.render (
//       time,
//       document.getElementById('root')
//   );
// }
// // simpleClock();
// setInterval(simpleClock, 1000);

// lazy load
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  // const [count, setCount] = useState(0);

  // // Use custom hook: useClock
  // const { time } = useClock();
  // // const [framework, setFramework] = useState([
  // //   { intro: "Hello", name: "React" },
  // //   { intro: "Hello", name: "Vue" },
  // //   { intro: "Hello", name: "Angular" },
  // // ]);

  // const { colorBox, handleColorBox } = useColorBox();
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "Hello" },
  //   { id: 2, title: "React" },
  //   { id: 3, title: "JS" },
  // ]);

  // // useEffect(() => {
  // //   let listTodoo = JSON.parse(localStorage.getItem("todo-list"));
  // //   setTodoList(listTodoo);
  // // }, []);

  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues) {
  //   console.log(formValues);
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  //   // localStorage.setItem("todo-list", JSON.stringify(newTodoList));
  // }
  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });
  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  // });
  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = queryString.stringify(filters);
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       console.log({ responseJSON });

  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fetchPostList();
  // }, [filters]);

  // function handlePageChange(newPage) {
  //   console.log("New page: ", newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }

  // function handleFiltersChange(newFilters) {
  //   console.log("New value: ", newFilters);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }

  // // Redux
  // const counterRedux = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.logged);

  // const dispatch = useDispatch();
  return (
    // <div>
    //   {/* <Test heading="Hello React" />
    //   <Test heading="Hello Vue" />
    //   <Test heading="Hello Angular" /> */}

    //   {/* {framework.map(frame => (
    //     <Test intro={frame.intro} name={frame.name} />
    //   ))}; */}
    //   <h2 style={{ color: "blue", fontSize: "30px" }}>Current time: {time}</h2>
    //   <h2 style={{ color: "rgb(145, 161, 196)", fontSize: "30px" }}>
    //     Current time use custom hook: {time}
    //   </h2>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     click
    //   </button>
    //   <h3>{count}</h3>
    //   <h4>{colorBox}</h4>
    //   <div
    //     style={{
    //       width: "100px",
    //       height: "100px",
    //       backgroundColor: colorBox,
    //     }}
    //     onClick={handleColorBox}
    //   ></div>
    //   <TodoForm onSubmit={handleTodoFormSubmit} />
    //   <Test todos={todoList} onTodoClick={handleTodoClick} />
    //   <PostFiltersForm onSubmit={handleFiltersChange} />
    //   <PostList posts={postList} />
    //   <Pagination pagination={pagination} onPageChange={handlePageChange} />

    //   {/* React router dom */}

    //   <Router>
    //     <div>
    //       <NavRouter />
    //       <Switch>
    //         {/* <Route path="/" exact component={App} /> */}
    //         <Route path="/routerDemo" component={RouterDemo} />
    //         <Route path="/routerDemo2" exact component={RouterDemo2} />
    //         <Route path="/routerDemo2/:name" component={PokeItems} />
    //       </Switch>
    //     </div>
    //   </Router>

    //   {/* Redux */}
    //   <h3>Counter {counterRedux}</h3>
    //   <button onClick={() => dispatch(increase(10))}>+</button>
    //   <button onClick={() => dispatch(decrease())}>-</button>
    //   {isLogged ? <h3>You are logged in</h3> : ""}
    // </div>

    // Mini Project Redux ft. ReactJs
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
