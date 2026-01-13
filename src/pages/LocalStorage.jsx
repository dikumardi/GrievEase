 const admin = [{
    "id":1,
    "email":"admin@123.com",
    "password":'123'

}];

export const setLocalStorage =() =>{
 localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage =() =>{
 const data = localStorage.getItem('admin')
 console.log(JSON.parse(data));
 

}
