\# Engineering Reflection \& Lifecycle Notes



\## 1. Problem \& Scope

\- \*\*Problem:\*\* Trivial "Hello World" CLI greeting tool.

\- \*\*Why this scope?\*\* The goal is not algorithmic complexity, but transparently demonstrating the software lifecycle (requirements, design, execution, version control, and reflection).



\## 2. Implementation \& Decisions

\- \*\*Language Choice:\*\* Vanilla Node.js for zero overhead and fast local execution.

\- \*\*Environment Handling:\*\* Utilized `process.argv` for input and native `Date` object for time-based contextual greetings (Morning/Afternoon/Evening).



\## 3. Where AI Was Used

\- Used AI as a thinking partner to structure the workflow, design the CLI logic quickly, and draft clean markdown documentation, while retaining full human ownership over code review, testing, and git operations.



\## 4. What Was Skipped \& Why

\- \*\*Skipped Complex Unit Testing Frameworks (e.g., Jest/Mocha):\*\* For a single-file script of 20 lines, setting up an external heavy test runner is over-engineering. Manual CLI testing (`node index.js Anup`) was deemed sufficient for this trivial scale, adhering to the principle of "right tool for the scale."

