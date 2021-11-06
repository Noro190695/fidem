import React from "react";
import './style/style.scss';
import Header from './components/header/header';
import classNames from "classnames";
import Table from './components/table/Table';
import {  Route, Switch} from 'react-router-dom';
import Form from "./components/form/From";
import { useSelector } from 'react-redux';

function App() {
  const {data, searchData} = useSelector((state) => state.user);

  return (
    <div className={ classNames('wrapper') } >
       <Header />
       <Switch>
         <Route exact path='/'>
           <Table data={data}/>
         </Route>
         <Route exact path='/create'>
           <Form />
         </Route>
         <Route exact path='/edit/:id'>
           <Form />
         </Route>
         <Route exact path='/search'>
           <Table data={searchData}/>
         </Route>
         <Route exact>
           404
         </Route>
       </Switch>
       
    </div>
  );
}



export default App;
