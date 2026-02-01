namespace Ladesa.Messages.TimetableGenerator.v1;

@doc("Grade horária gerada com sua pontuação de qualidade")
model GeneratedTimetable {
  @doc("A grade horária gerada")
  time_table: TimetableGrid;

  @doc("Pontuação de qualidade da grade (maior = melhor)")
  score: uint16;
}
