'use client';
import { useState } from "react";
import Header from "../components/header";

export default function CadNotas(){
    const [nomeAluno, setNomeAluno] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    return(
        <>
            <Header />

            <main className="cadnotas-page">

                <h2>Cadastro de Notas</h2>

                <form action="" className="cadnotas-form">

                    <label htmlFor="nomeAluno">Nome aluno</label>
                    <input
                        id="nomeAluno"
                        type="text"
                        value={nomeAluno}
                        onChange={(e) => setNomeAluno(e.target.value)}
                    />

                    <label htmlFor="t1">T1 (trabalho 1)</label>
                    <input
                        id="t1"
                        type="number"
                        value={t1}
                        onChange={(e) => setT1(e.target.value)}
                    />

                    <label htmlFor="t2">T2 (trabalho 2)</label>
                    <input
                        id="t2"
                        type="number"
                        value={t2}
                        onChange={(e) => setT2(e.target.value)}
                    />

                    <label htmlFor="n1">N1 (nota 1)</label>
                    <input
                        id="n1"
                        type="number"
                        value={n1}
                        onChange={(e) => setN1(e.target.value)}
                    />

                    <label htmlFor="n2">N2 (nota 2)</label>
                    <input
                        id="n2"
                        type="number"
                        value={n2}
                        onChange={(e) => setN2(e.target.value)}
                    />

                    <label htmlFor="n3">N3 (nota 3)</label>
                    <input
                        id="n3"
                        type="number"
                        value={n3}
                        onChange={(e) => setN3(e.target.value)}
                    />

                    <button>Salvar</button>

                </form>

            </main>
        </>
    )
}