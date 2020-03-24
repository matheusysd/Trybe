#!/bin/bash

DIRECTORY=$1
if [ -d "$DIRECTORY" ]
  then
    FILES=`ls -l $DIRECTORY | wc -l`
    echo "The $DIRECTORY has $FILES files."
else
    echo "The argument $DIRECTORY isn't a directory!"
fi