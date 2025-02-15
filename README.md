# React Components Learning Project

This project demonstrates fundamental React concepts through the creation of various components. It serves as a practical introduction to component-based architecture, props, and component composition in React.

## Project Overview

This project includes several React components that showcase different aspects of component development:

### 1. Basic Component Structure
- Created multiple standalone components
- Demonstrated proper component organization and file structure
- Implemented functional components using modern React syntax

### 2. City-Related Components
The project includes a set of components that create a simple webpage about favorite cities:

- **Header Component**: Displays the title "My Favorite Cities"
- **MainContent Component**: Shows a list of favorite cities (New York, Paris, Tokyo)
- **Footer Component**: Displays copyright information

### 3. User Profile Feature
Implemented a UserProfile component that demonstrates:
- Props usage for data passing
- Component reusability
- Structured data display

Example usage:
```jsx
<UserProfile 
  name="Alice" 
  age="25" 
  bio="Loves hiking and photography" 
/>
```

## Component Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── MainContent.jsx
│   ├── Footer.jsx
│   └── UserProfile.jsx
└── App.jsx
```

## Key Learning Outcomes

1. **Component Creation**: Learned to create functional components in React
2. **Props Management**: Implemented props to pass data between components
3. **Component Composition**: Practiced combining multiple components in a parent component
4. **JSX Syntax**: Gained experience with JSX markup and expression syntax
5. **File Organization**: Learned proper file structure for React applications

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the local development URL (typically http://localhost:5173)

## Future Enhancements

Potential areas for expansion:
- Add styling to components
- Implement state management
- Add interactivity to the UserProfile component
- Create more complex prop structures
- Add form handling for user data input

## Requirements

- Node.js
- npm or yarn
- Vite
- React

## Contributing

This project is for learning purposes. Feel free to fork and modify for your own learning journey.