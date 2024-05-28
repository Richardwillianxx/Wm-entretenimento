import Alert from 'react-bootstrap/Alert';
import '../csss/login.css'
import axios from 'axios';
import { useState } from 'react';



function LoginComponent(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e){
    e.preventDefault();


    let response = await axios.post('http://143.198.156.185/api/auth/login',{
      "email":   username,
      "password":password
      //Email e password deverão ser consultados nos campos do postman
    })
    .then(function (value) {
      setError(null);
      setSuccess(`Seja-bem vindo ${value.data.user.name}!`);
      console.log(JSON.stringify(value.data));
      
    })
    .catch(function (error) {
      setError("Usuário ou senha inválidos");
      setSuccess(null)
      console.log(error);
    });  
  }

return(
<div className='addUser'>
    <h3>Login </h3>
  
    {error && <Alert variant="danger">{error}</Alert>}
    {success && <Alert variant="success">{success}</Alert>}
    <form className='addUserForm'  onSubmit={handleSubmit}>
        <div className='inputGroup'>
           
            <label htmlFor='name'> Email:</label>
            <input type='email' 
                   id='email' 
                   autoComplete='off'
                   placeholder='Entre com o seu email'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   required />

            <label htmlFor='senha'> Senha:</label>
            <input type='password' 
                   id='senha' 
                   autoComplete='off'
                   placeholder='Entre com sua senha...'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   required/>
              <button className="btn" type='submit'>Logar </button>{' '}
         </div>
    </form>

    <div className='login'>
        <p>Não possui uma conta? </p>
        <a href='cadastrar'><button className="btn" type='submit'> Criar conta </button>{' '}</a>
        
    </div>      
</div>



);



}export default LoginComponent;