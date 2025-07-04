# flatagram

This simple UI image viewer allows users to view, like and comment on a dog image. The project was a Moringa School Assignment to demonstrate understanding of **DOM Manipulation**, **event handling**, **fetching data from APIs** using **JavaScript**.

## Description
The application interacts with `json-server` to display or update a dog's image, its title, likes, and comments.

## Setup Instructions
### 1. Clone the Repository.
```bash
git clone https://github.com/douglasgatimu/flatagram.git
cd flatagram
```

### 2.  Add Required Files.
- Download the provided `db.json` and place in the root directory of the project.
- Download the necessary images and save them in a directory named `assets` located inside the root directory.

### 3. Install JSON Server (if not already globally installed)
Check if you have `json-server` installed:
```bash
json-server --version
```

If not, install it globally:

```bash
npm install json-server --global
```

### 4. Start the JSON Server

From the project root, run:

```bash
json-server --watch db.json
```

> The server will run at `http://localhost:3000/`

Test it by visiting:
```
http://localhost:3000/images/1
```

You should see the image object data returned as JSON.


## Running the Application
1. Open `index.html` in your browser.
2. The image and related information should be loaded from `json-server`
3. To interact with the UI:
    - Click heart to increase likes.
    - Add a comment and click 'Post' to submit.
    - Click any comment to remove it.
    - Click the image to load a random dog photo from `https://dog.ceo/dog-api/`
    - Click the image title to toggle visibility.

## Features Implemented
- `fetch()` image and comments from server running locally.
- Display image, title, comments and likes.
- Likes rendering
- Comments submission
- Fetching and replacing image with random image from external API.

## Author
- **Douglas Gatimu**
- GitHub: https://github.com/douglasgatimu
