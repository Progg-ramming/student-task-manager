# Student Task Manager

1. Project Title & Goal
**Goal:** A simple Single Page Application (SPA) that lets students add and track homework tasks dynamically without page refresh.

---


2. Setup Instructions
   
1. Make sure **Node.js** is installed on your computer.  
2. Open the terminal in your project folder.  
3. Install the required packages:

```bash
npm install

Start the server:
node server.js

Open your browser and go to:
http://localhost:3000

You should see the Student Task Manager webpage.

Tasks are stored in tasks.json and appear instantly in the list when added.

```

3. The Logic 
Why this approach:
I used a Node.js + Express backend with a plain HTML/JS frontend to keep it beginner-friendly.
Tasks are stored in a simple tasks.json file instead of a database for simplicity.
The SPA behavior (adding tasks without refresh) is implemented using fetch() in JavaScript.

Hardest bug faced:
Initially, the server failed with Cannot find module 'body-parser'.
I fixed it by using Express’s built-in express.json() instead of body-parser, which handles JSON automatically.

-----

4. Output Screenshots

![Task List Screenshot](public/Screenshot 2026-01-28 124307.png)


Screenshot showing 3 tasks added successfully on the webpage.


------
5. Future Improvements
If I had 2 more days, I would add:

Edit & Delete Tasks: Allow users to remove or update tasks directly in the list.

Database Integration: Use SQLite or MongoDB instead of tasks.json to manage tasks more reliably.

Improved UI/UX: Use a CSS framework like Tailwind or Bootstrap for a polished look.


---

