namespace Ladesa.Messages.TimetableGenerator.v1;

model AvailabilityRuleUnavailability {
  r_rule: string;
  date_start: string;
  date_end: string | null;
}

alias Rule = AvailabilityRuleUnavailability;

model Availability {
  rules: Rule[];
}
