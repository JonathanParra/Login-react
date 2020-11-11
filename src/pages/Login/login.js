import React, {useState} from 'react';
import Title from './componente/Title/title';
import Label from './componente/label/label';
import Input from './componente/input/input';
import './login.css';

const Login = () =>{

    const [user,setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    function handleChange(name, value){
        if(name === 'user'){
            setUser(value)
        }else{
            if(value.length < 6){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value)
            }
            
        }
    };

    function handleSubmit(){
        let account = {user,password}
        if(account){
            console.log('account:',account)
        }
    };
    
    return(
        <div className='login-container'>
            <div className='login-content'>
                <Title text='¡Bienvenido!'/>    
                <Label text='Usuario'/> 
                <Input
                    attribute ={{
                        id:'user',
                        name:'user',
                        type:'text',
                        placeholder:'Ingrese Usuario'
                 }}
                    handleChange={handleChange}
                />
                <Label text='Contraseña'/>
                <Input 
                    attribute ={{
                        id:'password',
                        name:'password',
                        type:'password',
                        placeholder:'Ingrese Password'
                    }}
                    handleChange={handleChange}
                />
                <div className='submit-button-container'>
                 <button onClick={handleSubmit} className='submit-button'>
                    Ingresar
                 </button>
                </div>
            </div>
        </div>
    )
};

export default Login;