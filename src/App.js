import './App.css';
import React, {useEffect, useState} from "react";
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, deleteDoc ,  doc} from 'firebase/firestore'

function App() {
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)})
    };

    const updateUser = async (id, age) => {
        const useDoc = doc(db, "users", id)
        const newFields = {age: age + 1};
        await updateDoc(useDoc, newFields);
    };

    const deleteUser = async (id) => {
        const useDoc = doc(db, "users", id)
        await deleteDoc(useDoc);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        fetchUsers();
    }, []);

    return (<div className="App">
            <input placeholder={"Name"} onChange={(e) => setNewName(e.target.value)}/>
            <input placeholder={"Age"} type="number" onChange={(e) => setNewAge(e.target.value)}/>
            <button onClick={createUser}> Create</button>
            {users.map((user, index) => {
                return (<div key={index}>
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                    <button onClick={()=>updateUser(user.id, user.age)}> Increase age</button>
                    <button onClick={()=>deleteUser(user.id)}> Delete age</button>
                </div>)
            })}
        </div>);
}

export default App;
