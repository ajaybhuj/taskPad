# Express Project

This project is a simple Express.js application that allows users to create and view tasks. Tasks are saved as text files on the server.

## Features

- Create new tasks with a title and details
- View a list of all tasks
- Each task is saved as a `.txt` file on the server

## Project Structure

- `index.js`: Main server file
- `public/`: Directory for static files (CSS, JS)
- `views/`: Directory for EJS templates
- `files/`: Directory where task files are stored

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ajaybhuj/taskPad.git
   ```

2. Navigate to the project directory:

   ```sh
   cd expressproject
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Start the server:

   ```sh
   node index.js
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Dependencies

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [EJS](https://ejs.co/) - Embedded JavaScript templating

## Example

### Creating a Task

1. Enter a title and details in the form.
2. Click "Create Task".
3. The task will be saved as a `.txt` file in the `files` directory.

### Viewing Tasks

- Tasks are listed on the homepage.
- Each task has a "Read More" link that directs to the file (assuming a route to handle file display).

## Author

- Ajay Bhuj
