#!/bin/bash

FILES=$@

for FILE in $FILES
  do
    if [ -f "$FILE" ]
      then
        echo "$FILE is a commom file"
    elif [ -d "$FILE" ]
      then
        echo "$FILE is a directory"
    else
        echo "$FILE is something else"
    fi
    ls -l $FILE
  done
