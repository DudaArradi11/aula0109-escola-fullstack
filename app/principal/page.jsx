import Link from "next/link";
import Header from "../components/header";
import styles from "../page.module.css";

export default function Principal() {
    return (
        <>
            <Header />

            <main className={styles.main}>

                {/* BANNER PRINCIPAL */}

                <section className={styles.hero}>

                    <div className={styles.heroContent}>

                        <span className={styles.tag}>
                            SISTEMA ESCOLAR SESI
                        </span>

                        <h1>
                            Bem-vindo ao
                            <strong>Sistema Escolar</strong>
                        </h1>

                        <p>
                            Aqui você pode consultar alunos, cadastrar
                            informações e acompanhar as notas de forma
                            simples e organizada.
                        </p>

                        <div className={styles.buttons}>

                            <Link
                                href="/listalunos"
                                className={styles.primaryButton}
                            >
                                Ver alunos
                            </Link>

                            <Link
                                href="/listnotas"
                                className={styles.secondaryButton}
                            >
                                Consultar notas
                            </Link>

                        </div>

                    </div>


                    {/* DECORAÇÃO */}

                    <div className={styles.decoration}>

                        <div className={styles.bigCircle}>
                            <span>SESI</span>
                        </div>

                        <div className={styles.yellowCircle}></div>

                        <div className={styles.pinkSquare}></div>

                        <div className={styles.smallStar}>
                            ✦
                        </div>

                    </div>

                </section>


                {/* ACESSOS RÁPIDOS */}

                <section className={styles.quickSection}>

                    <div className={styles.sectionHeader}>

                        <div>
                            <span>ACESSO RÁPIDO</span>
                            <h2>O que você precisa?</h2>
                        </div>

                        <div className={styles.line}></div>

                    </div>


                    <div className={styles.cards}>

                        <Link
                            href="/cadalunos"
                            className={styles.card}
                        >

                            <div
                                className={`${styles.icon} ${styles.yellowIcon}`}
                            >
                                👨‍🎓
                            </div>

                            <div className={styles.cardContent}>

                                <h3>
                                    Cadastrar aluno
                                </h3>

                                <p>
                                    Cadastre um novo aluno no sistema escolar.
                                </p>

                            </div>

                            <span className={styles.arrow}>
                                →
                            </span>

                        </Link>


                        <Link
                            href="/listalunos"
                            className={styles.card}
                        >

                            <div
                                className={`${styles.icon} ${styles.pinkIcon}`}
                            >
                                📋
                            </div>

                            <div className={styles.cardContent}>

                                <h3>
                                    Lista de alunos
                                </h3>

                                <p>
                                    Consulte todos os alunos cadastrados.
                                </p>

                            </div>

                            <span className={styles.arrow}>
                                →
                            </span>

                        </Link>


                        <Link
                            href="/cadnotas"
                            className={styles.card}
                        >

                            <div
                                className={`${styles.icon} ${styles.yellowIcon}`}
                            >
                                📝
                            </div>

                            <div className={styles.cardContent}>

                                <h3>
                                    Cadastrar notas
                                </h3>

                                <p>
                                    Registre as notas e avaliações dos alunos.
                                </p>

                            </div>

                            <span className={styles.arrow}>
                                →
                            </span>

                        </Link>


                        <Link
                            href="/listnotas"
                            className={styles.card}
                        >

                            <div
                                className={`${styles.icon} ${styles.pinkIcon}`}
                            >
                                📊
                            </div>

                            <div className={styles.cardContent}>

                                <h3>
                                    Lista de notas
                                </h3>

                                <p>
                                    Visualize e consulte as notas registradas.
                                </p>

                            </div>

                            <span className={styles.arrow}>
                                →
                            </span>

                        </Link>

                    </div>

                </section>


                {/* ÁREA INFORMATIVA */}

                <section className={styles.infoSection}>

                    <div className={styles.infoDecoration}>
                        ✦
                    </div>

                    <div className={styles.infoText}>

                        <span>
                            SESI MIRANDÓPOLIS
                        </span>

                        <h2>
                            Tudo organizado em um só lugar.
                        </h2>

                        <p>
                            Utilize o sistema para facilitar o gerenciamento
                            das informações escolares e encontrar rapidamente
                            o que você precisa.
                        </p>

                    </div>

                </section>


                {/* RODAPÉ */}

                <footer className={styles.footer}>

                    <div>
                        <strong>SESI</strong>
                        <span>Sistema Escolar</span>
                    </div>

                    <p>
                        Sistema Escolar SESI Mirandópolis
                    </p>

                </footer>

            </main>
        </>
    );
}