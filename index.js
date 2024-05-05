// Deliverable:
// Your task is to store all the user details as an object inside the local storage, instead of storing them as individual fields.
function handleFormSubmit(event){
    event.preventDefault();
    let ud={
        username:event.target.username.value,
        email:event.target.email.value,
        phoneno:event.target.phone.value
    };
    let uds=JSON.stringify(ud);
    localStorage.setItem(ud.email,uds);
    const nli=document.createElement('li');
    nli.innerHTML=ud.username+" "+ud.email+" "+ud.phoneno;
    const dbtn=document.createElement('button');
    dbtn.innerHTML="Delete";
    dbtn.onclick=()=>{
        localStorage.removeItem(ud.email);
        aplist.removeChild(nli);
    }
    const ebtn=document.createElement('button');
    ebtn.innerHTML="Edit";
    ebtn.onclick=()=>{
        localStorage.removeItem(ud.email);
        aplist.removeChild(nli);
        event.target.username.value=ud.username;
    event.target.email.value=ud.email;
    event.target.phone.value=ud.phoneno;

    }
    nli.appendChild(dbtn);
    nli.appendChild(ebtn);
    aplist.appendChild(nli);
    
}
const aplist=document.createElement('ul');
aplist.setAttribute('id','appointment');
const body=document.querySelector('body');
body.appendChild(aplist);