<h1>Urban Nest Project v1.0.0</h1>

<p>This project is a practice application for learning and exploring backend development using Node.js, Express, and MongoDB. It simulates a simplified real estate listing platform.</p>

<h2>Directory Structure</h2>

<div style="display: flex; justify-content: space-between;">
    <div>
        <h3>Backend</h3>
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
├── package.json
└── README.md
        </pre>
    </div>
    <div>
        <h3>Frontend</h3>
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
    </div>
</div>

<h2>Tech Stack</h2>

<ul>
    <li><b>Node.js:</b> Backend runtime environment.</li>
    <li><b>Express.js:</b> Web framework for building APIs.</li>
    <li><b>MongoDB:</b> NoSQL database for storing data.</li>
    <li><b>Mongoose:</b> ODM (Object Data Modeling) library for interacting with MongoDB.</li>
    <li><b>React:</b> JavaScript library for building user interfaces.</li>
    <li><b>Redux Toolkit:</b> Simplifies Redux development with a set of tools and best practices.</li>
    <li><b>React Query:</b> Manages server state in React applications.</li>
    <li><b>Axios:</b> Promise-based HTTP client for making requests to the backend.</li>
    <li><b>Formik:</b> Helps with form state management and validation.</li>
    <li><b>Tailwind CSS:</b> Utility-first CSS framework for styling.</li>
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
            <td>/api/auth/register</td>
            <td>POST</td>
            <td>Register a new user.</td>
        </tr>
        <tr>
            <td>/api/auth/login</td>
            <td>POST</td>
            <td>Login a user.</td>
        </tr>
        <tr>
            <td>/api/auth/logout</td>
            <td>POST</td>
            <td>Logout a user.</td>
        </tr>
        <tr>
            <td>/api/auth/status</td>
            <td>GET</td>
            <td>Check authentication status.</td>
        </tr>
        <tr>
            <td>/api/listing/all</td>
            <td>GET</td>
            <td>Retrieve all listings.</td>
        </tr>
        <tr>
            <td>/api/listing/create/data</td>
            <td>POST</td>
            <td>Create a new listing with data.</td>
        </tr>
        <tr>
            <td>/api/listing/create/images</td>
            <td>POST</td>
            <td>Upload images for a listing.</td>
        </tr>
        <tr>
            <td>/api/listing/:lid</td>
            <td>GET</td>
            <td>Retrieve a specific listing by ID.</td>
        </tr>
        <tr>
            <td>/api/booking/create</td>
            <td>POST</td>
            <td>Create a new booking.</td>
        </tr>
        <tr>
            <td>/api/booking/all</td>
            <td>GET</td>
            <td>Retrieve all bookings.</td>
        </tr>
        <tr>
            <td>/api/booking/:bid</td>
            <td>GET</td>
            <td>Retrieve a specific booking by ID.</td>
        </tr>
        <tr>
            <td>/api/user/bookings</td>
            <td>GET</td>
            <td>Retrieve bookings for the logged-in user.</td>
        </tr>
        <tr>
            <td>/api/user/favourites</td>
            <td>POST</td>
            <td>Add a listing to favourites.</td>
        </tr>
        <tr>
            <td>/api/user/favourited/all</td>
            <td>GET</td>
            <td>Retrieve all favourited listings for the logged-in user.</td>
        </tr>
        <tr>
            <td>/api/user/profile</td>
            <td>GET</td>
            <td>Retrieve the profile of the logged-in user.</td>
        </tr>
    </tbody>
</table>

<h2>Database and Collections</h2>

<p>The application uses MongoDB as its database provider with Mongoose as the ODM (Object Data Modeling) library. The database is named <b>"urban-nest"</b> and includes the following collections:</p>

<ul>
    <li><b>sessions:</b> Used for session storage.</li>
    <li><b>users:</b> Stores user information.</li>
    <li><b>bookings:</b> Stores booking information.</li>
    <li><b>listings:</b> Stores property listings.</li>
</ul>

<h3>User Model</h3>

