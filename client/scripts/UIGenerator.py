# Filename: UIGenerator.py

import os
import sys
import time

# Read sys.argv
print(sys.argv)
if len(sys.argv) < 2:
    print(__doc__)
    sys.exit()

source=[]
target_dir=''
comment=''
for arg in sys.argv:
    if arg.startswith('-s:'):
        source=arg[3:].split('|')
        print(source)
    elif arg.startswith('-t:'):
        target_dir=arg[3:]+os.sep
        print(target_dir)
    elif arg.startswith('-c:'):
        comment=arg[3:]
        print(comment)

for i in range(0, len(source)):
    source[i] = "\"" + source[i] + "\""
    print(source[i])

# Make the file name with the time and comment
today=target_dir+time.strftime('%Y%m%d')
now=time.strftime('%H%M%S')

if len(comment)==0: # check if a comment was entered
    target=today+os.sep+now+'.7z'
else:
    target=today+os.sep+now+'_'+\
            comment.replace(' ','_')+'.7z'

# Create the subdirectory by day
if not os.path.exists(today):
    os.mkdir(today) # make directory
    print('Successfully created directory',today)

# zip command
zip_command="7z a %s %s" %(target,' '.join(source))
print(zip_command)

# Run the backup
if os.system(zip_command)==0:
    print('Successful backup to',target)
else:
    print('Backup FAILED')