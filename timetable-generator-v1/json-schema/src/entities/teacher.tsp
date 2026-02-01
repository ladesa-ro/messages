namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Representa um professor com suas regras de disponibilidade")
model Teacher {
  @doc("Identificador único do professor")
  id: string;

  @doc("Regras de disponibilidade do professor")
  availability: Availability;
}
