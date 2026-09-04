'use client';

import Header from "../components/header";

export default function ListAlunos() {
    return (
        <>
            <Header />

            <h2>Lista de Alunos</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Série</th>
                        <th>RA</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Ana</td>
                        <td>17</td>
                        <td>3b</td>
                        <td>909030</td>

                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}