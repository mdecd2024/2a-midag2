import os
if not os.path.exists("/home/runner/.ssh"): 
    os.makedirs("/home/runner/.ssh") 
os.system("mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa")
os.system("mv ./downloads/config.txt /home/runner/.ssh/config")
os.system("chmod og-rwx /home/runner/.ssh/id_rsa")