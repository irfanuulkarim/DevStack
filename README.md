# DevStack

A modern and responsive Dev Stack Builder built with React, TypeScript,
Tailwind CSS, DaisyUI, and React-Toastify.
The application allows developers to explore different technologies
and create their own development stack.

# Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

# Features

1. Technology Explorer
   Browse different technologies with their category, description,
   difficulty level, rating, and badge.

2. Stack Builder
   Add technologies to your personal stack, remove individual
   technologies, or remove the entire stack.

3. Responsive Design
   The application works across desktop, tablet, and mobile devices.

# React Questions

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside
JavaScript or TypeScript.It makes React components easier to
read and write because we can describe the UI directly inside
our component.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.
For example, selectedTechnologies is state in App.tsx, while
selectedTechnologies passed to StackSidebar is a prop.

3. What does the useState hook do, and where did you use it in this project?

useState allows a React component to store and update data.
In this project, we used it in App.tsx to store the technologies
selected by the user.
/* const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]); */

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect allows us to run code after a component renders.
We use it to fetch the technology data from the JSON file when the
Technology section loads.
This keeps the technology data outside the component instead of
hardcoding the array inside the component.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.
A unique key helps React understand which item was added, removed,
or changed.
For example:
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
Here, technology.id is the unique key.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on
a condition.
I used it in the Stack Sidebar.
When the stack is empty, show an empty message:
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // selected technologies
)}

7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?

A parent sends data to a child using props.
For example:
<TechnologySection
  selectedTechnologies={selectedTechnologies}
  onAddToStack={addToStack}
/>
The child can send information back to the parent by calling a
function that the parent passed as a prop.
For example:
onAddToStack(technology);
So the parent provides the function, and the child calls it when
the user clicks the button.