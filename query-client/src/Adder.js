import {React,useState} from 'react';
import './App.css';
import { createuser } from './functions';

function Adder(params) {

    const [update,setUpdate] = params.updater;

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    return (
        <div className="Adder">
            <div className="InputFeild">
                <div className="label">Name:</div>
                <input className="inputbox" type="text" placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="InputFeild">
                <div className="label">Email:</div>
                <input className="inputbox" type="text" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="adderOp">
                <button className="resetbtn button" 
                onClick={(e)=>{
                    e.preventDefault();
                    setName("");
                    setEmail("");
                }}>
                    Reset Feilds
                </button>
                <button className="addbtn button"
                onClick={async(e)=>{
                    e.preventDefault();
                    await createuser(name,email);
                    setUpdate(update+1);
                    setName("");
                    setEmail("");
                }}>
                    Add User
                </button>
            </div>
        </div>
    );
}

export default Adder;