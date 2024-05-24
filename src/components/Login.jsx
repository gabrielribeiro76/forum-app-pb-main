import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = async () => {
        try {
            const response = await fetch("https://projeto-bloco-4f62c-default-rtdb.firebaseio.com/users.json");

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const data = await response.json();

            const users = Object.values(data);
            const user = users.find((user) => user.Email === email);

            if (!user) {
                alert("User not found");
                return;
            }

            if (user.senha !== password) {
                alert("Invalid password");
                return;
            }

            alert("Login successful");
            navigate("/dashboard");
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
        setEmail("");
        setPassword("");
    };

    return (
        <main className='login'>
            <h1 className='loginTitle'>Log in</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Senha</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>Entrar</button>
                <p>
                    Nao tem uma conta ? <Link to='/register'>Crie uma</Link>
                </p>
            </form>
        </main>
    );
};

export default Login;