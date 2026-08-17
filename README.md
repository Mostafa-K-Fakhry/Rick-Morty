# 🛸 Rick & Morty Explorer

A full-stack web application built with **Node.js, Express.js, EJS, and
Axios**, using the **Rick and Morty API**.

The application allows users to explore characters, locations, and
episodes from the Rick & Morty universe through a responsive and
interactive interface.

------------------------------------------------------------------------

## 🚀 Features

### 👽 Characters

-   Browse all Rick & Morty characters
-   Search characters by name
-   Filter characters using available API parameters
-   Pagination
-   Character details page
-   Character status indicator
-   Character origin and last location
-   Navigate from characters to their related locations
-   View episodes in which the character appears
-   Navigate from characters directly to episode details
-   Custom Character Not Found page

### 🌍 Locations

-   Browse all locations
-   Search locations by name
-   Filter locations by type and dimension
-   Pagination
-   Location details page
-   Display location type and dimension
-   Display number of residents
-   Display resident characters
-   Navigate from locations to character details
-   Custom Location Not Found page

### 🎬 Episodes

-   Browse all episodes
-   Search episodes by name
-   Search using episode codes such as `S01E01`
-   Pagination
-   Episode details page
-   Display episode information and air date
-   Display characters appearing in each episode
-   Navigate from episodes to character details
-   Custom Episode Not Found page

------------------------------------------------------------------------

## 🔗 Resource Relationships

The application connects the main Rick & Morty API resources instead of
treating them as isolated pages.

``` text
Characters
   ├── Origin ───────────► Location Details
   ├── Last Location ────► Location Details
   └── Episodes ─────────► Episode Details

Locations
   └── Residents ────────► Character Details

Episodes
   └── Characters ───────► Character Details
```

This creates a connected browsing experience across the API resources.

------------------------------------------------------------------------

## 🛠️ Technologies

### Backend

-   Node.js
-   Express.js
-   Axios

### Frontend

-   EJS
-   HTML5
-   CSS3

### API

-   Rick and Morty API

### Development Tools

-   Git
-   GitHub
-   VS Code

------------------------------------------------------------------------

## 🏗️ Project Architecture

The project follows a layered architecture that separates routing,
request handling, API communication, and presentation.

``` text
Browser
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Axios
   │
   ▼
Rick and Morty API
   │
   ▼
EJS Views
```

### Routes

Define the application endpoints and connect them to the appropriate
controllers.

### Controllers

Handle HTTP requests, query parameters, API responses, errors, and
prepare data for the views.

### Services

Contain API communication logic using Axios, keeping external API calls
separate from controllers.

### Views

EJS templates render dynamic HTML. Reusable elements such as the navbar,
head, and footer are organized using EJS partials.

------------------------------------------------------------------------

## 📁 Project Structure

``` text
project/
│
├── controllers/
│   ├── character.controller.js
│   ├── location.controller.js
│   └── episode.controller.js
│
├── routes/
│   ├── character.route.js
│   ├── location.route.js
│   └── episode.route.js
│
├── services/
│   └── apiService.js
│
├── utils/
│   └── url.util.js
│
├── views/
│   ├── pages/
│   │   ├── characters.ejs
│   │   ├── character-details.ejs
│   │   ├── character-not-found.ejs
│   │   ├── locations.ejs
│   │   ├── location-details.ejs
│   │   ├── location-not-found.ejs
│   │   ├── episodes.ejs
│   │   ├── episode-details.ejs
│   │   ├── episode-not-found.ejs
│   │   └── 404.ejs
│   │
│   └── partials/
│       ├── head.ejs
│       ├── navbar.ejs
│       └── footer.ejs
│
├── public/
│   └── css/
│       └── style.css
│
├── app.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

------------------------------------------------------------------------

## 🔌 API Integration

The application consumes the Rick and Morty API.

**Base API:** `https://rickandmortyapi.com/api`

Main resources used:

``` text
GET /api/character
GET /api/character/:id

GET /api/location
GET /api/location/:id

GET /api/episode
GET /api/episode/:id
```

