import {React,useState} from 'react';
import './App.css';
import {deleteuser, updateuser} from './functions';

function Item(params) {
    const [edit,setEdit] = useState(false);
    const [update,setUpdate] = params.updater;
    const [newName,setNewName] = useState(params.name);
    const [newEmail,setNewEmail] = useState(params.email);
    return (
        <div className="Item">
            <div className="valuesofitem">
                <div className={edit?"hidden":"nameVal"}>{params?.name}</div>
                <div className={edit?"hidden":"emailVal"}>{params?.email}</div>
                <input className={edit?"inputbox":"hidden"} type="text" placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)} 
                />
                <input className={edit?"inputbox":"hidden"} type="text" placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)} 
                />
            </div>
            <button className={edit?"hidden":"editbtn button"}
            onClick={(e)=>{
                e.preventDefault();
                setEdit(true);
            }}>✎</button>
            <button className={edit?"hidden":"deletebtn button"}
            onClick={async (e)=>{
                e.preventDefault();
                await deleteuser(params.id);
                setUpdate(update+1);
                setEdit(false);
            }}>--</button>
            <button className={edit?"submitbtn button":"hidden"}
            onClick={async (e)=>{
                e.preventDefault();
                await updateuser(params.id,newName,newEmail);
                setUpdate(update+1);
                setEdit(false);
            }}>✔</button>
            <button className={edit?"deletebtn button":"hidden"} 
            onClick={(e)=>{
                e.preventDefault();
                setNewEmail(params.email);
                setNewName(params.name);
                setEdit(false);
            }}>✖</button>
        </div>
    );
}

export default Item;