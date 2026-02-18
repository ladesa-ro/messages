namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Diário: vínculo entre professor, turma e disciplina com limites semanais")
model Diary {
  @doc("Identificador único do diário")
  id: string;

  @doc("ID da turma vinculada")
  group_id: string;

  @doc("ID do professor responsável")
  teacher_id: string;

  @doc("ID da disciplina")
  subject_id: string;

  @doc("Limite de aulas por semana")
  week_limit: uint16;

  @doc("Quantidade de aulas restantes a serem alocadas")
  remaining: uint16;
}
