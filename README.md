# verifyvalley.github.io

Les modifications doivent se faire dans `themes/raditian/data`


## Docker - Utilisation

Pré-requis [docker](https://docs.docker.com/engine/install/) et [docker compose](https://docs.docker.com/compose/install/)

**Normalement hugo possède un liveload donc les fichiers modifiés sont détectés et le site changé sans devoir relancer le container**

```bash
git clone https://github.com/VerifyValley/verifyvalley.github.io.git
cd verifyvalley.github.io
docker-compose up -d
```

Le site est disponible via [http://localhost:1313](http://localhost:1313)

### Stopper le container

```bash
docker-compose down
```



## Installation de Hugo

Tutoriel pour les OS Windows, Mac OS et GNU/Linux [Installing Hugo](https://gohugo.io/getting-started/installing/)


## Lancer le serveur

`hugo server`

[Plus d'informations](https://gohugo.io/getting-started/quick-start/#step-4-add-some-content)
