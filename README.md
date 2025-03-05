### Real Estate Web App: Full Stack with Next.js 13

**Tech Stack:**

- **Frontend:** Next.js 13 (App Router), React, Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** MongoDB
- **Authentication:** NextAuth

**Features:**

1. **Reservations:**
   - Users can browse listings and make reservations for properties.
   - Users can view their reservations and cancel them if needed.
2. **Listings:**
   - Property owners can list their houses for rent or sale.
   - Owners can manage their listings and remove them as necessary.

**Steps to Run the App Locally:**

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/yourusername/real-estate-app.git
   cd real-estate-app
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdatabase?retryWrites=true&w=majority"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Prisma Setup:**
   Generate Prisma client and run migrations:

   ```sh
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the Development Server:**

   ```sh
   npm run dev
   ```

6. **Open the App:**
   Open your browser and go to `http://localhost:3000` to see the application running.

**Summary:**
This real estate web application is built using Next.js 13 with the new App Router, providing a modern and efficient React frontend. Tailwind CSS is used for styling, ensuring a responsive and sleek UI. Prisma ORM manages the data layer, interacting seamlessly with MongoDB. Authentication is handled by NextAuth, offering secure user login and registration.

Users can explore property listings, make and manage reservations, and property owners can list and remove their properties. This application is a comprehensive solution for a real estate marketplace, offering robust features for both renters and property owners.
