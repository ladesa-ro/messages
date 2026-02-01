namespace Ladesa.Messages.TimetableGenerator.v1;

model TimeSlot {
  @format("time")
  start: string;

  @format("time")
  end: string;
}
