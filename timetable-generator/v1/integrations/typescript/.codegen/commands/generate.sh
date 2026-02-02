#!/usr/bin/env bash

bun x quicktype \
  --src-lang schema \
  /input/schema.json#/\$defs/ \
  -o /output/out.ts \
;
