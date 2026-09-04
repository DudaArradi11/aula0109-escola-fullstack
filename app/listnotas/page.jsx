'use client';

import Header from "../components/header";

export default function ListNotas(){
    return(
        <>
            <Header />

            <main className="lista-page">

                <h2>Lista de Notas</h2>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome aluno</th>
                            <th>T1 (trabalho 1)</th>
                            <th>T2 (trabalho 2)</th>
                            <th>N1 (nota 1)</th>
                            <th>N2 (nota 2)</th>
                            <th>N3 (nota 3)</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Ana</td>
                            <td>8,5</td>
                            <td>9,0</td>
                            <td>7,5</td>
                            <td>8,0</td>
                            <td>9,0</td>

                            <td>
                                <div className="acoes">
                                    <button className="btn-editar">
                                        Editar
                                    </button>

                                    <button className="btn-deletar">
                                        Deletar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </main>
        </>
    )
}