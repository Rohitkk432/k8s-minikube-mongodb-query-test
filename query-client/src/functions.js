import axios from 'axios';

const SERVER_URL = "<server-url>"

async function getallusers(){
    const resp = await axios.get(`${SERVER_URL}/allusers`)
    .then((res)=>res.data).catch((err)=>console.log(err));
    return resp;
}

async function createuser(name,email){
    const resp = await axios.post(`${SERVER_URL}/adduser`,{
        name:`${name}`,
        email:`${email}`
    })
    .then((res)=>res.data).catch((err)=>console.log(err));
    return resp;
}

async function updateuser(id,name,email){
    const resp = await axios.post(`${SERVER_URL}/updateuser`,{
        id:`${id}`,
        name:`${name}`,
        email:`${email}`
    })
    .then((res)=>res.data).catch((err)=>console.log(err));
    return resp;
}

async function deleteuser(id){
    const resp = await axios.delete(`${SERVER_URL}/deleteuser/${id}`)
    .then((res)=>res.data).catch((err)=>console.log(err));
    return resp;
}

export {getallusers,createuser,updateuser,deleteuser};