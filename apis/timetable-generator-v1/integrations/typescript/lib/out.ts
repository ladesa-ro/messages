// To parse this data:
//
//   import { Convert, TimeSlot, AvailabilityRuleUnavailability, Availability, Diary, GeneratedTimetable, TimetableGrid, TimetableGridSchedule, Group, Subject, Teacher, GenerateRequest, ServiceGenerateResponseResultError, ServiceGenerateResponseResultSuccess, ServiceGenerateResponse, WeekDay } from "./file";
//
//   const timeSlot = Convert.toTimeSlot(json);
//   const availabilityRuleUnavailability = Convert.toAvailabilityRuleUnavailability(json);
//   const availability = Convert.toAvailability(json);
//   const diary = Convert.toDiary(json);
//   const generatedTimetable = Convert.toGeneratedTimetable(json);
//   const timetableGrid = Convert.toTimetableGrid(json);
//   const timetableGridSchedule = Convert.toTimetableGridSchedule(json);
//   const group = Convert.toGroup(json);
//   const subject = Convert.toSubject(json);
//   const teacher = Convert.toTeacher(json);
//   const generateRequest = Convert.toGenerateRequest(json);
//   const serviceGenerateResponseResultError = Convert.toServiceGenerateResponseResultError(json);
//   const serviceGenerateResponseResultSuccess = Convert.toServiceGenerateResponseResultSuccess(json);
//   const serviceGenerateResponse = Convert.toServiceGenerateResponse(json);
//   const weekDay = Convert.toWeekDay(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface TimeSlot {
    end:   string;
    start: string;
    [property: string]: any;
}

export interface AvailabilityRuleUnavailability {
    date_end:   null | string;
    date_start: string;
    r_rule:     string;
    [property: string]: any;
}

export interface Availability {
    rules: RuleElement[];
    [property: string]: any;
}

export interface RuleElement {
    date_end:   null | string;
    date_start: string;
    r_rule:     string;
    [property: string]: any;
}

export interface Diary {
    group_id:   string;
    id:         string;
    remaining:  number;
    subject_id: string;
    teacher_id: string;
    week_limit: number;
    [property: string]: any;
}

export interface GeneratedTimetable {
    score:      number;
    time_table: TimeTable;
    [property: string]: any;
}

export interface TimeTable {
    date_end:   string;
    date_start: string;
    schedules:  ScheduleElement[];
    time_slots: TimeSlotElement[];
    [property: string]: any;
}

export interface ScheduleElement {
    date:       string;
    diary_id:   string;
    group_id:   string;
    teacher_id: string;
    time_slot:  TimeSlotElement;
    [property: string]: any;
}

export interface TimeSlotElement {
    end:   string;
    start: string;
    [property: string]: any;
}

export interface TimetableGrid {
    date_end:   string;
    date_start: string;
    schedules:  ScheduleElement[];
    time_slots: TimeSlotElement[];
    [property: string]: any;
}

export interface TimetableGridSchedule {
    date:       string;
    diary_id:   string;
    group_id:   string;
    teacher_id: string;
    time_slot:  TimeSlotElement;
    [property: string]: any;
}

export interface Group {
    availability: AvailabilityObject;
    id:           string;
    [property: string]: any;
}

export interface AvailabilityObject {
    rules: RuleElement[];
    [property: string]: any;
}

export interface Subject {
    id:   string;
    name: string;
    [property: string]: any;
}

export interface Teacher {
    availability: AvailabilityObject;
    id:           string;
    [property: string]: any;
}

export interface GenerateRequest {
    date_end:                string;
    date_start:              string;
    diarys:                  DiaryElement[];
    groups:                  GroupElement[];
    previous_timetable_grid: null | TimeTable;
    request_id:              string;
    teachers:                TeacherElement[];
    time_slots:              TimeSlotElement[];
    [property: string]: any;
}

export interface DiaryElement {
    group_id:   string;
    id:         string;
    remaining:  number;
    subject_id: string;
    teacher_id: string;
    week_limit: number;
    [property: string]: any;
}

export interface GroupElement {
    availability: AvailabilityObject;
    id:           string;
    [property: string]: any;
}

export interface TeacherElement {
    availability: AvailabilityObject;
    id:           string;
    [property: string]: any;
}

