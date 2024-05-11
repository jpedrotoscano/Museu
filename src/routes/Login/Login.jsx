import { Link } from "react-router-dom"
import { InputText } from 'primereact/inputtext';
import arrowLeft from "../../assets/arrow-left-solid.svg"


import 'primeicons/primeicons.css';
        

function Login() {
    return (
        <div className=' flex flex-column py-4 px-7 bg-blue-50 border-round-2xl shadow-2'>
            <div className="flex align-items-center justify-content-between">
                <Link to="/" className="bg-white w-2rem h-2rem flex align-items-center justify-content-center border-circle shadow-1" >
                    <img src={arrowLeft} className="w-1rem "/>
                </Link>
                <h2 className="text-center">Acesse como Admin</h2>
            </div>
            <div className="flex flex-column">
                <label className="text-xl">Login:</label>
                <InputText className="w-22rem mt-2 mb-3 h-3rem border-round border-none pl-2 text-lg hover:border-blue-300 shadow-2" placeholder="Insira seu login" style={{ fontFamily: "Roboto" }} />
                <label className="text-xl">Senha:</label>
                <InputText className="w-22rem mt-2 mb-3 h-3rem border-round border-none pl-2 text-lg hover:border-blue-300 shadow-2" placeholder="Insira sua senha" style={{ fontFamily: "Roboto" }} />
            </div>
            <Link to="/dashboard" className="flex align-self-center w-11 h-4rem text-2xl text-black-alpha-90 bg-blue-300 hover:bg-blue-200 border-round-2xl border-1 border-blue-500 hover:border-blue-50 cursor-pointer transition-duration-200 no-underline flex align-items-center justify-content-center font-medium shadow-1 my-3" style={{ fontFamily: "Roboto" }} >Entrar</Link> 
        </div>
    )
}

export default Login