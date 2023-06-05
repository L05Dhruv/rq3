import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

export const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [friends, setFriends] = useState([]);
  const refInput = useRef("");
  const navigate = useNavigate();
  
  const usersQuery = useQuery(`posts`, async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data
  });

  useEffect(() => {
    // Load todos from localStorage
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
      console.log(refInput.current.value);
      setTodos([...todos, refInput.current.value]);
      refInput.current.value = "";
  };


  const handleFetchFriends = async () => {
    await usersQuery.refetch();
    
    const friendsArray = await usersQuery.data;
    console.log(friendsArray);

    const friendsNamesArray = friendsArray.map((friend) => {
      return friend.name;
    });
    
    setFriends(friendsNamesArray);
  }

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("user");
    // route user back to sign in page
    navigate('/');
  };

  return (
    <div>
      <input
        ref={refInput}
        type="text"
      />
      <button onClick={handleAddTodo}>Add to your list</button>
      <h3>To do:</h3>
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button id="get-friends-btn" onClick={handleFetchFriends}>Get friends list</button>
      <h3>Your active friends: </h3>
      <ul id="friends-list">
        {friends.map((friend, index) => {
          return(
            <li key={index}>
              {friend}
            </li>
          )
        })}
      </ul>
      <button id="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
