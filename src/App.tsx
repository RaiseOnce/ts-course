import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import { ITodo, IUser } from './types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
import EventsExample from './components/EventsExample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route path={'/users'} element={<UsersPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
        <Route path={'/todos/:id'} element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
