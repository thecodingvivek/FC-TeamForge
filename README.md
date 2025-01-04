# FC-TeamForge: Squad Splitting Simplified! ⚽💻

Welcome to **FC-TeamForge**, your ultimate solution for effortlessly creating balanced football teams from a pool of real-life players. This application streamlines team formation, ensuring fair and exciting games every time.

## ⚽ **Features that Make FC-TeamForge a Game-Changer**

- **Dynamic Player Database:**
  - Manage a database of real players, such as your friends, and organize your football squad.
- **Smart Team Generator:**
  - Automatically create balanced teams with the click of a button.
- **Formation Flexibility:**
  - Select from various formations to suit your strategy and maximize performance.
- **Substitute Management:**
  - Keep the game dynamic by selecting substitutes as needed.
- **User-Friendly Interface:**
  - An intuitive design ensures that even non-tech-savvy users can navigate the app effortlessly.
- **Responsive Design (Planned):**
  - Future updates will include seamless functionality across mobile, tablet, and desktop devices.

## ⚙️ **Tech Stack**

- **Frontend:** Vue.js with Vite
- **Backend:** Node.js, Express.js, MySQL (for player database management)
- **Styling:** CSS (static stylesheets)
- **Icons and Graphics:** Font Awesome and external assets

## ✨ **Planned Enhancements**

1. **Responsive Design:** Ensure the app is mobile-friendly.
2. **FIFA Card-like Graphics:** Improve player visuals.
3. **Player Ranking System:** Add rankings based on frequency of play.
4. **Database of Formations:** Expand and customize team formations.

## 🚀 **Getting Started**

### **Frontend Installation**

Clone the repository:
```bash
git clone https://github.com/TharunKumarrA/FC-TeamForge.git
cd FC-TeamForge/frontend
```
### Install dependencies

```bash
npm install
```
### Backend Installation

The frontend depends on a backend server for player management and team formation.
1. Clone the backend repository:

```bash
git clone https://github.com/Thanus-Kumaar/FC-TeamForge-server.git
```
2. Install backend dependencies:

```bash
npm install
```
3. Start the backend server:

```bash
node server.js
```
Ensure the backend server is running before starting the frontend.
Run Frontend Locally

4. Start the development server:

```bash
npm run dev
```

A detailed guide for integrating the backend has been provided by [@thecodingvivek](https://github.com/thecodingvivek). It covers all aspects of the backend setup, API integration, and interaction with the database.

## 🌍 Usage

- **Add Players:** Navigate to the "Add Player" screen and input player details.
- **Select Players:** Choose players for the game from the database.
- **Generate Teams:** Select a formation, and let the app divide players into balanced teams.
- **Manage Substitutes:** Add substitutes to ensure everyone gets playtime.

### **Usage Flow**

1. **Initial View:** Upon entering the app, users will see a dashboard prompting them to select at least 6 players. Filters and a search bar are available to assist in player selection.
   - **Filters:** Filter players by their roles (A: Attacker, M: Midfielder, D: Defender, G: Goalkeeper).
   - **Search:** Search for players by name.
2. **Select Players:** Add players to the "Selected Players" section to proceed with team formation.
3. **Choose Formation:** Once the minimum player count is met, proceed to select a formation.
4. **Generate Teams:** Click "Form Teams" to generate two balanced teams based on the selected formation.
5. **Review and Adjust:** Adjust players or formations as needed.

## 📊 Folder Structure

```plaintext
TharunKumarrA-FC-TeamForge/
├── frontend/
│   ├── index.html
│   ├── public/
│   │   ├── images/
│   │   ├── constants.js
│   ├── src/
│   │   ├── components/
│   │   │   └── NewPlayer.vue
│   │   ├── static/
│   │   ├── App.css
│   │   └── NewPlayer.css
│   └── main.js
├── Docs/
│   └── Design.md
└── backend/
    ├── server.js
    ├── Algorithm.js
    ├── sqlconnect.js
    ├── nodemon.json
    ├── package.json
    └── README.md
```
## 🚒 Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch
   ```bash
   git push origin feature-name
   ```
5. Create a new PR to main

## ❓ Issues

Feel free to open issues for bugs, feature requests, or questions.

## 🚀 Future Roadmap

- Mobile and tablet responsiveness.
- Enhanced graphics and player profiles.
- Additional database features for formations and substitutes.
- Ranking and statistics for players.

## ⚔️ License

This project is licensed under the MIT License.

