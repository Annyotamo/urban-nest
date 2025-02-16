<h1>Urban Nest Project</h1>

<p>This project is a practice application for learning and exploring backend development using Node.js, Express, and MongoDB. It simulates a simplified real estate listing platform.</p>

<h2>Directory Structure</h2>

<pre>
urban-nest
├── config
├── controllers
├── models
├── routes
├── helpers
├── middlewares
├── routes
├── strategy
├── Frontend
├── package.json
└── README.md
</pre>

<h2>Frontend Component Structure</h2>

<pre>
urban-nest/Frontend
├── public
├── src
│   ├── components
│   │   ├── booking
│   │   ├── elements
│   │   ├── navbar
│   │   ├── login-register
│   │   ├── rent
│   │   ├── user
│   │   └── listings
│   ├── hooks
│   ├── redux
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
└── package.json
</pre>

<h2>Tech Stack</h2>

<ul>
    <li><b>Node.js:</b>  Backend runtime environment.</li>
    <li><b>Express.js:</b> Web framework for building APIs.</li>
    <li><b>MongoDB:</b> NoSQL database for storing data.</li>
    <li><b>Mongoose:</b> ODM (Object Data Modeling) library for interacting with MongoDB.</li>
</ul>

<h2>Framework Used</h2>

<p>The project utilizes the <b>Express.js</b> framework. Express provides a set of tools and features for building web applications and APIs, including routing, middleware support, and request handling.  It simplifies the process of creating a RESTful API.</p>

<h2>Frameworks and Libraries Used</h2>

<h3>Frontend</h3>

<ul>
    <li><b>@reduxjs/toolkit:</b> Simplifies Redux development with a set of tools and best practices.</li>
    <li><b>@tanstack/react-query:</b> Manages server state in React applications.</li>
    <li><b>axios:</b> Promise-based HTTP client for making requests to the backend.</li>
    <li><b>formik:</b> Helps with form state management and validation.</li>
    <li><b>leaflet:</b> Open-source JavaScript library for interactive maps.</li>
    <li><b>rc-slider:</b> Slider component for React.</li>
    <li><b>react:</b> JavaScript library for building user interfaces.</li>
    <li><b>react-dom:</b> Entry point to the DOM and server renderers for React.</li>
    <li><b>react-dropzone:</b> Simple React component for file uploads.</li>
    <li><b>react-hot-toast:</b> Notifications for React applications.</li>
    <li><b>react-icons:</b> Popular icons as React components.</li>
    <li><b>react-leaflet:</b> React components for Leaflet maps.</li>
    <li><b>react-redux:</b> Official React bindings for Redux.</li>
    <li><b>react-router-dom:</b> Declarative routing for React applications.</li>
    <li><b>react-select:</b> Select component for React.</li>
    <li><b>tailwind-scrollbar:</b> Custom scrollbar styles for Tailwind CSS.</li>
    <li><b>world-countries:</b> Provides data for all countries in the world.</li>
    <li><b>yup:</b> JavaScript schema builder for value parsing and validation.</li>
</ul>

<h3>Backend</h3>

<ul>
    <li><b>bcryptjs:</b> Library to hash passwords.</li>
    <li><b>classnames:</b> Utility for conditionally joining classNames together.</li>
    <li><b>cloudinary:</b> Cloud-based image and video management.</li>
    <li><b>connect-mongo:</b> MongoDB session store for Connect and Express.</li>
    <li><b>cors:</b> Middleware to enable CORS.</li>
    <li><b>date-fns:</b> Modern JavaScript date utility library.</li>
    <li><b>dotenv:</b> Loads environment variables from a .env file.</li>
    <li><b>express:</b> Fast, unopinionated, minimalist web framework for Node.js.</li>
    <li><b>express-session:</b> Session middleware for Express.</li>
    <li><b>express-validator:</b> Express middleware for validation.</li>
    <li><b>framer-motion:</b> Motion library for React.</li>
    <li><b>mongoose:</b> MongoDB object modeling tool.</li>
    <li><b>multer:</b> Middleware for handling multipart/form-data.</li>
    <li><b>nodemon:</b> Tool that helps develop Node.js applications by automatically restarting the node application when file changes are detected.</li>
    <li><b>passport:</b> Simple, unobtrusive authentication for Node.js.</li>
    <li><b>passport-local:</b> Local authentication strategy for Passport.</li>
    <li><b>swiper:</b> Modern mobile touch slider.</li>
</ul>

<h2>Where It's Used and Why</h2>

<p>This project is a backend API designed to be used by a frontend application (e.g., a website or mobile app).  It provides the data and logic for managing property listings. The chosen technologies are common for building web applications due to their flexibility, scalability, and large community support. Node.js allows for efficient handling of concurrent requests, Express.js simplifies routing and middleware management, and MongoDB provides a flexible schema for storing diverse data.</p>

<h2>Application Workflow</h2>

<p>The application follows a typical client-server architecture.  A client (frontend) makes requests to the backend API. The backend processes these requests, interacts with the database, and sends responses back to the client.  This project focuses on the backend API development.</p>

<div class="chart">
    <svg width="400" height="300">
        <rect x="50" y="50" width="100" height="50" fill="lightblue" stroke="black" />
        <text x="75" y="75" fill="black">Client</text>
        <path d="M100 100 L200 100" stroke="black" stroke-width="2"/>
        <polygon points="200,90 210,100 200,110" fill="black"/>
        <rect x="250" y="50" width="100" height="50" fill="lightgreen" stroke="black" />
        <text x="275" y="75" fill="black">Server (API)</text>
        <path d="M300 100 L300 200" stroke="black" stroke-width="2"/>
        <polygon points="290,200 300,210 310,200" fill="black"/>
        <rect x="250" y="250" width="100" height="50" fill="lightcoral" stroke="black" />
        <text x="275" y="275" fill="black">Database</text>
    </svg>
</div>

<h2>Endpoints</h2>

<table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>Method</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/properties</td>
            <td>GET</td>
            <td>Retrieves all property listings.</td>
        </tr>
        <tr>
            <td>/properties/:id</td>
            <td>GET</td>
            <td>Retrieves a specific property listing by ID.</td>
        </tr>
        <tr>
            <td>/properties</td>
            <td>POST</td>
            <td>Creates a new property listing.</td>
        </tr>
        <tr>
            <td>/properties/:id</td>
            <td>PUT</td>
            <td>Updates a specific property listing.</td>
        </tr>
        <tr>
            <td>/properties/:id</td>
            <td>DELETE</td>
            <td>Deletes a specific property listing.</td>
        </tr>
    </tbody>
</table>

<h2>Database and Collections</h2>

<p>The application uses MongoDB as its database.  The primary collection is <b>"properties"</b>, which stores information about each property listing.  Each document in this collection represents a single property and includes fields like address, price, bedrooms, bathrooms, description, etc.</p>
