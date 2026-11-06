'use client';

import { useEffect, useState, use } from "react";
import Header from "../../components/header";
import styles from "./cadaluno.module.css";
import {redirect} from "next/navigation";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function EditaNotaPage({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();


    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    const id = resolvedParams?.id || routeParams?.id || searchParams?.get("id");

    const [id_notas, setIdNota] = useState("")
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [carregando, setCarregando] = useState(true);


   useEffect(() => {
        if (id) {
            buscarNota(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarNota(idNota) {
        try {
            setCarregando(true);
            const resposta = await fetch(`/api/notas/${idNota}`);

            if (!resposta.ok) {
                alert("Nota não encontrada!");
                router.push("/listnotas");
                return;
            }

            const dados = await resposta.json();
            setIdNota(dados.id_notas || "");
            setT1(dados.t1 || "");
            setT2(dados.t2 || "");
            setN1(dados.n1 || "");
            setN2(dados.n2 || "");
            setN3(dados.n3 || "");
        } catch (erro) {
            console.error("Erro ao carregar nota:", erro);
            alert("Erro ao carregar dados da nota.");
        } finally {
            setCarregando(false);
        }
    }

    async function editarNota(event) {
        event.preventDefault();

        if (!id) {
            alert("ID da nota não foi encontrado.");
            return;
        }

        const resposta = await fetch("/api/notas", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_notas,
                t1,
                t2,
                n1,
                n2,
                n3,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            router.push("/listnotas");
        }
    }

    if (carregando) {
        return (
            <main className="container">
                <h1>Editar Nota</h1>
                <p>Carregando informações da nota...</p>
            </main>
        );
    }


    return (
        <>
            <Header />

            <main className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>
                        Edição de Notas
                    </h2>

                    <p className={styles.subtitle}>
                        Preencha os dados da nota para realizar a edição no sistema.
                    </p>

                    <form className={styles.form} onSubmit={editarNota}>
                          <input type="text" value={id_notas} onChange={(event) => setIdNota(event.target.value)} hidden/>

                        <div className={styles.inputGroup}>
                            <label htmlFor="t1">T1</label>
                            <input
                                id="t1"
                                type="number"
                                value={t1}
                                onChange={(e) => setT1(e.target.value)}
                                placeholder="Digite a nota da T1"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="t2">T2</label>
                            <input
                                id="t2"
                                type="number"
                                value={t2}
                                onChange={(e) => setT2(e.target.value)}
                                placeholder="Digite a nota da T2"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="n1">N1</label>
                            <input
                                id="n1"
                                type="number"
                                value={n1}
                                onChange={(e) => setN1(e.target.value)}
                                placeholder="Digite a nota da N1"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="n2">N2</label>
                            <input
                                id="n2"
                                type="number"
                                value={n2}
                                onChange={(e) => setN2(e.target.value)}
                                placeholder="Digite a nota da N2"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="n3">N3</label>
                            <input
                                id="n3"
                                type="number"
                                value={n3}
                                onChange={(e) => setN3(e.target.value)}
                                placeholder="Digite a nota da N3"
                            />
                        </div>
                               

                        
                        <button className={styles.button} type="submit">
                            Editar Nota
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}