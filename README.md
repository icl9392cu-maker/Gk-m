# GK Quiz Website


Simple GK quiz site with categories, practice mode, leaderboard, admin panel (local), and optional Firebase-backed score saving and authentication.


## Features
- Home, Categories, Quiz, Practice, Leaderboard, About, Contact
- Dark/Light theme
- Admin panel to add questions locally
- Firebase Authentication (Google/email) and Firestore leaderboard
- Deploy as static site on Render


## Deploy
1. Push repo to GitHub.
2. On Render: New -> Static Site -> Connect repo -> Publish Directory: `/` -> Create
3. (Optional) Configure Firebase and add config in `js/auth.js`.
