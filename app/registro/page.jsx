
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './registro.module.css';

export default function Registro() {
    const router = useRouter();

    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    function salvarRegistro(e) {
        e.preventDefault();

        alert('Registro realizado com sucesso!');

        router.push('/login');
    }

    return (
        <main className={styles.container}>
            <section className={styles.card}>

                <p className={styles.status}>
                    SISTEMA ESCOLAR ● SESI
                </p>

                <h1 className={styles.title}>
                    Registro
                </h1>

                <p className={styles.subtitle}>
                    Preencha seus dados para realizar o cadastro.
                </p>

                <form
                    className={styles.form}
                    onSubmit={salvarRegistro}
                >
                    <div className={styles.campo}>
                        <label>Usuário</label>

                        <input
                            type="text"
                            placeholder="Digite seu usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.campo}>
                        <label>Nome</label>

                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.campo}>
                        <label>Senha</label>

                        <input
                            type="password"
                            placeholder="Crie sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className={styles.botao}
                        type="submit"
                    >
                        Salvar registro
                    </button>
                </form>

                <div className={styles.link}>
                    Já possui cadastro?

                    <button onClick={() => router.push('/login')}>
                        Fazer login
                    </button>
                </div>

            </section>
        </main>
    );
}
