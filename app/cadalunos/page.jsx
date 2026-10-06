 'use client';

import { useState } from "react";
import Header from "../components/header";

export default function CadAlunos() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    async function cadastrarAluno(event) {
        event.preventDefault();

            const resposta = await fetch("/api/alunos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome,
                    idade,
                    serie,
                    ra
                })
            });

            const dados = await resposta.json();

            alert(dados.mensagem || dados.erro);

            if (resposta.ok) {
                setNome('');
                setIdade('');
                setSerie('');
                setRa('');
            } 
    }

    return (
        <>
            <Header />

            <main className="cadastro-main">

                <section className="cadastro-container">

                    <div className="cadastro-intro">
                        <span>SESI • ALUNOS</span>

                        <h1>
                            Cadastro de <strong>Alunos</strong>
                        </h1>

                        <p>
                            Preencha os dados abaixo para cadastrar um novo aluno.
                        </p>
                    </div>

                    <div className="cadastro-card">

                        <div className="cadastro-card-header">

                            <div className="cadastro-icon">
                                👤
                            </div>

                            <div>
                                <span>NOVO CADASTRO</span>
                                <h2>Dados do aluno</h2>
                            </div>

                        </div>

                        <form
                            className="form"
                            onSubmit={cadastrarAluno}
                        >

                            <div className="campo">
                                <label htmlFor="nome">
                                    Nome completo
                                </label>

                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="Digite o nome do aluno"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="cadastro-linha">

                                <div className="cadastro-campo">
                                    <label htmlFor="idade">
                                        Idade
                                    </label>

                                    <input
                                        id="idade"
                                        type="number"
                                        placeholder="Ex: 17"
                                        value={idade}
                                        onChange={(e) => setIdade(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="cadastro-campo">
                                    <label htmlFor="serie">
                                        Série
                                    </label>

                                    <input
                                        id="serie"
                                        type="text"
                                        placeholder="Ex: 3º Ano"
                                        value={serie}
                                        onChange={(e) => setSerie(e.target.value)}
                                        required
                                    />
                                </div>

                            </div>

                            <div className="cadastro-campo">
                                <label htmlFor="ra">
                                    RA
                                </label>

                                <input
                                    id="ra"
                                    type="number"
                                    placeholder="Digite o RA do aluno"
                                    value={ra}
                                    onChange={(e) => setRa(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="cadastro-botao"
                            >
                                Salvar aluno →
                            </button>

                        </form>

                    </div>

                </section>

            </main>
        </>
    );
}