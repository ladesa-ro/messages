namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Slot de tempo representando um período de aula")
model TimeSlot {
  @doc("Horário de início (formato HH:mm:ss)")
  @format("time")
  start: string;

  @doc("Horário de término (formato HH:mm:ss)")
  @format("time")
  end: string;
}
