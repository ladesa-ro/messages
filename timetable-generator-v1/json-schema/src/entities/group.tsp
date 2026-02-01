namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Representa uma turma com suas regras de disponibilidade")
model Group {
  @doc("Identificador único da turma")
  id: string;

  @doc("Regras de disponibilidade da turma")
  availability: Availability;
}