export interface ServiceGenerateResponseResultError {
    additional_info: null | string;
    error_code:      string;
    error_message:   string;
    [property: string]: any;
}

export interface ServiceGenerateResponseResultSuccess {
    generate_request:     GenerateRequestObject;
    generated_timetables: GeneratedTimetableElement[];
    request_id:           string;
    [property: string]: any;
}

export interface GenerateRequestObject {
    date_end:                string;
    date_start:              string;
    diarys:                  DiaryElement[];
    groups:                  GroupElement[];
    previous_timetable_grid: null | TimeTable;
    request_id:              string;
    teachers:                TeacherElement[];
    time_slots:              TimeSlotElement[];
    [property: string]: any;
}

export interface GeneratedTimetableElement {
    score:      number;
    time_table: TimeTable;
    [property: string]: any;
}

export interface ServiceGenerateResponse {
    date_time_issued: string;
    request_id:       string;
    result:           Result;
    [property: string]: any;
}

export interface Result {
    generate_request?:     GenerateRequestObject;
    generated_timetables?: GeneratedTimetableElement[];
    request_id?:           string;
    additional_info?:      null | string;
    error_code?:           string;
    error_message?:        string;
    [property: string]: any;
}

export enum WeekDay {
    Friday = "Friday",
    Monday = "Monday",
    Saturday = "Saturday",
    Sunday = "Sunday",
    Thursday = "Thursday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toTimeSlot(json: string): TimeSlot {
        return cast(JSON.parse(json), r("TimeSlot"));
    }

    public static timeSlotToJson(value: TimeSlot): string {
        return JSON.stringify(uncast(value, r("TimeSlot")), null, 2);
    }

    public static toAvailabilityRuleUnavailability(json: string): AvailabilityRuleUnavailability {
        return cast(JSON.parse(json), r("AvailabilityRuleUnavailability"));
    }

    public static availabilityRuleUnavailabilityToJson(value: AvailabilityRuleUnavailability): string {
        return JSON.stringify(uncast(value, r("AvailabilityRuleUnavailability")), null, 2);
    }

    public static toAvailability(json: string): Availability {
        return cast(JSON.parse(json), r("Availability"));
    }

    public static availabilityToJson(value: Availability): string {
        return JSON.stringify(uncast(value, r("Availability")), null, 2);
    }

    public static toDiary(json: string): Diary {
        return cast(JSON.parse(json), r("Diary"));
    }

    public static diaryToJson(value: Diary): string {
        return JSON.stringify(uncast(value, r("Diary")), null, 2);
    }

    public static toGeneratedTimetable(json: string): GeneratedTimetable {
        return cast(JSON.parse(json), r("GeneratedTimetable"));
    }

    public static generatedTimetableToJson(value: GeneratedTimetable): string {
        return JSON.stringify(uncast(value, r("GeneratedTimetable")), null, 2);
    }

    public static toTimetableGrid(json: string): TimetableGrid {
        return cast(JSON.parse(json), r("TimetableGrid"));
    }

    public static timetableGridToJson(value: TimetableGrid): string {
        return JSON.stringify(uncast(value, r("TimetableGrid")), null, 2);
    }

    public static toTimetableGridSchedule(json: string): TimetableGridSchedule {
        return cast(JSON.parse(json), r("TimetableGridSchedule"));
    }

    public static timetableGridScheduleToJson(value: TimetableGridSchedule): string {
        return JSON.stringify(uncast(value, r("TimetableGridSchedule")), null, 2);
    }

    public static toGroup(json: string): Group {
        return cast(JSON.parse(json), r("Group"));
    }

    public static groupToJson(value: Group): string {
        return JSON.stringify(uncast(value, r("Group")), null, 2);
    }

    public static toSubject(json: string): Subject {
        return cast(JSON.parse(json), r("Subject"));
    }

    public static subjectToJson(value: Subject): string {
        return JSON.stringify(uncast(value, r("Subject")), null, 2);
    }

    public static toTeacher(json: string): Teacher {
        return cast(JSON.parse(json), r("Teacher"));
    }

    public static teacherToJson(value: Teacher): string {
        return JSON.stringify(uncast(value, r("Teacher")), null, 2);
    }

    public static toGenerateRequest(json: string): GenerateRequest {
        return cast(JSON.parse(json), r("GenerateRequest"));
    }

    public static generateRequestToJson(value: GenerateRequest): string {
        return JSON.stringify(uncast(value, r("GenerateRequest")), null, 2);
    }

    public static toServiceGenerateResponseResultError(json: string): ServiceGenerateResponseResultError {
        return cast(JSON.parse(json), r("ServiceGenerateResponseResultError"));
    }

    public static serviceGenerateResponseResultErrorToJson(value: ServiceGenerateResponseResultError): string {
        return JSON.stringify(uncast(value, r("ServiceGenerateResponseResultError")), null, 2);
    }

    public static toServiceGenerateResponseResultSuccess(json: string): ServiceGenerateResponseResultSuccess {
        return cast(JSON.parse(json), r("ServiceGenerateResponseResultSuccess"));
    }

    public static serviceGenerateResponseResultSuccessToJson(value: ServiceGenerateResponseResultSuccess): string {
        return JSON.stringify(uncast(value, r("ServiceGenerateResponseResultSuccess")), null, 2);
    }

    public static toServiceGenerateResponse(json: string): ServiceGenerateResponse {
        return cast(JSON.parse(json), r("ServiceGenerateResponse"));
    }

    public static serviceGenerateResponseToJson(value: ServiceGenerateResponse): string {
        return JSON.stringify(uncast(value, r("ServiceGenerateResponse")), null, 2);
    }

    public static toWeekDay(json: string): WeekDay {
        return cast(JSON.parse(json), r("WeekDay"));
    }

    public static weekDayToJson(value: WeekDay): string {
        return JSON.stringify(uncast(value, r("WeekDay")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "TimeSlot": o([
        { json: "end", js: "end", typ: "" },
        { json: "start", js: "start", typ: "" },
    ], "any"),
    "AvailabilityRuleUnavailability": o([
        { json: "date_end", js: "date_end", typ: u(null, "") },
        { json: "date_start", js: "date_start", typ: "" },
        { json: "r_rule", js: "r_rule", typ: "" },
    ], "any"),
    "Availability": o([
        { json: "rules", js: "rules", typ: a(r("RuleElement")) },
    ], "any"),
    "RuleElement": o([
        { json: "date_end", js: "date_end", typ: u(null, "") },
        { json: "date_start", js: "date_start", typ: "" },
        { json: "r_rule", js: "r_rule", typ: "" },
    ], "any"),
    "Diary": o([
        { json: "group_id", js: "group_id", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "remaining", js: "remaining", typ: 0 },
        { json: "subject_id", js: "subject_id", typ: "" },
        { json: "teacher_id", js: "teacher_id", typ: "" },
        { json: "week_limit", js: "week_limit", typ: 0 },
    ], "any"),
    "GeneratedTimetable": o([
        { json: "score", js: "score", typ: 0 },
        { json: "time_table", js: "time_table", typ: r("TimeTable") },
    ], "any"),
    "TimeTable": o([
        { json: "date_end", js: "date_end", typ: "" },
        { json: "date_start", js: "date_start", typ: "" },
        { json: "schedules", js: "schedules", typ: a(r("ScheduleElement")) },
        { json: "time_slots", js: "time_slots", typ: a(r("TimeSlotElement")) },
    ], "any"),
    "ScheduleElement": o([
        { json: "date", js: "date", typ: "" },
        { json: "diary_id", js: "diary_id", typ: "" },
        { json: "group_id", js: "group_id", typ: "" },
        { json: "teacher_id", js: "teacher_id", typ: "" },
        { json: "time_slot", js: "time_slot", typ: r("TimeSlotElement") },
    ], "any"),
    "TimeSlotElement": o([
        { json: "end", js: "end", typ: "" },
        { json: "start", js: "start", typ: "" },
    ], "any"),
    "TimetableGrid": o([
        { json: "date_end", js: "date_end", typ: "" },
        { json: "date_start", js: "date_start", typ: "" },
        { json: "schedules", js: "schedules", typ: a(r("ScheduleElement")) },
        { json: "time_slots", js: "time_slots", typ: a(r("TimeSlotElement")) },
    ], "any"),
    "TimetableGridSchedule": o([
        { json: "date", js: "date", typ: "" },
        { json: "diary_id", js: "diary_id", typ: "" },
        { json: "group_id", js: "group_id", typ: "" },
        { json: "teacher_id", js: "teacher_id", typ: "" },
        { json: "time_slot", js: "time_slot", typ: r("TimeSlotElement") },
    ], "any"),
    "Group": o([
        { json: "availability", js: "availability", typ: r("AvailabilityObject") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "AvailabilityObject": o([
        { json: "rules", js: "rules", typ: a(r("RuleElement")) },
    ], "any"),
    "Subject": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "Teacher": o([
        { json: "availability", js: "availability", typ: r("AvailabilityObject") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "GenerateRequest": o([
        { json: "date_end", js: "date_end", typ: "" },
        { json: "date_start", js: "date_start", typ: "" },
        { json: "diarys", js: "diarys", typ: a(r("DiaryElement")) },
        { json: "groups", js: "groups", typ: a(r("GroupElement")) },
        { json: "previous_timetable_grid", js: "previous_timetable_grid", typ: u(null, r("TimeTable")) },
        { json: "request_id", js: "request_id", typ: "" },
        { json: "teachers", js: "teachers", typ: a(r("TeacherElement")) },
        { json: "time_slots", js: "time_slots", typ: a(r("TimeSlotElement")) },
    ], "any"),
    "DiaryElement": o([
        { json: "group_id", js: "group_id", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "remaining", js: "remaining", typ: 0 },
        { json: "subject_id", js: "subject_id", typ: "" },
        { json: "teacher_id", js: "teacher_id", typ: "" },
        { json: "week_limit", js: "week_limit", typ: 0 },
    ], "any"),
    "GroupElement": o([
        { json: "availability", js: "availability", typ: r("AvailabilityObject") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "TeacherElement": o([
        { json: "availability", js: "availability", typ: r("AvailabilityObject") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "ServiceGenerateResponseResultError": o([
        { json: "additional_info", js: "additional_info", typ: u(null, "") },
        { json: "error_code", js: "error_code", typ: "" },
        { json: "error_message", js: "error_message", typ: "" },
    ], "any"),
    "ServiceGenerateResponseResultSuccess": o([
        { json: "generate_request", js: "generate_request", typ: r("GenerateRequestObject") },
        { json: "generated_timetables", js: "generated_timetables", typ: a(r("GeneratedTimetableElement")) },
        { json: "request_id", js: "request_id", typ: "" },
    ], "any"),
    "GenerateRequestObject": o([
        { json: "date_end", js: "date_end", typ: "" },
        { json: "date_start", js: "date_start", typ: "" },
        { json: "diarys", js: "diarys", typ: a(r("DiaryElement")) },
        { json: "groups", js: "groups", typ: a(r("GroupElement")) },
        { json: "previous_timetable_grid", js: "previous_timetable_grid", typ: u(null, r("TimeTable")) },
        { json: "request_id", js: "request_id", typ: "" },
        { json: "teachers", js: "teachers", typ: a(r("TeacherElement")) },
        { json: "time_slots", js: "time_slots", typ: a(r("TimeSlotElement")) },
    ], "any"),
    "GeneratedTimetableElement": o([
        { json: "score", js: "score", typ: 0 },
        { json: "time_table", js: "time_table", typ: r("TimeTable") },
    ], "any"),
    "ServiceGenerateResponse": o([
        { json: "date_time_issued", js: "date_time_issued", typ: "" },
        { json: "request_id", js: "request_id", typ: "" },
        { json: "result", js: "result", typ: r("Result") },
    ], "any"),
    "Result": o([
        { json: "generate_request", js: "generate_request", typ: u(undefined, r("GenerateRequestObject")) },
        { json: "generated_timetables", js: "generated_timetables", typ: u(undefined, a(r("GeneratedTimetableElement"))) },
        { json: "request_id", js: "request_id", typ: u(undefined, "") },
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, "")) },
        { json: "error_code", js: "error_code", typ: u(undefined, "") },
        { json: "error_message", js: "error_message", typ: u(undefined, "") },
    ], "any"),
    "WeekDay": [
        "Friday",
        "Monday",
        "Saturday",
        "Sunday",
        "Thursday",
        "Tuesday",
        "Wednesday",
    ],
};
