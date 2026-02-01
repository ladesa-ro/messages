namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Requisição para geração de grade horária")
model GenerateRequest {
  @doc("Identificador único da requisição")
  request_id: string;

  @doc("Data de início do período da grade")
  @format("date")
  date_start: string;

  @doc("Data de fim do período da grade")
  @format("date")
  date_end: string;

  @doc("Lista de turmas a serem consideradas")
  groups: Group[];

  @doc("Lista de professores disponíveis")
  teachers: Teacher[];

  @doc("Lista de diários (vínculos professor-turma-disciplina)")
  diaries: Diary[];

  @doc("Slots de tempo disponíveis para aulas")
  time_slots: TimeSlot[];

  @doc("Grade horária anterior (opcional, para otimização incremental)")
  previous_timetable_grid: TimetableGrid | null;
}
