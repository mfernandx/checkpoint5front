export default function Navegador(){
    return(
        <>
        <nav className="flex justify-center text-xl p-6">
            <ul className="flex list-none">
            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-[10px] hover:border-[#0077C8]" href="/"> Início </a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-[10px] hover:border-[#0077C8]" href="/listaFuncionario"> Funcionários</a></li>

            <li><a className="no-underline text-[#444444] font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-[10px] hover:border-[#0077C8]" href="/formulario"> Formulário</a></li>
            
            </ul>
        </nav>
        </>
    )
}