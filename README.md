Les réponses à l'examen

1    Questions de cours
1. Afin d’indiquer à Angular que je souhaite faire des requêtes http dans mon application,
   quel module dois-je impérativement importer dans le app.module.ts ?

le HttpClientModule


2. Que permet de faire cette ligne de code :
   [class.red]="compteur < 0"

lorsque que le compteur passe à moin de 0 alors on applique la class rouge (ecriture? couleur de bg?)


3. Je viens de faire un « git clone » sur un projet Angular, je dois lancer une commande
   afin de récupérer le dossier « node_modules », lequel ?

npm install


4. Quelle est la différence entre let et const pour la déclaration de variables ?

let est une variable modifiable
const est non modifiable, mais on doit affecter sa valeur lors de la declaration

5. Un component est constitué de 4 fichiers distinct, quels sont leur rôle respectif ?
   Préciser leur extension de fichier à chaque fois (3 me suffisent)

   component.html  ==> Template HTML du composant ==> ecrire le HTML de notre page
   component.ts ==> Classe TypeScript du composant ==> ecrire le angular/typescript de notre page
   component.scss ==> Fichier CSS ou SCSS du composant en fonction du choix fait lors de la config ==> ecrire le CSS de notre page
   component.spc.ts ==>  Squelette des tests unitaires du composant  ==> ne pas toucher


6. Je suis dans la partie html d’un component, j’écris ce code :
   <button (click)=’’superFonctionDeClic()’’></ button>
   Que fait-il ?

il permet d'activer au click la fonction  superFonctionDeClic


7. Avec quelle commande créée-t-on un component ?

ng g c NOM_COMPONENT


8. Dans une classe, je peux préciser un indice de visibilité sur un attribut ou une méthode,
   il en existe 3 lesquels ?
   Que font-ils ?

private => visible uniquement dans la classe dans laquelle il ce trouve
public => visible partout dans le projet
protected => visible dans la classe en cours et sur ses filles (notion d'héritage)

