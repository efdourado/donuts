# Donuts

## Description

The project was developed using **Next.js** for the frontend, **Prisma** for database management with PostgreSQL, and is fully dynamic, allowing customization of information like name, image, product categories, etc.

### Features:

1. **Restaurant Page**:
    - 

2. **Menu Page**:
    - Displays the categories of products available at the restaurant.

## Organization

- **Backend**: 
  - Uses Prisma ORM to integrate with the PostgreSQL database.
  - Database models:
    - **Restaurant**: Contains information about the restaurant.
    - **Category**: Contains the categories for products.
    - **Product**: Information about menu products.
    - **Order**: Details about customer orders.
    - **OrderProduct**: Relates products to the orders made.

- **Frontend**:
  - **Next.js** is used for dynamic page rendering.
  - Components such as **Image** for displaying dynamic images and **OrderTypeOption** for navigating between order types (DineIn and Takeaway).

## How to Run

### Prerequisites

- Node.js installed.
- A Neon account (for PostgreSQL database) and database configuration.
- Vercel for hosting the project (optional).

### Steps

1. **Install Dependencies**:

    - Clone the repository:

        ```bash
        git clone <REPOSITORY_URL>
        cd <DIRECTORY_NAME>
        ```

    - Install the dependencies:

        ```bash
        npm install
        ```

2. **Database**:

    - Create a `.env` file and add your Neon PostgreSQL database URL:

        ```bash
        DATABASE_URL="your_postgresql_database_url"

3. **Access the Restaurant**:

    - Start the development server:

        ```bash
        npm run dev
    - The default template is a McDonald's model and you can access at: `http://localhost:3000/mcdonaldsmodel`.