#!/bin/bash

FILE="/home/Documents/Trybe/my-shell-scripts/README.md
if [ -e "$FILE" ]
  then
     echo "The path $FILE exists!"
fi
if [ -w "$FILE" ]
  then
    echo "You can modify $FILE"
  else
    echo "You CANT modify $FILE"
fi
  