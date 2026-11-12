Project Name: Dev Stack Builder Website

Description:
Dev Stack is an interactive tech-stack builder designed for developers planning modern software projects. Users can browse curated tools across frontend, backend, database, and DevOps categories, compare difficulty levels and community ratings, and put together their own custom stack in real time.
Key Features:
• Interactive Stack Builder: Add or remove technologies on the fly with instant updates in the Your Stack sidebar.
• Curated Tech Cards: Quickly compare tool summaries, category tags, skill levels, and community ratings at a glance.
• Unified Gradient Theme: Built with a responsive Tailwind CSS layout and a single orange-to-pink-to-violet gradient theme used across the entire app.

Q&A

1. What is JSX, and why is it used in React?
   JSX is a syntax extension for JavaScript that lets us write HTML-like markup right inside our JavaScript files. React uses it so we can keep the UI layout and the logic behind it together in the same component, which makes the code much easier to read, write, and maintain.
2. What is the difference between props and state?
   Props (short for properties) are read-only inputs passed down from a parent component to a child component. State, on the other hand, is mutable data managed internally inside a component that can change over time based on user actions or updates.
3. What does the `useState` hook do, and where did you use it in this project?
   The useState hook lets functional components store and update data across re-renders. In this project, I used it in two main places: first, to cache the JSON fetch promise so the data doesn't re-fetch unnecessarily, and second, to manage the list of technologies the user adds to or removes from their stack.
4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   The useEffect hook lets us run side effects—like fetching data or interacting with external systems—after React renders a component. When loading external JSON data, useEffect ensures the network request runs after the initial render and only executes once when the component mounts, rather than triggering an infinite loop on every re-render.
5. Why does every item in a `.map()` list need a unique `key` prop?
   Every item in a .map() list needs a unique key prop so React can keep track of which specific items were added, changed, or removed across re-renders. Having a stable ID lets React update only the exact elements that changed instead of re-rendering the whole list.
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   Conditional rendering is when you show or hide different UI elements based on certain conditions, like state values or available data. In my project, I used it in the Your Stack sidebar on the right side of the page—if no technologies are selected yet, it shows an empty-state message, and once the user starts adding tools, it switches to displaying their selected stack list.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   React uses one-way data flow, so a parent passes data down to a child component using props. To send information back up, the parent passes a callback function down as a prop, and the child calls that function when an event happens. In Dev Stack, the parent passes each technology object along with onAdd and onRemove handler functions down to the child components, so clicking Add to Stack or × sends that item back up to update the shared state.
