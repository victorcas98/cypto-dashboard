# Market Dashboard - Front-End Challenge

A modern cryptocurrency market dashboard built with React, TypeScript and modern front-end architecture principles.

This project was developed to demonstrate scalable component organization, server state management, API integration, performance considerations and clean separation of responsibilities.

## 🚀 Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* React Query (TanStack Query)
* Zustand
* ESLint

## 📌 Features

* Cryptocurrency market listing
* Real API integration
* Search assets
* Infinite scrolling pagination
* Loading and error states
* Responsive UI
* Server state caching
* Client state management

## 🏗️ Architecture

The application follows a feature-based architecture:

```
src
 ├── features
 │    └── market
 │         ├── components
 │         ├── hooks
 │         ├── services
 │         ├── store
 │         └── types
 │
 ├── shared
 │    └── components
 │
 └── app
```

The goal of this structure is to keep business logic isolated and make the application easier to scale and maintain.

## 🧠 State Management

This project separates server state from client state.

### React Query

React Query is responsible for server state:

* API communication
* Data caching
* Loading states
* Error handling
* Query synchronization
* Pagination

Example flow:

```
Component
    |
Custom Hook
    |
React Query
    |
Service Layer
    |
API
```

### Zustand

Zustand is used only for client-side state.

Examples:

* UI filters
* Selected assets
* User preferences

Server data is intentionally not stored in Zustand to avoid duplicated sources of truth.

## 🔎 Data Fetching

The application uses a service layer to isolate API communication.

Example:

```
components
      |
      |
hooks
      |
      |
services
      |
      |
external API
```

This approach keeps components focused only on rendering and user interaction.

## ♾️ Infinite Scrolling

Asset loading uses TanStack Query `useInfiniteQuery`.

The implementation provides:

* Page-based fetching
* Cache per query
* Automatic loading of new pages
* Better user experience compared to traditional pagination

## 🎨 Styling

Tailwind CSS is used for:

* Responsive layouts
* Reusable UI patterns
* Fast styling workflow

The project also uses a centralized color theme to maintain consistency.

## 🛡️ Error Handling

The application handles:

* API failures
* Empty states
* Loading states

Providing feedback instead of leaving the user with an unclear interface.

## ⚡ Performance Considerations

The project considers:

* Avoiding unnecessary global state
* Using React Query cache
* Component separation
* Optimized rendering patterns

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## 📈 Future Improvements

Possible improvements:

* WebSocket integration for real-time market updates
* Authentication flow
* Advanced charts
* More detailed asset pages
* Automated tests
* CI/CD pipeline

## 👨‍💻 Author

Developed as a front-end engineering challenge demonstrating React, TypeScript and modern application architecture.
