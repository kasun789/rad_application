import React, { Component } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Book from '../../server/module/book';

import AddStudent from './componets/AddStudent'
import DeleteStudent from './componets/DeleteStudent'
import EditStudent from './componets/EditStudent'
import Student from './componets/Student'
import ViewStudent from './componets/ViewStudent';


export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div className='container'>
            <Routes>
                <Route exact path='/' element={< Student />}></Route>
                <Route exact path='/add' element={< AddStudent />}></Route>
                <Route exact path='/edit/:id' element={< EditStudent />}></Route>
                <Route exact path='/post/:id' element={< DeleteStudent />}></Route>
                <Route exact path='/post/:id' element={< ViewStudent />}></Route>
            </Routes>
        </div>
        <div className='contaner'>
        <Routes>
                <Route exact path='/book' element={< Book />}></Route>
                <Route exact path='/add' element={< AddStudent />}></Route>
                <Route exact path='/edit/:id' element={< EditStudent />}></Route>
                <Route exact path='/post/:id' element={< DeleteStudent />}></Route>
                <Route exact path='/post/:id' element={< ViewStudent />}></Route>
            </Routes>
        </div>
      </Router>
      
    )
  }
}
