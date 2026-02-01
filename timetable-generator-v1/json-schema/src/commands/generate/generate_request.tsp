namespace Ladesa.Messages.TimetableGenerator.v1;

model GenerateRequest {
  request_id: string;
  date_start: string;
  date_end: string;
  groups: Group[];
  teachers: Teacher[];
  diarys: Diary[];
  time_slots: TimeSlot[];
  previous_timetable_grid: TimetableGrid | null;
}
