namespace Ladesa.Messages.TimetableGenerator.v1;

model ServiceGenerateResponseResultError {
  error_code: string;
  error_message: string;
  additional_info: string | null;
}

model ServiceGenerateResponseResultSuccess {
  request_id: string;
  generate_request: GenerateRequest;
  generated_timetables: GeneratedTimetable[];
}

alias Result = ServiceGenerateResponseResultSuccess | ServiceGenerateResponseResultError;

model ServiceGenerateResponse {
  request_id: string;
  date_time_issued: string;
  result: Result;
}
