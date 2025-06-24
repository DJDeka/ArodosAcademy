
const curriculum = [{"week": 1, "title": "HTML & CSS Basics, Box Model, Typography", "topics": ["HTML tags", "CSS syntax", "Typography"], "descriptions": ["<a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>HTML</a> defines the structure of web pages.", "<a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>CSS</a> styles the visual layout of web pages.", "Typography involves selecting fonts, sizes, and spacing for readable content."], "project": "Simple Profile Page", "exercise": "Create a personal profile page with headings, paragraphs, and styled text"}, {"week": 2, "title": "Flexbox, Grid, Layout Building", "topics": ["CSS Flexbox", "CSS Grid", "Responsive Layouts"], "descriptions": ["<a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank'>Flexbox</a> is used to arrange items in a single dimension.", "<a href='https://css-tricks.com/snippets/css/complete-guide-grid/' target='_blank'>CSS Grid</a> helps design two-dimensional layouts.", "Layouts help structure content for different screen sizes."], "project": "Portfolio Layout", "exercise": "Design a responsive portfolio layout with header, sections and footer"}, {"week": 3, "title": "Responsive Design, Media Queries", "topics": ["Responsive Web Design", "Media Queries", "Viewports"], "descriptions": ["Responsive design ensures your site looks good on all devices.", "<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries' target='_blank'>Media Queries</a> apply styles conditionally based on device features.", "Viewport tags help control how content is scaled."], "project": "Responsive Blog Page", "exercise": "Convert a fixed-width site into a responsive one"}, {"week": 4, "title": "Tailwind CSS or Bootstrap Basics", "topics": ["Utility-first CSS", "Components", "Grid system"], "descriptions": ["<a href='https://tailwindcss.com/' target='_blank'>Tailwind CSS</a> is a utility-first CSS framework.", "<a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a> provides pre-built UI components.", "Use class-based styling for consistent UI."], "project": "Landing Page with Tailwind or Bootstrap", "exercise": "Create a call-to-action section using a UI library"}, {"week": 5, "title": "Animations, Effects, Accessibility", "topics": ["CSS Transitions", "Animations", "Web Accessibility"], "descriptions": ["CSS transitions enable smooth style changes.", "Animations create movement and improve UX.", "Accessibility ensures all users can interact with your site."], "project": "Interactive Cards", "exercise": "Add hover animations and make cards keyboard accessible"}, {"week": 6, "title": "Final Project with Responsive Design", "topics": ["Project Planning", "HTML+CSS Integration", "Mobile Testing"], "descriptions": ["Plan layout and components before coding.", "Combine HTML and CSS for final polished output.", "Test the site on mobile and tablet devices."], "project": "Multi-section Responsive Site", "exercise": "Build a site with navbar, gallery and contact section"}, {"week": 7, "title": "React Basics", "topics": ["JSX", "Components", "Props"], "descriptions": ["<a href='https://react.dev/learn/writing-markup-with-jsx' target='_blank'>JSX</a> is a syntax extension that lets you write HTML inside JavaScript.", "<a href='https://react.dev/learn/your-first-component' target='_blank'>Components</a> are reusable UI blocks in React.", "<a href='https://react.dev/learn/passing-props-to-a-component' target='_blank'>Props</a> allow you to pass data between components."], "project": "User Profile Viewer", "exercise": "Render multiple user cards dynamically"}, {"week": 8, "title": "React State & Events", "topics": ["useState", "onClick/onChange"], "descriptions": ["<a href='https://react.dev/learn/state-a-components-memory' target='_blank'>useState</a> is a React hook for managing local state in components.", "<a href='https://react.dev/learn/responding-to-events' target='_blank'>Event Handling</a> in React is used to handle user interactions like clicks and input changes."], "project": "Counter App + Search Filter", "exercise": "Build a product list with search bar"}, {"week": 9, "title": "React Router & Forms", "topics": ["Routing", "Nested routes", "Forms"], "descriptions": ["<a href='https://reactrouter.com/en/main/start/tutorial' target='_blank'>React Router</a> is used to add navigation and multi-page structure to React apps.", "<a href='https://react.dev/learn/forms' target='_blank'>Forms</a> in React allow users to input and submit data."], "project": "Blog Viewer", "exercise": "Navigate between post list and post details"}, {"week": 10, "title": "Global State Management", "topics": ["Context API", "Redux Intro"], "descriptions": ["<a href='https://react.dev/learn/passing-data-deeply-with-context' target='_blank'>Context API</a> allows sharing values across the app without passing props manually.", "<a href='https://redux.js.org/introduction/getting-started' target='_blank'>Redux</a> is a predictable state container for JavaScript apps."], "project": "Theme Switcher", "exercise": "Toggle dark/light mode using context"}, {"week": 11, "title": "TailwindCSS or Styled Components", "topics": ["Utility classes", "Custom styles", "Reusability"], "descriptions": ["<a href='https://tailwindcss.com/docs/utility-first' target='_blank'>TailwindCSS</a> is a utility-first CSS framework for rapid UI development.", "<a href='https://styled-components.com/docs' target='_blank'>Styled Components</a> enable writing CSS-in-JS scoped to individual components."], "project": "Styled Login Form", "exercise": "Rebuild a UI component with Tailwind"}, {"week": 12, "title": "Capstone Project", "topics": ["Project planning", "Team work", "Deployment"], "descriptions": ["<a href='https://vercel.com/' target='_blank'>Vercel</a> and <a href='https://www.netlify.com/' target='_blank'>Netlify</a> offer free hosting for React apps.", "Use <a href='https://docs.github.com/en/pages' target='_blank'>GitHub Pages</a> or GitHub repositories for collaboration and deployment."], "project": "Responsive Web App", "exercise": "Deploy to Netlify/Vercel with GitHub"}];

function createUI() {
  const root = document.getElementById("root");
  const heading = document.createElement("h1");
  heading.textContent = "3-Month Frontend Curriculum";
  root.appendChild(heading);

  const btnContainer = document.createElement("div");
  curriculum.forEach((week, i) => {
    const btn = document.createElement("button");
    btn.textContent = "Week " + week.week;
    btn.onclick = () => showContent(i);
    btnContainer.appendChild(btn);
  });
  root.appendChild(btnContainer);

  const content = document.createElement("div");
  content.className = "tab-content";
  content.id = "tab-content";
  root.appendChild(content);

  showContent(0);
}

function showContent(i) {
  const week = curriculum[i];
  const content = document.getElementById("tab-content");
  content.innerHTML = `
    <h2>${week.title}</h2>
    <strong>Topics:</strong>
    <ul>${week.topics.map(t => `<li>${t}</li>`).join("")}</ul>
    ${week.descriptions.map(d => `<p>${d}</p>`).join("")}
    <p><strong>Project:</strong> ${week.project}</p>
    <p><strong>Exercise:</strong> ${week.exercise}</p>
  `;
  document.querySelectorAll("button").forEach((b, idx) =>
    b.classList.toggle("active", idx === i)
  );
}

createUI();
