
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function Login() {
    const router = useRouter();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function entrarSistema(e) {
        e.preventDefault();

        router.push('/');
    }

    return (
        <main className={styles.container}>
            <section className={styles.card}>

                <p className={styles.status}>
                    SISTEMA ESCOLAR ● SESI
                </p>

                <h1 className={styles.title}>
                    Login
                </h1>

                <p className={styles.subtitle}>
                    Entre com seus dados para acessar o sistema.
                </p>

                <form
                    className={styles.form}
                    onSubmit={entrarSistema}
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
                        <label>Senha</label>

                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className={styles.botao}
                        type="submit"
                    >
                        Entrar no sistema
                    </button>
                </form>

                <div className={styles.link}>
                    Ainda não possui cadastro?

                    <button onClick={() => router.push('/registro')}>
                        Fazer registro
                    </button>
                </div>

            </section>
        </main>
    );
}
