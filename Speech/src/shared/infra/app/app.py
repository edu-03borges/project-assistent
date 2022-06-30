import os
import sys

dirTemp = os.path.abspath(os.getcwd())

sys.path.append('{}\\src\\modules\\infra\\speechToText'.format(dirTemp))

print('\n\n',dirTemp, '\n\n')

