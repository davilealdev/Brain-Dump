import os
import subprocess
os.system("cls")

print("██████╗ ██████╗  █████╗ ██╗███╗   ██╗██████╗ ██╗   ██╗███╗   ███╗██████╗ ██╗")
print("██╔══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔══██╗██║   ██║████╗ ████║██╔══██╗██║")
print("██████╔╝██████╔╝███████║██║██╔██╗ ██║██║  ██║██║   ██║██╔████╔██║██████╔╝██║")
print("██╔══██╗██╔══██╗██╔══██║██║██║╚██╗██║██║  ██║██║   ██║██║╚██╔╝██║██╔═══╝ ╚═╝")
print("██████╔╝██║  ██║██║  ██║██║██║ ╚████║██████╔╝╚██████╔╝██║ ╚═╝ ██║██║     ██╗")
print("╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝")

print("="*75)


numeroCommits = subprocess.run(
    ["git", "rev-list", "--count", "HEAD"],
    capture_output=True,
    text=True
)
num_commits = int(numeroCommits.stdout.strip())

nomeCommit = subprocess.run(
    ["git", "log", "-1", "--pretty=%s"],
    capture_output=True,
    text=True
)

ultimo_commit = nomeCommit.stdout.strip()
print("VERSÃO ATUAL: 1.3")
print("STATUS DA VERSÃO: Produzindo a Versão 1.3")
print("NÚMERO DE COMMITS: ", num_commits)
print("NOME DO ULTIMO COMMIT: ",ultimo_commit)
print("="*75)

