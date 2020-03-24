#!/bin/bash

echo "Enter some file/directory path:"
read FILE
if [ -f "$FILE" ]
  then
    echo "$FILE is a common file."
elif [ -d "$FILE" ]
  then
    echo "$FILE is a directory."
else
    echo "$FILE is something else."
fi
ls -l $FILE
