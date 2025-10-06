import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

type TypeNovo = {
    id?:number,
    nome:string,
    cargo:string,
    setor:string,
    turno:string,
    salario:number,
    
}

export default function Formulario(){

    const {id} = useParams <{id?:string}>();

    const navegacao = useNavigate()

    const [novo,setNovo] = useState<TypeNovo>({
        nome:"",
        cargo:"",
        setor:"",
        turno:"",
        salario:"",
    });

    const metodo = id ? "PUT" : "POST"

    //Pega os dados do formulario
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setNovo({...novo, [name]:value})
    }

    //Envia os dados do formulario
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault() //Qual erro esse metodo evita
        const funcionarioNovo = {...novo,nome:String(novo.nome),cargo:String(novo.cargo),setor:String(novo.setor),turno:String(novo.turno),salario:Number(novo.salario)}
    
        fetch(`http://localhost:5000/funcionario/${id ?id : ""}`,{
            method:metodo,
            headers:{"Content-Type":"Application/json"} ,
            body: JSON.stringify(funcionarioNovo)
        }) // OQ é o fetch : é a acao de requerir algo exteno
        .then(()=>navegacao("/")) // Qual a funcao do .then
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost/5000/funcionario/${id}`)
            .then(resp=>resp.json())
            .then(data => setNovo(data))
            .catch(error=>console.log(error))
        }
    })

    return(
        <div className="max-w-2xl m-auto my-7">
            <h1 className="text-blue-800 text-5xl text-center font-bold mb-8" >Cadastro de Funcionários</h1>

            <form className ="border-2 border-gray-400 p-4 rounded-md" onSubmit={handleSubmit}>
                <input className="border-2 border-gray-400 rounded-md w-full mb-1 p-2" type="text" name="nome" value ={novo?.nome} placeholder= "Nome" onChange= {handlechange}/><br/>
                <input className="border-2 border-gray-400 rounded-md w-full mb-1 p-2" type="text" name="cargo" value= {novo?.cargo} placeholder="Cargo" onChange={handlechange}/><br/>
                <input className="border-2 border-gray-400 rounded-md w-full mb-1 p-2" type="text" name="setor" value={novo?.setor} placeholder="Setor" onChange={handlechange}/><br />
                <input className="border-2 border-gray-400 rounded-md w-full mb-1 p-2" type="text" name="turno" value={novo?.turno} placeholder="Turno" onChange={handlechange}/><br />
                <input className="border-2 border-gray-400 rounded-md w-full mb-1 p-2" type="number" name="salario" value={novo?.salario} placeholder="Salário" onChange={handlechange}/><br />
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md mr-3" type="submit">{id ? "Salvar" : "Cadastrar"}</button>
                <Link className="bg-red-500  text-white font-bold py-2 px-4 rounded-md" to={"/"}>Cancelar</Link>
            </form>
        </div>
    )
}