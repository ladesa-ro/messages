namespace Ladesa.Messages.TimetableGenerator.v1;

model Diary {
  id: string;
  group_id: string;
  teacher_id: string;
  subject_id: string;
  week_limit: uint16;
  remaining: uint16;
}
