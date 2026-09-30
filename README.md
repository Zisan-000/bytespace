# ByteSpace

> A modern, responsive educational platform frontend built with the Next.js App Router.

ByteSpace is a sleek e-learning interface designed to connect learners with digital asset creation courses. It features a fully responsive layout, dynamic routing, and interactive client-side state management, serving as a robust foundation ready for future backend integration.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** HeroUI
- **Icons:** React Icons (`react-icons`)
- **Data:** Local JSON mock database (`data.json`)

## ✨ Key Features

- **Dynamic Course & Creator Routes:** Utilizes Next.js dynamic routing (`/courses/[id]` and `/creators/[id]`) to generate detailed, unique pages for individual courses and instructors based on URL parameters.
- **Client-Side Cart Management:** Integrates browser `localStorage` to handle course enrollment. Features a custom event listener that instantly updates the global Navbar shopping bag counter without requiring a page reload.
- **Search, Filter & Pagination:** The main course catalog includes real-time search functionality, category filtering, and functional pagination handling to easily navigate the 50-item mock database.
- **Interactive Course Tabs:** Course detail pages feature a seamless tabbed interface (About, Lessons, Reviews) built as a Client Component for smooth content switching.
- **Custom 404 Page:** A branded, stylized error page ensuring a polished user experience even on broken links.

## 📂 Project Structure

```text
bytespace/
├── app/
│   ├── courses/
│   │   ├── [id]/page.tsx      # Dynamic individual course page
│   │   └── page.tsx           # Main course catalog
│   ├── creators/
│   │   └── [id]/page.tsx      # Dynamic creator profile page
│   │   └── page.tsx           # Default creator profile page
│   ├── login/page.tsx         # Authentication UI
│   ├── signup/page.tsx        # Registration UI
│   ├── layout.tsx             # Global layout (Navbar & Footer)
│   ├── not-found.tsx          # Custom 404 error page
│   └── page.tsx               # Landing page
├── components/
│   ├── CallToAction.tsx       # Call to action section
│   ├── CourseTabs.tsx         # Interactive tabs for course details
│   ├── DiscoverCourses.tsx    # Course catalog section
│   ├── EnrollButton.tsx       # Client-side local storage enrollment logic
│   ├── FeatureSection.tsx     # Feature section
│   ├── Footer.tsx             # Global footer
│   ├── LearningPaths.tsx      # Learning path section
│   ├── Navbar.tsx             # Global navigation with active states & cart badge
│   └── Testimonials.tsx       # Testimonials section
├── lib/
│   └── data/
│       └── data.json          # 50 mock courses driving the application
└── public/                    # Static assets (3D icons, avatars, logos)
```
