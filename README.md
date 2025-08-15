# 📝 TailwindCSS To-Do App

## 📌 Objective
The goal of this project is to create a **basic, responsive, and user-friendly To-Do web application** using **TailwindCSS** for styling.  
The app allows users to add daily tasks, mark them as completed, edit them, or delete them — with tasks organized into **Pending Tasks** and **Completed Tasks** sections etc.

---

## 🚀 Features
- ➕ **Add New Tasks** with date & time stamp
- ✅ **Mark Tasks as Complete** (moves them to the Completed Tasks list)
- 🔄 **Unmark Tasks** (moves them back to Pending Tasks)
- ✏ **Edit Tasks** with updated timestamp
- ❌ **Delete Tasks**
-   **Design Task**

- 📂 **Separate Sections** for Pending and Completed tasks
- 🎨 **Fully styled** using TailwindCSS

---

## 🛠 Tools, Technologies & Software Used
- **HTML5** – Structure of the app
- **JavaScript (Vanilla JS)** – Dynamic task management
- **TailwindCSS** – Modern utility-first CSS framework for styling
- **Node.js** – For package management and local development server
- **VS Code** – Code editor used for development
- **Google Chrome / Firefox** – For testing and running the application

---

## 📋 Steps Performed
1. **Setup Project**
   - Created project folder and initialized Node.js:
     ```bash
     npm init -y (to create a package.json file)
     npm create-react-app todo-app
     cd todo-app
     npm start
     ```
 # First Method
  - Installed TailwindCSS via npm:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p

     ```
   - Configured `tailwind.config.js`:
     ```javascript
     module.exports = {
       content: ["./*.html", "./src/**/*.{js,ts}"],
       theme: { extend: {} },
       plugins: [],
     }
     ```
   - Created `input.css` file with:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

   - Built TailwindCSS:
     ```bash
     npx tailwindcss -i ./input.css -o ./output.css --watch
     ```

    (Note)
  ## Second Method 
   - If the TailwindCss is not installing correctly or show the error like below 
   - When i was trying to install the TailwindCSS I have got the below error so many times
      #  npx tailwindcss init -p
      # 'tailwind' is not recognized as an internal or external command, operable program or batch file'.
   - if you get the same error run the following command.
      # npm i-D tailwindcss@3 postcss autoprefixer
      # npx tailwindcss init -p
   - it should work.
   - its happing beacuse
    according to me, my system is not supporting the new version of the tailwindcss so you can install the previous version of the TailWindCss that should be work correctly its version as @3.

## 📂 Folder Structure
oasisinfobyteTasks/
│
├── ToDoWebApp/
│   └── todo-app/
│       ├── package.json
│       ├── tailwind.config.js
│       ├── postcss.config.js
        ├── input.css           # Tailwind source file
        ├── output.css          # Generated Tailwind file (auto-generated)
        ├── index.html          # Main HTML file
        │
        ├── src/
        │   ├── app.js          # JavaScript logic for To-Do app
        │   └── utils.js        # Optional helper functions
        │
        └── assets/
            ├── images/         # Store any images/icons
            └── css/            # Extra custom CSS 

2. **Build UI Structure**
   - Header section with app title.
   - Input box and button for adding tasks.
   - Separate lists for Pending and Completed tasks.

3. **Implement Task Logic (JavaScript)**
   - Created functions to:
     - Add a task
     - Mark as complete / unmark
     - Edit a task
     - Delete a task
     - Design Task
     - Development Task
     - Testing Task
     - Review Task
     - Render tasks dynamically in respective lists
   - Added timestamps for task creation & updates.

4. **Styling with TailwindCSS**
   - Used Tailwind utility classes for spacing, colors, borders, and hover effects.
   - Designed a responsive and clean layout.


  5.  

---

## 📦 How to Run the Project
1. **Clone the repository** or download the project files.
2. Open terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install

# To Test The Login Page follw the below steps
 - start the project 
 - Here create a new project 
 - Add the tasks into this
 1. you can add the task taskName,Description,deadline of task,whome to assgin the task,who is assgin the task,which type of task
 2. you can create a task like desgin task,testing task,review task and ect.
 3. you can also add the Priority of the task
 
 - The you can see the added tasks into the relatable task tabs
 - You can Edit, Delete, Add the task into development ,then you can add into the completed task ,you can also delete the task
 - I am storing the all data locally


######  This is the Proje t I develop in simple Way.