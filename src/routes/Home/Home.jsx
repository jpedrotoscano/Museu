import { Divider } from "primereact/divider"
import { Link } from "react-router-dom"

function Home() {
    return(
        <div className="flex align-items-center justify-content-center w-full h-screen">
            <div className=' flex flex-column align-items-center py-4 px-7 bg-blue-50 border-round-2xl shadow-2'>
                <h1 className="text-6xl text-black-alpha-90">Seja bem-vindo</h1>
                <Link to="/visitante" className="w-11 h-4rem text-2xl text-black-alpha-90 bg-blue-300 hover:bg-blue-200 border-round-2xl border-1 border-blue-500 hover:border-blue-50 cursor-pointer transition-duration-200 no-underline flex align-items-center justify-content-center font-medium shadow-1" style={{ fontFamily: "Roboto" }} >Acesse como Visitante</Link>
                <div className="flex align-items-center jutify-content-center w-10 py-2">
                    <Divider className="text-black-alpha-90" type="solid"/>
                    <span className="text-black-alpha-90 px-4">OU</span>
                    <Divider className="text-black-alpha-90" type="solid"/>
                </div>
                <Link to="/login" className="w-11 h-4rem text-2xl text-black-alpha-90 bg-blue-300 hover:bg-blue-200 border-round-2xl border-1 border-blue-500 hover:border-blue-50 cursor-pointer transition-duration-200 no-underline flex align-items-center justify-content-center font-medium shadow-1" style={{ fontFamily: "Roboto" }} >Entre como Admin</Link>
            </div>
        </div>
    )
}

export default Home