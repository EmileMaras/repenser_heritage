# Repenser l'Héritage — Guide de mise à jour du site

Site : https://repensonslheritage.eu

## Stack technique

- **Frontend** : React 16 + TypeScript, compilé avec `react-scripts`
- **Hébergement** : Serveur Apache mutualisé (fichiers statiques uniquement, pas de Node.js)
- **Pas de backend** : `server.js` existe dans le dépôt mais n'est pas utilisé sur le serveur

---

## Modifier le contenu du site

Les fichiers sources sont dans `client/src/`. Les principaux :

| Fichier | Contenu |
|---|---|
| `client/src/Biblio/Biblio.tsx` | Page Bibliographie (liens, livres, podcasts) |
| `client/src/accueil/AccueilPage.tsx` | Page d'accueil |
| `client/src/Header.tsx` | Barre de navigation |
| `client/src/StateContainer.tsx` | Logique du simulateur |
| `client/src/index.css` | Styles CSS globaux |

---

## Déployer une mise à jour

### 1. Modifier les fichiers sources

Éditer les fichiers dans `client/src/`.

### 2. Compiler le projet

Depuis le dossier `client/` :

```bash
cd client
npm run build
```

Le résultat est généré dans `client/build/`.

> **Note** : Le script utilise `cross-env NODE_OPTIONS=--openssl-legacy-provider` pour compatibilité avec Node.js 17+. Si la compilation échoue avec une erreur `ERR_OSSL_EVP_UNSUPPORTED`, vérifier que `cross-env` est installé (`npm install`).

### 3. Uploader sur le serveur (via FTP)

Uploader le **contenu** de `client/build/` à la racine du serveur (même niveau que `.htaccess`) :

```
client/build/index.html        → /index.html
client/build/static/           → /static/
client/build/asset-manifest.json → /asset-manifest.json
client/build/manifest.json     → /manifest.json
client/build/favicon.ico       → /favicon.ico
client/build/service-worker.js → /service-worker.js
client/build/precache-manifest.*.js → /precache-manifest.*.js
```

Uploader aussi si modifié :

```
RepenserLHeritage.pdf          → /RepenserLHeritage.pdf
```

> **Important** : Remplacer le dossier `static/` en entier (ne pas fusionner avec l'ancien). Les anciens fichiers CSS/JS ont des noms différents (hash) et doivent être supprimés, sinon le site se charge sans styles.

### 4. Fichiers à ne jamais toucher sur le serveur

```
.htaccess                          ← routing SPA + redirection HTTPS
.ftpquota
.project
google52eb8907494a33d8.html        ← vérification Google Search Console
```

---

## Prérequis locaux

- Node.js (v22 recommandé)
- Dépendances installées : `npm install` dans `client/`

---

## Erreurs fréquentes

**Le site s'affiche sans CSS (liens violets, pas de header foncé)**
→ Le dossier `static/` sur le serveur est désynchronisé avec `index.html`. Supprimer l'ancien `static/` et uploader le nouveau en entier.

**Erreur `ERR_OSSL_EVP_UNSUPPORTED` à la compilation**
→ Node.js 17+ incompatible avec l'ancienne version de webpack. Le script `build` dans `client/package.json` inclut déjà le correctif (`cross-env NODE_OPTIONS=--openssl-legacy-provider`). Vérifier que `cross-env` est installé.

**Les modifications n'apparaissent pas sur le site**
→ Vérifier que la compilation a bien été relancée après les modifications, et que les bons fichiers ont été uploadés (ne pas uploader depuis la racine du projet, mais depuis `client/build/`).



Infos pour se connecter au  server:
Utiliser Filezila
Protocol: FTP
Host: ftp.gizbou.odns.fr

Use explicit FTP over TLS if available
User: emilemaras@repensonslheritage.eu