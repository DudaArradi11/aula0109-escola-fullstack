
'use client';

import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from "./listnotas.module.css";

export default function ListNotas() {
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        buscarNotas();
    }, []);

   async function buscarNotas() {
    const resposta = await fetch("/api/notas");
    const dados = await resposta.json();

    if (Array.isArray(dados)) {
        setNotas(dados);
    } else {
        console.error("Erro ao buscar notas:", dados);
        setNotas([]);
    }
}

    async function deletarNota(id) {
        if (!confirm("Deseja realmente excluir esta nota?")) {
            return;
        }

        const resposta = await fetch("/api/notas", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            buscarNotas();
        }
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.painel}>
                        <p className={styles.status}>
                            SISTEMA ONLINE
                        </p>

                        <h2>Lista de Notas</h2>

                        <div className={styles.tabelaContainer}>
                            <table className={styles.tabela}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome do Aluno</th>
                                        <th>T1</th>
                                        <th>T2</th>
                                        <th>N1</th>
                                        <th>N2</th>
                                        <th>N3</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {notas.map((nota)  => (
                                        <tr key={nota.id_notas}>
                                            <td>{nota.id_notas}</td>
                                            <td>{nota.nome}</td>
                                            <td>{nota.t1}</td>
                                            <td>{nota.t2}</td>
                                            <td>{nota.n1}</td>
                                            <td>{nota.n2}</td>
                                            <td>{nota.n3}</td>
                                            <td>
                                                <button
                                                    className={styles.btnDeletar}
                                                    onClick={() =>
                                                        deletarNota(nota.id_nota)
                                                    }
                                                >
                                                    Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    {notas.length === 0 && (
                                        <tr>
                                            <td colSpan="8">
                                                Nenhuma nota cadastrada.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}