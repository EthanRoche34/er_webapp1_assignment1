# Lab 1

- Start with hello-website Glitch template
- Updated index.html to use SemanticUI grid including segments, text, buttons and images
- Added some extra styles in style.css
- Added JavaScript to the three buttons
  - showHide() function to display a div with more info
  - alert() on Like button
  - welcomeUser() function to prompt user for their name and display this in a message
  - hideWelcome() to hide message when clicked
  - changed showHide() function to make text colour teal

# Lab 2

- Added dashboard page with table
  -Added menu to both dashboard and index.html
- Added playlist object in script.js, with getRating() function
- Used jQuery in script.js to output table to dashboard.html
- Exercises:
  - Added one more song to sonatas playlist
  - Display rating using star icons

# Lab 3

- Added node files (package.json, server.js, routes.js)
- Added logging facility (utils/logger.js)
- Changed from HTML files to views (inc. layout and partials)
- Created controllers to populate the views
- Updated routes.js file and menu links
- Move style.css and script.js to public folder
- Exercise: added about view (plus matching route and controller)

# Lab 4

- Added playlist-store.json
- Added playlist-store.js
- Imported playlist collection into dashboard.js and passed to view
- Created listsongs.hbs and dashboard.hbs templates
- Removed sonatas object and made getRating() its own function

Exercises:
- Added third playlist
- Added id, genre, duration to JSON object and displayed on dashboard.hbs
- Created developer store and templates on card.hbs and about.hbs