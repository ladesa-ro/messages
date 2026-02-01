namespace Ladesa.Messages.TimetableGenerator.v1;

model TimetableGrid {
  date_start: string;
  date_end: string;
  time_slots: TimeSlot[];
  schedules: TimetableGridSchedule[];
}
