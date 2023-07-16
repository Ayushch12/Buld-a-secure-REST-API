
# Building of a secure API for a food review app

Cette application fournit diverses fonctionnalités permettant aux utilisateurs d'examiner les produits, de télécharger des images, d'exprimer leurs préférences en aimant ou en n'aimant pas les produits ou les images, et plus encore. Il sert de plate-forme de commerce électronique, offrant une gamme de fonctionnalités pour améliorer l'expérience utilisateur.



<img width="1275" alt="Screenshot 2023-06-02 at 15 33 01" src="https://github.com/Ayushch12/Buld-a-secure-API/assets/96380226/bd81421e-7aae-453a-b99f-750644404c7c">


<img width="1267" alt="Screenshot 2023-06-02 at 15 32 07" src="https://github.com/Ayushch12/Buld-a-secure-API/assets/96380226/84277751-3c2f-4c9d-a3bc-86992581e95b">


## Deployment

To deploy the Frontend

```bash
  cd Frontend
  npm install
  npm start
```


To deploy the Backend

```bash
  cd Backend
  npm install
  npm start
```

## Avant d'accéder à l'Application :



```bash
    vous devrez créer un fichier .env dans le répertoire racine (dossier arrière).
    Dans ce nouveau fichier, ajoutez des variables spécifiques à l'environnement sur de nouvelles lignes sous la forme NAME=VALUE, comme ci-dessous :


```


Ouvrez ensuite sur n'importe quel navigateur web : http://localhost:4200/

Et nous avons exécuté le backend : http://localhost:3000/




## What did I learn ?
 La construction d'une API REST m'a permis d'appliquer mes connaissances JavaScript au développement backend d'une application, en utilisant Node.js, Express et MongoDB.

J'ai également appris à identifier et appliquer les règles de sécurité de base au développement d'une application, afin de respecter les normes OWASP et RGPD.
Afin de répondre à ces exigences en matière de sécurité, j'ai utilisé (entre autres) les packages ci-dessous :

- bcrypt, pour hacher et saler un mot de passe
- jsonwebtoken, afin d'assurer une - authentification sécurisée sur toutes les requêtes
- mongoose-unique-validator, afin de garantir l'unicité d'une adresse e-mail et de renvoyer les erreurs
- dotenv, afin de stocker et sécuriser les identifiants de la base de données
- crypto-js, afin de protéger les adresses email des utilisateurs, pour respecter les règles RGPD
- express-mongo-sanitize, afin de contrer les attaques par injection, en validant les entrées.


