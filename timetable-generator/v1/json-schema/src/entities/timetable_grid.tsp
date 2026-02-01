namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Grade horária completa para um período")
model TimetableGrid {
  @doc("Data de início do período")
  @format("date")
  date_start: string;

  @doc("Data de fim do período")
  @format("date")
  date_end: string;

  @doc("Slots de tempo disponíveis")
  time_slots: TimeSlot[];

  @doc("Lista de agendamentos na grade")
  schedules: TimetableGridSchedule[];
}
