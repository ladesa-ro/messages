namespace Ladesa.Messages.TimetableGenerator.v1;

model TimetableGridSchedule {
  date: string;
  diary_id: string;
  teacher_id: string;
  group_id: string;
  time_slot: TimeSlot;
}
