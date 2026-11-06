# ODDBALLS – Website & Premdle Project Brief

## 1. Project Overview

I want to build a sports website called **Oddballs**.

Oddballs is centred around a sports podcast and will eventually become a wider sports entertainment website, featuring podcast content, interactive games, quizzes and other sports-related features.

The first game on the website will be called **Premdle**.

Premdle is a Wordle/Bokdle-inspired daily guessing game where users attempt to identify a mystery Premier League footballer using statistical comparisons.

The initial project should be deliberately simple.

For now, I only want:
1. An Oddballs homepage.
2. A Premdle game page.
3. Shared website navigation and branding.

The website should run locally on my computer. Do not deploy it or make it publicly accessible at this stage.

Build the project in a way that allows additional games and podcast features to be added later without rebuilding the website.

---

# 2. Technology Stack

Use the following technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub for version control
- Local development through localhost

For the initial version, do not introduce unnecessary backend complexity.

We can introduce Supabase/PostgreSQL and external football APIs when we start implementing the full Premdle game.

Use a clean, modular and scalable project structure.

---

# 3. Website Branding: Oddballs

Oddballs is the parent brand.

The website should feel like a modern sports entertainment brand rather than a traditional football statistics website.

### Brand personality

- Fun
- Informal
- Sporting
- Slightly irreverent
- Contemporary
- Bold and recognisable

The design should feel like a website associated with a sports podcast.

Avoid making it look too corporate or overly complicated.

### Initial design direction

I would like Klein to propose a visual identity for Oddballs.

Initial preferences:
- Modern typography.
- Strong, recognisable Oddballs wordmark.
- Dark or neutral background.
- Bold accent colour.
- Clean layouts.
- Football-inspired visual elements used sparingly.
- Consistent styling across the homepage and games.

Do not overcomplicate the design.

Create a visual identity that can eventually accommodate different sports and games, not just football.

---

# 4. Website Structure

The website should use the following initial structure:

```text
ODDBALLS
│
├── Home (/)
│
├── Games (/games)
│   │
│   └── Premdle (/games/premdle)
│
└── Podcast (/podcast)
```

The Podcast page can initially be a placeholder.

The website should have shared navigation and footer components.

### Navigation

Initially include:

- Home
- Games
- Podcast

The Oddballs logo should link back to the homepage.

The navigation should work properly on desktop and mobile.

---

# 5. Homepage

The homepage should introduce Oddballs and direct visitors towards its content.

### Suggested layout

**Hero section**

- Large Oddballs branding.
- Short introductory statement.
- Strong visual identity.
- A clear link to explore the games.

Suggested headline:

"Sports, games and a few oddballs."

Suggested supporting text:

"The home of the Oddballs podcast, sporting debates and games."

These are initial suggestions and can be improved.

**Featured content section**

Feature Premdle prominently.

Include:
- Premdle title.
- Short description.
- Football-related visual.
- Button linking to the Premdle page.

Suggested description:

"Think you know your Premier League history? Guess the mystery footballer using the clues provided."

**Coming soon section**

Leave room for future games and podcast content.

Do not build additional games yet.

**Footer**

Include:
- Oddballs branding.
- Navigation links.
- Copyright information.

---

# 6. Premdle – Game Overview

Premdle is the first interactive game on Oddballs.

It is inspired by Wordle and Bokdle.

The objective is to identify a hidden Premier League footballer.

A new mystery footballer is selected each day.

Users enter guesses, and each guess is compared against the mystery player across several characteristics.

The game should eventually support historical Premier League players from the 1992/93 season onwards.

For the initial website build, create the game interface and structure. The actual football database and working game engine will be developed in a later phase.

### Premdle page design

The page should include:

- Premdle branding/title.
- Brief explanation of how to play.
- Daily challenge indicator.
- Player search/autocomplete field.
- Number of guesses remaining.
- Comparison grid.
- Previous guesses.
- Win/loss messaging.
- Countdown to the next daily game.

Initially, the game can use placeholder data.

Do not pretend the game is fully functional until the actual player database and comparison logic have been implemented.

### Game characteristics

The eventual game will compare these nine characteristics:

1. Premier League appearances.
2. Premier League goals.
3. Premier League assists.
4. Nationality.
5. International caps.
6. Main Premier League team.
7. Premier League debut year.
8. Premier League titles won.
9. Other major trophies won.

### Comparison colours

The eventual game should use:

- Green: Exact match.
- Yellow: Close match or directional mismatch.
- Red: Significant mismatch.

Numerical statistics should also include arrows indicating whether the mystery player has a higher or lower value.

For example:

If the guessed player has 100 appearances and the mystery player has 300, the appearances tile should indicate that the mystery player's total is higher.

The precise colour thresholds can be refined later.

---

# 7. Future Premdle Game Mechanics

