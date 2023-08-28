 1. Fork this repository

2. Clone the forked repository to your local machine

```
git clone https://github.com/your-username/VisVTube.git
```

3. Navigate to the cloned directory

```
cd VisVTube
```

4. Install the dependencies

```
npm install
```

5. Start the development server

```
npm run dev
```

6. Open http://localhost:3000 in your browser

### Code Explanation

The codebase consists of three main parts:

- HTML: The HTML code defines the structure of the web page. It includes the header, navigation bar, sidebar, and main content area.
- CSS: The CSS code defines the styling of the web page. It includes the colors, fonts, and layout of the elements.
- JavaScript: The JavaScript code adds interactivity to the web page. It includes the search functionality, video list, and subscription list.

### Step-by-Step Explanation

The following is a step-by-step explanation of the code:

1. The HTML code defines the structure of the web page. It includes the header, navigation bar, sidebar, and main content area.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./images/Youtube_logo.png">
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/main.js" type="module"></script>
    <title>VisVTube</title>
</head>
<body>
    
    <nav class="flex-div">
        <div class="nav-left flex-div">
            <img src="images/menu.png" alt="menu" class="menu-icon">
            <img src="images/logo.png" alt="logo" class="logo">
        </div>
        <div class="nav-middle flex-div">
            <div class="search-box flex-div">
                <input type="text" placeholder="Search">
                <img src="images/search.png" alt="Search">
            </div>
            <div class

