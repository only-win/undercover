# 🕵️ Undercover - Jeu de Société en Ligne

## Description

**Undercover** est un jeu de société en ligne qui met à l'épreuve votre capacité à donner des indices subtils et à démasquer les imposteurs ! Les joueurs reçoivent des rôles secrets et doivent coopérer ou tromper pour remporter la partie.

## Comment Jouer

### Rôles

- **Citoyens** : Les citoyens reçoivent un mot identique et doivent donner des indices pour aider les autres citoyens à identifier l'undercover sans révéler directement leur mot.
- **Undercover** : L'undercover reçoit un mot légèrement différent de celui des citoyens. Son objectif est de rester caché en donnant des indices qui ressemblent à ceux des citoyens, sans trop en dire.
- **Mr. White** (optionnel) : Mr. White ne reçoit aucun mot. Son objectif est de bluffer pour ne pas se faire démasquer et, s'il est découvert, de deviner le mot des citoyens pour gagner.

### Déroulement d'une Partie

1. **Phase de Préparation** : Un joueur crée une partie et devient le "créateur". Les autres joueurs rejoignent la partie en entrant l'identifiant de la partie.
2. **Attribution des Rôles** : Chaque joueur reçoit un rôle secret (Citoyen, Undercover, ou Mr. White).
3. **Tour d'Indices** : À chaque tour, chaque joueur donne un indice basé sur le mot qu'il a reçu.
4. **Phase de Vote** : Les joueurs votent pour éliminer un joueur qu'ils suspectent d'être l'undercover ou Mr. White.
5. **Fin de la Partie** : La partie continue jusqu'à ce que l'undercover ou Mr. White soit démasqué, ou que les citoyens soient majoritaires. Si Mr. White est découvert, il peut tenter de deviner le mot des citoyens pour remporter la victoire.

## Stratégie

- Les citoyens doivent être subtils dans leurs indices pour ne pas révéler leur mot à l'undercover.
- L'undercover doit écouter attentivement les indices pour rester discret et éviter d'être démasqué.
- Mr. White doit bluffer pour éviter la suspicion et, s'il est découvert, deviner le mot exact des citoyens pour gagner.

## Objectifs des Joueurs

- **Citoyens** : Identifier l'undercover et Mr. White sans révéler leur mot.
- **Undercover** : Rester caché parmi les citoyens.
- **Mr. White** : Bluffez et devinez le mot exact pour remporter la victoire.

## Technologies Utilisées

- **Frontend** : Next.js pour l'interface utilisateur et les interactions.
- **Backend** : Fastify et Socket.IO pour la gestion des parties en temps réel.
- **Temps Réel** : Socket.IO pour les communications en direct entre les joueurs.

## Licence

Ce projet est sous licence MIT.