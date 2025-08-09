## About This Project

This project is a Crimean Tatar adaptation of the popular Wordle game, also known as "Qırımtatar Söz Tapuv Oyunı". It features full localization and an optimized keyboard layout for the Crimean Tatar language. The game is hosted on GitHub Pages.

## Technology Stack

*   **Framework:** React 18
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Icons:** Material Design Icons
*   **CI/CD:** GitHub Actions
*   **Hosting:** GitHub Pages

## Coding Style

*   **Formatting:** Prettier is used for code formatting.
    *   Single quotes are preferred (`singleQuote: true`).
    *   Semicolons are not used (`semi: false`).
*   **TypeScript:** The project uses strict mode (`"strict": true`).

## Important Commands

*   `npm start`: Starts the development server.
*   `npm run build`: Creates a production build.
*   `npm test`: Runs the test suite.
*   `npm run lint`: Checks the code for formatting issues.
*   `npm run fix`: Automatically formats the code.

## Upstream Repository

This project is a fork of `modem7/react-wordle`.
As of August 2025, this repository is 157 commits ahead of and 400 commits behind the `upstream/master` branch.

- **Ahead commits:** These are the unique changes in this repository, mostly related to the Crimean Tatar localization, dictionary, and UI.
- **Behind commits:** These are the changes made to the original `modem7/react-wordle` repository after this repository was forked. They include bug fixes, new features, and dependency updates.

**Recommendation:**
It is not recommended to merge the changes from the upstream repository directly, as it would likely overwrite the localization work. However, it is a good practice to periodically review the changes in the upstream repository and manually apply any important bug fixes or security updates.

## Animation

The user has requested a flip animation for revealing cells, similar to the one in other Wordle games.
Previous attempts to implement this have failed due to the complexity of the codebase and the divergence from the upstream repository.
The current state is that the animation is reverted to the original one.
Any new attempt to implement this should be done with caution, in a separate branch, and with thorough testing.

## Deployment

This project is deployed to GitHub Pages.
The deployment is triggered by pushes to the `master` branch.
The repository was temporarily archived in August 2025, which caused issues with creating pull requests. The repository has since been unarchived.