The relationships returned by the API are also used to connect
characters, locations, and episodes.

------------------------------------------------------------------------

## ⚡ API Request Optimization

Related resources are fetched using the API's batch endpoints where
possible.

Instead of sending multiple requests:

``` text
/character/1
/character/2
/character/3
```

the application can request:

``` text
/character/1,2,3
```

This reduces HTTP requests and helps avoid API rate limits.

The application also limits related-resource previews when appropriate.

------------------------------------------------------------------------

## 🔎 Search & Filtering

Search and filtering are implemented using URL query parameters.

Examples:

``` text
/characters?name=Rick
/locations?name=Earth
/locations?type=Planet
/locations?dimension=Dimension C-137
/episodes?name=Pilot
/episodes?episode=S01E01
```

Pagination works alongside active search and filter parameters.

------------------------------------------------------------------------

## 📄 Pagination

Pagination uses the information returned by the Rick and Morty API.

The interface supports:

-   Previous page
-   Next page
-   Page numbers
-   Preserving search/filter parameters while navigating

------------------------------------------------------------------------

## ⚠️ Error Handling

The application handles:

-   Invalid character IDs
-   Invalid location IDs
-   Invalid episode IDs
-   Searches with no matching results
-   External API request failures
-   API rate limiting
-   Unknown application routes
-   Custom resource-specific Not Found pages
-   Custom global 404 page

------------------------------------------------------------------------

## 🎨 UI & Design

The interface uses a dark sci-fi and cartoon-inspired visual style
suited to the Rick & Morty universe.

The UI includes:

-   Dark themed interface
-   Responsive layouts
-   Portal-inspired decorative elements
-   Hover effects
-   Custom resource cards
-   Character status indicators
-   Responsive grids
-   Reusable navbar and footer
-   Custom empty states
-   Custom error pages
-   Consistent styling across all resources

------------------------------------------------------------------------

## 📱 Responsive Design

The application adapts across:

-   Desktop
-   Tablet
-   Mobile

Cards, grids, navigation, and details pages use responsive CSS media
queries.

------------------------------------------------------------------------

## ⚙️ Installation

### 1. Clone the repository

``` bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

``` bash
cd YOUR_PROJECT_NAME
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

``` env
PORT=3000
```

### 5. Start the application

Use the script configured in `package.json`, for example:

``` bash
npm run dev
```

or:

``` bash
npm start
```

------------------------------------------------------------------------

## 🌐 Application Routes

After starting the server, open:

``` text
http://localhost:3000
```

The default route redirects to `/characters`.

  Method   Route               Description
  -------- ------------------- -------------------------
  GET      `/`                 Redirects to Characters
  GET      `/characters`       Browse characters
  GET      `/characters/:id`   Character details
  GET      `/locations`        Browse locations
  GET      `/locations/:id`    Location details
  GET      `/episodes`         Browse episodes
  GET      `/episodes/:id`     Episode details

------------------------------------------------------------------------

## 📚 What I Learned

This project helped me practice and apply:

-   Node.js and Express.js
-   Express routing
-   REST API consumption
-   Axios
-   Controllers and service layers
-   MVC-style project organization
-   Query parameters
-   Dynamic EJS rendering
-   EJS partials
-   Search and filtering
-   Pagination
-   Error handling
-   API resource relationships
-   Batch API requests
-   API rate-limit awareness
-   Responsive frontend development
-   Git and GitHub workflow

------------------------------------------------------------------------

## 🔮 Future Improvements

Possible future improvements include:

-   Favorites system
-   Authentication and user accounts
-   Database integration
-   API caching
-   Automated testing
-   Loading and skeleton states
-   Deployment
-   Additional performance optimizations

------------------------------------------------------------------------

## 👨‍💻 Author

** Mostafa Khaled **

Built as a full-stack practice project using Node.js, Express.js, EJS,
Axios, and the Rick and Morty API.

------------------------------------------------------------------------

## 📄 License

This project was created for educational and portfolio purposes.

Data is provided by the Rick and Morty API.
