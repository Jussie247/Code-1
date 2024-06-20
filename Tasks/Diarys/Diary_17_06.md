# Code-1
- **Git**: Git is a DevOps tool with the task of source code management. Git is used to track changes in the source code, enabling multiple developers to work together on nonlinear development

- **DevOps**: DevOps can be best explained as people working together to conceive, build and deliver secure software at top speed. DevOps practices enable software development (dev) and operations (ops) teams to accelerate delivery through automation, collaboration, fast feedback, and iterative improvement.

- **Node.js**: Node.js  is a free open-source, cross-platform javaScript runtime environment that lets developers create servers, web apps, command line tools and scripts

- **Typescript**: Typescript is a strongly typed programming language that’s builds on JavaScript
adds additional syntax to JavaScript, converts code to JavaScript which runs anywhere JavaScript runs and it understand JavaScript and uses type inference to give you great tooling

- **Visual Studio Code**: Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running and version control.

- **VSC Extensions**:

- **ESlint**: statically analyzes your code to quickly find problems. It us built into most text editors and you can run ESlint as part of your continuous integration  pipeline

- **Git Graph**: A Git Graph is a pictorial representation of git commits and git actions (commands) on various branches. Makes it easier to visualize how git flow works

## Tipps: 
- Five ppl working on the same file isnt optimal!!!!
- **git status** ins terminal um zu sehen in welcher branch man ist





## Permission levels for a personal account repository
Owner of the repository has full control over the repository and in addition can perform any action the collaborators can do.
Some Owner exclusive permissions are.
-	Inviting and removing Collaborators
-	Change the visibility of the repository 
-	Delete the repository

Collaborators of the repository can pull (read) the contents and push (write) changes to the repository in addition they can perform the following actions:
-	Rename a branch other than the default branch
-	Create, assign, close and re-open issues in the repository
-	Create, merge, and close pull requests in the repository

## First Lession
Today we built our first custom repository for ourselves to collect the notes about the course in a markdown page. We then did the same for our team. We put names, links to our profiles and pictures in our team page. We learnt that it is very annoying to work together in a markdown, because several people cann work on it, but only on person can save it, while the progress of the others has to be deleted

### Stage:

Beim Stagen (auch bekannt als "add") markierst du Änderungen in deinem Arbeitsverzeichnis für den nächsten Commit. Dies geschieht durch den Befehl git add, der Dateien oder Änderungen zur Staging-Area hinzufügt.
Beispiel:**git add datei.txt**

### Commit:

Ein Commit speichert alle gestagten Änderungen dauerhaft im lokalen Repository. Ein Commit enthält eine Nachricht, die beschreibt, was geändert wurde.
Beispiel: **git commit -m "Beschreibung der Änderungen"**

### Fetch:

Beim Fetch holt Git alle Änderungen von einem entfernten Repository (Remote-Repository), ohne sie mit deinem lokalen Branch zu mergen. Dies aktualisiert deine lokalen Referenzen, aber dein Arbeitsverzeichnis bleibt unverändert.
Beispiel: **git fetch**

### Pull:

Pull kombiniert Fetch und Merge. Es holt Änderungen von einem entfernten Repository und integriert sie in deinen aktuellen Branch. Dies geschieht oft mit dem Ziel, das lokale Repository mit dem Remote-Repository zu synchronisieren.
Beispiel: **git pull**

### Push:

Beim Push sendest du deine lokalen Commits zu einem entfernten Repository. Dies veröffentlicht deine Änderungen und macht sie für andere Teammitglieder verfügbar.
Beispiel: **git push**

### Merge:

Merge kombiniert Änderungen von verschiedenen Branches. Wenn du z.B. einen Feature-Branch in den Haupt-Branch integrieren willst, benutzt du git merge, um die Änderungen zusammenzuführen.
Beispiel: **git merge feature-branch**
