#!/usr/bin/env bash

bun x quicktype \
  --src-lang schema \
  /input/schema.json#/\$defs/ \
  -o /output/Messages.cs \
  --namespace Ladesa.Messages.TimetableGenerator.V1 \
  --framework SystemTextJson \
;
