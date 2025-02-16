<h1>Urban Nest Project</h1>

<p>This project is a practice application for learning and exploring backend development using Node.js, Express, and MongoDB. It simulates a simplified real estate listing platform.</p>

<h2>Tech Stack</h2>

<ul>
    <li><b>Node.js:</b>  Backend runtime environment.</li>
    <li><b>Express.js:</b> Web framework for building APIs.</li>
    <li><b>MongoDB:</b> NoSQL database for storing data.</li>
    <li><b>Mongoose:</b> ODM (Object Data Modeling) library for interacting with MongoDB.</li>
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

<h2>Framework Used</h2>

<p>The project utilizes the <b>Express.js</b> framework. Express provides a set of tools and features for building web applications and APIs, including routing, middleware support, and request handling.  It simplifies the process of creating a RESTful API.</p>
