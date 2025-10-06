import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Funcionarios = {
    id:number,
    nome:string,
    cargo:string,
    setor:string,
    turno:string,
    salario:number,
}

export default function Funcionarios(){

    const [funcionario, setFuncionario] = useState<Funcionarios[]>([])
    const baseUrl = "http://localhost:5000/funcionario";

    

    useEffect(() => {
    fetch(baseUrl)
      .then((resp) => {
        if (!resp.ok) throw new Error("Erro ao carregar funcionários");
        return resp.json();
      })
      .then((data) => setFuncionario(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id: number) => {
    if (!confirm("Deseja realmente excluir este funcionário?")) return;
    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then((resp) => {
        if (!resp.ok) throw new Error("Erro ao excluir");
        // atualiza a lista local evitando nova chamada ao servidor
        setFuncionario((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((error) => console.error(error));
  };

    return(
        <>
        <div className="w-3/4 mt-8 m-auto">
            <h1 className="text-blue-800 text-5xl text-center font-bold mb-8">Lista de Funcionários</h1>

            <Link className="p-2.5 bg-green-500 text-white font-bold rounded-md" to={'/formulario'}>Adicionar funcionário</Link>

            <table className="w-full border-2 border-gray-400 my-5">
                <thead>
                    <tr className="*:p-2.5 bg-blue-800 text-white">
                        <th>Nome</th><th>Cargo</th><th>Setor</th><th>Turno</th><th>Salário</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        funcionario.map(func=>(
                            <tr className="even:bg-gray-400 *:text-center *:p-2.5" key={func.id}>
                                <td>{func.nome}</td><td>{func.cargo}</td><td>{func.setor}</td>
                                <td>{func.turno}</td><td>R${func.salario}<td></td>
                                    <Link className="m-1 bg-blue-600 text-white px-2 
                                    pb-1 rounded-md hover:font-bold" to={`/editar/${func.id}`}>Editar</Link>
                                    <button onClick={()=>handleDelete(func.id)} className="m-1 bg-red-600 text-white px-2 
                                    pb-0.75 rounded-md hover:font-bold">Excluir</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </table>
        </div>
        </>
    )
}