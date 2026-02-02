import "@typespec/json-schema";

import "./vos/time_slot.tsp";
import "./vos/weekday.tsp";

import "./entities/availability.tsp";
import "./entities/diary.tsp";
import "./entities/generated_timetable.tsp";
import "./entities/group.tsp";
import "./entities/subject.tsp";
import "./entities/teacher.tsp";
import "./entities/timetable_grid_schedule.tsp";
import "./entities/timetable_grid.tsp";

import "./commands/generate/generate_request.tsp";
import "./commands/generate/generate_response.tsp";

@doc("Mensagens do serviço de geração de grade horária LADESA v1")
@TypeSpec.JsonSchema.jsonSchema
namespace Ladesa.Messages.TimetableGenerator.v1;
