import Link from "next/link";

export default function Header() {
    return (
        <header className="header">

            <div className="topBar">
                <span>SESI</span>
                <span>Educação</span>
                <span>Mirandópolis</span>
            </div>

            <div className="headerMain">

                <Link href="/" className="logo">

                    <div className="logoBox">
                        SESI
                    </div>

                    <div className="logoText">
                        <strong>SISTEMA ESCOLAR</strong>
                        <span>Mirandópolis</span>
                    </div>

                </Link>

                <nav className="nav">
                    <Link href="/">Início</Link>
                    <Link href="/cadalunos">Alunos</Link>
                    <Link href="/listalunos">Lista de Alunos</Link>
                    <Link href="/cadnotas">Notas</Link>
                    <Link href="/listnotas">Lista de Notas</Link>
                </nav>

            </div>

        </header>
    );
}