```javascript
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        bookings: {
            type: [Schema.Types.ObjectId],
            ref: "Booking",
        },
        favourites: {
            type: [Schema.Types.ObjectId],
            ref: "Listing",
        },
    },
    { timestamps: true }
);
```

<h3>Listing Model</h3>

```javascript
const listingSchema = new Schema(
    {
        owner: {
            oid: { type: Schema.Types.ObjectId, ref: "User", required: true },
            name: { type: String, required: true },
        },
        details: {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String },
        },
        location: {
            country: { type: String },
            latLng: { type: [Number], required: true },
        },
        category: [{ type: String }],
        facilities: {
            rooms: { type: Number, required: true },
            baths: { type: Number, required: true },
            pets: { type: Boolean, default: false },
            more: [{ type: String }],
        },
        images: [],
    },
    { timestamps: true }
);
```

<h3>Booking Model</h3>

```javascript
const bookingSchema = new Schema(
    {
        user: {
            name: { required: true, type: String },
            uid: { type: Schema.Types.ObjectId, ref: "User", required: true },
        },
        listing: { type: Schema.Types.ObjectId, ref: "Listing", required: true },
        date: {
            start: { type: Schema.Types.Date, required: true },
            end: { type: Schema.Types.Date, required: true },
        },
        guests: [
            {
                firstName: {
                    type: String,
                    required: true,
                },
                lastName: {
                    type: String,
                    required: true,
                },
                Country: {
                    type: String,
                    required: true,
                },
                age: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
);
```

<h2>Application Workflow</h2>

<p>This section provides a detailed explanation of the application's workflow, from user registration to booking a property.</p>

<h3>User Registration and Authentication</h3>
<ol>
    <li><b>Register:</b> A new user registers by providing their first name, last name, email, and password via the <code>/api/auth/register</code> endpoint. The password is hashed using <b>bcryptjs</b> before being stored in the database.</li>
    <li><b>Login:</b> The user logs in by providing their email and password to the <code>/api/auth/login</code> endpoint. The credentials are verified, and a session is created using <b>express-session</b> and stored in the <b>sessions</b> collection.</li>
    <li><b>Logout:</b> The user can log out by hitting the <code>/api/auth/logout</code> endpoint, which destroys the session.</li>
    <li><b>Authentication Status:</b> The user's authentication status can be checked via the <code>/api/auth/status</code> endpoint.</li>
</ol>

<h3>Listing Management</h3>
<ol>
    <li><b>Retrieve Listings:</b> All property listings can be retrieved using the <code>/api/listing/all</code> endpoint.</li>
    <li><b>Create Listing:</b> A new listing can be created in two steps:
        <ul>
            <li>Submit listing data via the <code>/api/listing/create/data</code> endpoint.</li>
            <li>Upload images for the listing via the <code>/api/listing/create/images</code> endpoint.</li>
        </ul>
    </li>
    <li><b>Retrieve Specific Listing:</b> A specific listing can be retrieved by its ID using the <code>/api/listing/:lid</code> endpoint.</li>
</ol>

<h3>Booking Management</h3>
<ol>
    <li><b>Create Booking:</b> A new booking can be created by providing the necessary details via the <code>/api/booking/create</code> endpoint.</li>
    <li><b>Retrieve Bookings:</b> All bookings can be retrieved using the <code>/api/booking/all</code> endpoint.</li>
    <li><b>Retrieve Specific Booking:</b> A specific booking can be retrieved by its ID using the <code>/api/booking/:bid</code> endpoint.</li>
    <li><b>User Bookings:</b> The logged-in user's bookings can be retrieved using the <code>/api/user/bookings</code> endpoint.</li>
</ol>

<h3>User Favourites</h3>
<ol>
    <li><b>Add to Favourites:</b> A listing can be added to the user's favourites via the <code>/api/user/favourites</code> endpoint.</li>
    <li><b>Retrieve Favourites:</b> All favourited listings for the logged-in user can be retrieved using the <code>/api/user/favourited/all</code> endpoint.</li>
</ol>

<h3>User Profile</h3>
<ol>
    <li><b>Retrieve Profile:</b> The profile of the logged-in user can be retrieved using the <code>/api/user/profile</code> endpoint.</li>
</ol>
