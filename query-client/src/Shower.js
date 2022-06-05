import {React,useEffect,useState} from 'react';
import './App.css';
import Item from './item';
import { getallusers } from './functions';

function Shower(params) {

    const [data,setData] = useState([]);

    const [update,setUpdate] = params.updater;

    useEffect(() => {
        const fetchdata = async () => {
            const userdata = await getallusers();
            setData(userdata);
        }
        fetchdata();
    }, [update]);

    return (
        <div className="Shower">
            {data?.map((user,idx) => {
                return(
                    <div className='container' key={idx}>
                        <Item name={user.name} email={user.email} id={user._id} updater={[update,setUpdate]}  />
                    </div>
                );
            })}
        </div>
    );
}

export default Shower;