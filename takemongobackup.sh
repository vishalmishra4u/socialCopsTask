#!/bin/bash
# --------------------------------------------------------------------------
# Author: Vishal
# Title: takeMongoBackup.sh
#
# Description: Running this shell script will take mondodump of database 
#              specified in MONGO_DATABASE parameter and move the mongodump
#              to DUMP_PATH
# --------------------------------------------------------------------------
mkdir -p /home/vishal/my_projects/socialcops-task/dbDump

MONGO_DATABASE="socialCopsDb"

DUMP_PATH="/home/vishal/my_projects/socialcops-task/dbDump"

BACKUP_NAME="socialCopsDBBackup"`date +"%F-%T"`

mongodump -d $MONGO_DATABASE -o $BACKUP_NAME

mv $BACKUP_NAME $DUMP_PATH

