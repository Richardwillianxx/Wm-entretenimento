import axios from "axios";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

function CadastroComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('As senhas não correspondem!');
            return;
        }

        try {
            const response = await axios.post('http://143.198.156.185/api/auth/register', {
                name: username,
                email: email,
                password: password
            });
            setError(null);
            setSuccess('Registrado com sucesso');
            console.log(JSON.stringify(response.data));
        } catch (error) {
            setError('Falha ao cadastrar');
            setSuccess(null);
            console.log(error);
        }
    }

    return (
        <div className='addUser'>
            <h3>Cadastrar</h3>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <form className='addUserForm' onSubmit={handleSubmit}>
                <div className='inputGroup'>
                    <label htmlFor='name'> Nome:</label>
                    <input
                        type='text'
                        id='name'
                        autoComplete='off'
                        placeholder='Entre com o seu nome'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor='name'> Email:</label>
                    <input
                        type='email'
                        id='email'
                        autoComplete='off'
                        placeholder='Entre com o seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor='senha'> Senha:</label>
                    <input
                        type='password'
                        id='senha'
                        autoComplete='off'
                        placeholder='Entre com sua senha...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor='confirm'> Confirme sua senha:</label>
                    <input
                        type='password'
                        id='confirm'
                        autoComplete='off'
                        placeholder='Confirme sua senha...'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button className="btn" type='submit'>Cadastrar</button>
                </div>
            </form>

            <div className='login'>
                <p>Já possui uma conta?</p>
                <a href="/login"><button className="btn" type='submit'>Login</button></a>
            </div>
        </div>
    );
}

export default CadastroComponent;