These requirements are for the future implementation. Do not spend time building the complete backend during the initial website phase.

### Daily player selection

- One mystery player per day.
- All users receive the same player.
- Use UK time (Europe/London) to determine the daily date.
- Players must have at least 50 Premier League appearances OR 10 Premier League goals.
- Players must have sufficiently complete and verified data.
- Avoid repeating players until the eligible pool has been exhausted.

### Guesses

- Maximum of eight guesses.
- Users select players through an autocomplete search.
- Prevent duplicate guesses.
- Correct guesses end the game successfully.
- If all guesses are used, reveal the mystery player.

### Future statistics

Eventually include:
- Games played.
- Games won.
- Win percentage.
- Average number of guesses.
- Shareable emoji results.
- Historical daily game archive.

No user accounts are necessary initially.

---

# 8. Project Structure

Use a structure similar to:

```text
oddballs/
│
├── public/
│   ├── images/
│   ├── logos/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── games/
│   │   │   ├── page.tsx
│   │   │   └── premdle/
│   │   │       └── page.tsx
│   │   │
│   │   └── podcast/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── GameCard.tsx
│   │   └── Premdle/
│   │
│   └── lib/
│       └── utils.ts
│
├── package.json
└── README.md
```

If using the `src` directory is not appropriate for the generated Next.js project, adapt accordingly.

Keep components reusable.

Premdle should be a feature within Oddballs rather than a separate application.

---

# 9. GitHub and Local Development

The project should be maintained in a GitHub repository called:

`oddballs`

The repository should initially be private.

The development workflow should be:

1. Make changes locally.
2. Run the website through localhost.
3. Review and test changes.
4. Commit changes to GitHub.

The website should run using:

```bash
npm run dev
```

The local development address should be:

`http://localhost:3000`

Do not deploy to Vercel or another hosting provider yet.

Do not purchase or configure a domain.

Do not make the website publicly accessible.

Ensure that environment files and credentials are not committed to GitHub.

---

# 10. Future Database and Data Collection

The eventual Premdle game will require a comprehensive Premier League player database.

The proposed approach is:

- API-Football as the initial data provider.
- Python for importing and processing data.
- Supabase/PostgreSQL for storing player information.

The database should eventually contain:

### Players
- Player ID.
- Name.
- Nationality.
- Position.
- International caps.
- Premier League appearances.
- Premier League goals.
- Premier League assists.
- Main Premier League team.
- Debut year.
- Premier League titles.
- Other major trophies.

### Player Seasons
- Player ID.
- Season.
- Team.
- Appearances.
- Goals.
- Assists.

### Player Trophies
- Player ID.
- Competition.
- Season.
- Club.

### Daily Games
- Game date.
- Target player ID.
- Difficulty.

The target player must never be exposed to the browser before the game is completed.

Data accuracy is particularly important for trophy histories and international appearances.

Do not invent missing statistics.

This database work should be a separate development phase after the initial website is complete.

---

# 11. Development Priorities

Build the project in the following order.

## Phase 1 – Project setup

- Initialise Next.js.
- Configure TypeScript and Tailwind.
- Create the GitHub-compatible project structure.
- Confirm that the website runs locally.

## Phase 2 – Oddballs branding

- Establish the visual identity.
- Create the logo/wordmark.
- Create shared navigation.
- Create shared footer.
- Establish typography and colours.

## Phase 3 – Homepage

- Build the hero section.
- Introduce Oddballs.
- Feature Premdle.
- Include a coming soon section.
- Make the page responsive.

## Phase 4 – Premdle interface

- Create the Premdle page.
- Build the player search interface using placeholder data.
- Create the comparison grid.
- Display example guesses.
- Add placeholder win/loss states.
- Ensure the interface works on mobile.

## Phase 5 – Navigation and testing

- Confirm all links work.
- Test desktop and mobile layouts.
- Ensure consistent branding.
- Check for errors.
- Confirm that the project runs locally.

---

# 12. Important Instructions for Klein

I want this developed collaboratively and in stages.

**Do not attempt to build the entire project in one go.**

Start by examining the project folder and checking whether a Next.js application already exists.

If it doesn't, help initialise one.

Then work through the development phases in order.

After each phase:

1. Explain what has been completed.
2. List the files created or changed.
3. Confirm that the website runs.
4. Identify anything incomplete.
5. Wait for my approval before moving to the next major phase.

Prioritise quality and a polished visual experience over adding lots of features.

Do not introduce unnecessary dependencies.

Do not build the full Premdle database or backend yet.

Do not deploy the website.

Do not create additional games.

The immediate objective is simple:

**Build a polished Oddballs homepage with Premdle as its first featured game, running locally on my computer and saved in GitHub.**

The website should be designed with the long-term ambition of Oddballs in mind, but the initial build should remain focused and manageable.