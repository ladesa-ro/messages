namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Um agendamento específico na grade horária")
model TimetableGridSchedule {
  @doc("Data do agendamento")
  @format("date")
  date: string;

  @doc("ID do diário (vínculo professor-turma-disciplina)")
  diary_id: string;

  @doc("ID do professor responsável")
  teacher_id: string;

  @doc("ID da turma")
  group_id: string;

  @doc("Slot de tempo da aula")
  time_slot: TimeSlot;
}
