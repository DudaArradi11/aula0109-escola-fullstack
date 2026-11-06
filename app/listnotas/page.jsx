'use client';
import { useState, useEffect } from "react";
import Header from "../components/header";
import { useRouter } from "next/navigation";
import styles from './listnotas.module.css';

export default function ListNotas() {
    const [notas, setNotas] = useState([]);
    const router = useRouter();

    useEffect(() => {
        buscarNotas()
    }, [])//toda vez que a tela for recarregada

    async function buscarNotas() {
        const resposta = await fetch('/api/notas');
        const dados = await resposta.json();

        setNotas(dados);
    }

    function editarNota(id_nota) {
        router.push(`/editanota/${id_nota}`);
    }

    async function excluirNota(event) {
        event.preventDefault();
        if (!confirm("Deseja realmente excluir esta nota?")) {
            return;
        }
        const resposta = await fetch("/api/notas", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_notas: event.target.dataset.id,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        buscarNotas();
    }


    return (
        <>
            <Header />

            <main className={styles.main}>

                <section className={styles.tituloArea}>
                    <h2>Lista de Notas</h2>

                    <p>
                        Consulte todas as notas cadastradas no sistema.
                    </p>
                </section>

                <section className={styles.tabelaContainer}>

                    <table className={styles.tabela}>

                        <thead>
                            <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Trabalho1</th>
                                    <th>Trabalho2</th>
                                    <th>Nota1</th>
                                    <th>Nota2</th>
                                    <th>Nota3</th>
                                    <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {notas ? (notas.map((nota) => (
                                <tr key={nota.id_notas}>
                                    <td>{nota.id_notas}</td>
                                    <td>{nota.nome}</td>
                                    <td>{nota.t1}</td>
                                    <td>{nota.t2}</td>
                                    <td>{nota.n1}</td>
                                    <td>{nota.n2}</td>
                                    <td>{nota.n3}</td>
                                    <td>
                                        <button className={styles.botaoEditar} onClick={() => editarNota(nota.id_notas)}>
                                            Editar
                                        </button>

                                        <button className={styles.botaoExcluir} data-id={nota.id_notas} onClick={excluirNota}>
                                            Excluir
                                        </button>
                                    </td>

                                </tr>
                            ))) : (
                                <tr>
                                    <td colSpan="6">Nenhuma nota encontrada.</td>
                                </tr>
                            )}
                        </tbody>

                    </table>

                </section>

            </main>
        </>
    );
}