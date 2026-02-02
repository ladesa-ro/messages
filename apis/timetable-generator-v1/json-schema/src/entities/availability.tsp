namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Regra de indisponibilidade baseada em RRule (RFC 5545)")
model AvailabilityRuleUnavailability {
  @doc("Regra de recorrência no formato RRule (RFC 5545)")
  r_rule: string;

  @doc("Data de início da vigência da regra")
  @format("date")
  date_start: string;

  @doc("Data de fim da vigência da regra (null = sem fim)")
  @format("date")
  date_end: string | null;
}

@doc("Conjunto de regras de disponibilidade")
model Availability {
  @doc("Lista de regras de indisponibilidade")
  rules: AvailabilityRuleUnavailability[];
}
