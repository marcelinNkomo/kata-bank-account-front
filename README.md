
# Kata Bank Account Front

Cette application Angular permet de gérer des comptes bancaires. Elle propose la création de comptes, la gestion des transactions et l'affichage des relevés bancaires.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/mnkomo/kata-bank-account-front.git
   cd kata-bank-account-front
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancement du projet


### pré requis
   rassurer vous d'avoir au préalable lancer l'api (backend), disponible duis le repository : [https://github.com/mnkomo/kata-bank-account.git](https://github.com/mnkomo/kata-bank-account.git)

Pour démarrer l'application en mode développement :
```bash
npm start
```
L'application sera accessible sur [http://localhost:4200](http://localhost:4200).

## Modèles

- **Client** : Représente un client de la banque (`src/app/models/client.ts`)
- **Account** : Représente un compte bancaire (`src/app/models/account.ts`)
- **Statement** : Représente un relevé de compte (`src/app/models/statement.ts`)
- **Transaction** : Représente une opération bancaire (`src/app/models/transaction.ts`)

## Composants

- **Création de compte** : Permet de créer un nouveau compte (`src/app/components/account/`)
- **Transaction** : Permet d'effectuer des opérations sur un compte (`src/app/components/transaction/`)
- **Relevé** : Affiche l'historique des opérations (`src/app/components/statement/`)

## Services

- **AccountService** : Gère la logique métier liée aux comptes (`src/app/services/account.service.ts`)
- **TransactionService** : Gère les transactions (à créer si non présent)