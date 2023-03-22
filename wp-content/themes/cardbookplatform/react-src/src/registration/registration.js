import React,{useEffect, useState} from "react"; 
import FirstStep from "./fStep";
import './css/index.scss';
const Registration = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userEmail: '',
        userPassword: '',
        referalLink: ''
    }); 

    const registerUser = () =>{
        fetch('/wp-json/wp-cusotm/v2/users/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: formData.userEmail,
                email: formData.userEmail,
                password: formData.userPassword
              })
        })
        .then(response => response.json())
        .then(data => {
           if(data.code == 200){
               alert('Success Register');
           }
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }

    const formHandler = (e)=> {
        e.preventDefault();
        if (!formData.firstName) {
            document.getElementById('firstName').classList.add('error');
        }
        if(!formData.lastName){
            document.getElementById('lastName').classList.add('error');
        }
        if(!formData.userEmail){
            document.getElementById('userEmail').classList.add('error');
        }
        if(!formData.userPassword){
            document.getElementById('userPassword').classList.add('error');
        }
        if(formData.lastName !='' & formData.firstName != '' & formData.userEmail != ''  & formData.userPassword != '' ){
            alert('Success!');
            registerUser();
        }
    }
    const handleChange = (event) =>{
        const { name, value } = event.target;

        if (formData.firstName) {
            document.getElementById('firstName').classList.remove('error');
        }
        if(formData.lastName){
            document.getElementById('lastName').classList.remove('error');
        }
        if(formData.userEmail){
            document.getElementById('userEmail').classList.remove('error');
        }
        if(formData.userPassword){
            document.getElementById('userPassword').classList.remove('error');
        }
        setFormData({
            ...formData,
            [name]: value
        });
 
    }

 
    useEffect(() => {
         
 
    }, [formData]);

    return(
        <div className="registration">
            <div className="container">
                <div className="registration-title">
                    <h1>Sign up to CardBook</h1>
                    <p> We noticed that you are with us for the first time! To create an account, fill in the required fields.</p>
                </div>
                <div className="registration-form">
                    <FirstStep handler={formHandler} handleChange={handleChange}/>
                </div>
            </div>
           
        </div>
    );
}

export default Registration;