namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Resultado de erro na geração de grade horária")
model ServiceGenerateResponseResultError {
  @doc("Código do erro")
  error_code: string;

  @doc("Mensagem descritiva do erro")
  error_message: string;

  @doc("Informações adicionais sobre o erro")
  additional_info: string | null;
}

@doc("Resultado de sucesso na geração de grade horária")
model ServiceGenerateResponseResultSuccess {
  @doc("Identificador da requisição original")
  request_id: string;

  @doc("Requisição que originou a geração")
  generate_request: GenerateRequest;

  @doc("Lista de grades horárias geradas, ordenadas por score")
  generated_timetables: GeneratedTimetable[];
}

alias Result = ServiceGenerateResponseResultSuccess | ServiceGenerateResponseResultError;

@doc("Resposta do serviço de geração de grade horária")
model ServiceGenerateResponse {
  @doc("Identificador da requisição")
  request_id: string;

  @doc("Data e hora de emissão da resposta")
  @format("date-time")
  date_time_issued: string;

  @doc("Resultado da operação")
  result: Result;
}
