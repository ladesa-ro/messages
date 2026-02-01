namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Representa uma disciplina/matéria")
model Subject {
  @doc("Identificador único da disciplina")
  id: string;

  @doc("Nome da disciplina")
  name: string;
}
