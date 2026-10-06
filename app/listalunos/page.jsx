
'use client';

import { useState, useEffect } from "react";
import Header from "../components/header";

export default function ListAlunos() {

    const [alunos, setAlunos] = useState([]);

    const [editando, setEditando] = useState(null);

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");


    async function buscarAlunos() {

        const resposta = await fetch('/api/alunos');

        const dados = await resposta.json();

        setAlunos(dados);
    }


    useEffect(() => {
        buscarAlunos();
    }, []);


    function editarAluno(aluno) {

        setEditando(aluno.id_aluno);

        setNome(aluno.nome);
        setIdade(aluno.idade);
        setSerie(aluno.serie);
        setRa(aluno.ra);
    }


    async function salvarEdicao(event) {

        event.preventDefault();

        const resposta = await fetch('/api/alunos', {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                id_aluno: editando,
                nome,
                idade,
                serie,
                ra
            })
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.error);

        if (resposta.ok) {

            setEditando(null);

            setNome("");
            setIdade("");
            setSerie("");
            setRa("");

            buscarAlunos();
        }
    }


    return (
        <>
            <Header />

            <h2>Lista de Alunos</h2>


            {editando && (
                <form
                    className="editar-form"
                    onSubmit={salvarEdicao}
                >

                    <div className="editar-header">

                        <div className="editar-icon">
                            ✏️
                        </div>

                        <div>
                            <span>ALTERAÇÃO</span>

                            <h3>Editar aluno</h3>
                        </div>

                    </div>


                    <div className="editar-campos">

                        <div className="editar-campo">

                            <label>
                                Nome completo
                            </label>

                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                        </div>


                        <div className="editar-campo">

                            <label>
                                Idade
                            </label>

                            <input
                                type="number"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                            />

                        </div>


                        <div className="editar-campo">

                            <label>
                                Série
                            </label>

                            <input
                                type="text"
                                value={serie}
                                onChange={(e) => setSerie(e.target.value)}
                            />

                        </div>


                        <div className="editar-campo">

                            <label>
                                RA
                            </label>

                            <input
                                type="text"
                                value={ra}
                                onChange={(e) => setRa(e.target.value)}
                            />

                        </div>

                    </div>


                    <div className="editar-acoes">

                        <button
                            type="button"
                            className="btn-cancelar"
                            onClick={() => setEditando(null)}
                        >
                            Cancelar
                        </button>


                        <button
                            type="submit"
                            className="btn-salvar"
                        >
                            Salvar alterações
                        </button>

                    </div>

                </form>
            )}


            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Nome</th>

                        <th>Idade</th>

                        <th>Série</th>

                        <th>RA</th>

                        <th>Ações</th>

                    </tr>

                </thead>


                <tbody>

                    {alunos.map((aluno) => (

                        <tr key={aluno.id_aluno}>

                            <td>
                                {aluno.id_aluno}
                            </td>

                            <td>
                                {aluno.nome}
                            </td>

                            <td>
                                {aluno.idade}
                            </td>

                            <td>
                                {aluno.serie}
                            </td>

                            <td>
                                {aluno.ra}
                            </td>

                            <td>

                                <button
                                    onClick={() => editarAluno(aluno)}
                                >
                                    Editar
                                </button>


                                <button>
                                    Excluir
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </>
    );
}