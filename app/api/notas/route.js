
import db from "../../db/banco";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const sql = db.prepare(`
            SELECT
                notas.id_notas,
                alunos.nome,
                alunos.ra,
                notas.t1,
                notas.t2,
                notas.n1,
                notas.n2,
                notas.n3
            FROM notas
            INNER JOIN alunos
                ON notas.aluno_id = alunos.id_aluno
            ORDER BY alunos.nome
        `);

        const notas = sql.all();

        return NextResponse.json(notas);
    } catch (error) {
        console.error("Erro ao listar notas", error);
        return NextResponse.json(
            { erro: "Erro ao listar notas." },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            INSERT INTO notas (
                aluno_id, t1, t2, n1, n2, n3
            )
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        sql.run(
            dados.aluno_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3
        );

        return NextResponse.json({
            mensagem: "Nota salva com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao salvar nota", error);
        return NextResponse.json(
            { erro: "Erro ao salvar nota." },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            UPDATE notas
            SET aluno_id = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
            WHERE id_notas = ?
        `);

        const resultado = sql.run(
            dados.aluno_id,
            dados.t1,
            dados.t2,
            dados.n1,
            dados.n2,
            dados.n3,
            dados.id_nota
        );

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Nota não encontrada." },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Nota atualizada com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao editar nota", error);
        return NextResponse.json(
            { erro: "Erro ao editar nota." },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        const dados = await request.json();

        const sql = db.prepare(`
            DELETE FROM notas
            WHERE id_notas = ?
        `);

        const resultado = sql.run(dados.id_notas ?? dados.id);

        if (resultado.changes === 0) {
            return NextResponse.json(
                { erro: "Nota não encontrada." },
                { status: 404 }
            );
        }

        return NextResponse.json({
            mensagem: "Nota excluída com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao excluir nota", error);
        return NextResponse.json(
            { erro: "Erro ao excluir nota." },
            { status: 500 }
        );
    }
}