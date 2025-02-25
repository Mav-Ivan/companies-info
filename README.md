## Installation

To get started with the project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies:**
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run the Project:**
   After the dependencies are installed, start the development server:

   ```bash
   npm start
   ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:5173` to view the app in action.

## Project Structure

The project is organized into a clear directory structure, making it easy to navigate and understand. Below is an overview of the main components:

```
public/
  └── companies-lookup.json

src/
  ├── components/
  │   ├── navbar/
  │   │   └── Navbar.tsx
  │   ├── window/
  │   │   ├── Window.consts.tsx
  │   │   └── Window.tsx
  │   ├── window-content/
  │   │   ├── WindowContent.tsx
  │   │   └── CloseAdditionalControlsButton.tsx
  ├── consts/
  │   ├── styles.enum.tsx
  │   └── types.tsx
  ├── context/
  │   └── theme-context.jsx
  ├── utils/
  │   └── utils.ts
```

### Directory Breakdown

- **public/**: Contains fake API (information about companies) `companies-lookup.json`.

- **src/**:
  - **components/**: Holds all the reusable components for the application.
    - **navbar/**: Contains the `Navbar.tsx` component for the navigation bar.
    - **window/**: Houses components related to the window functionality.
    - **window-content/**: Contains components for displaying content within the window.
  - **consts/**: Stores constant definitions and type declarations for the project.
  - **context/**: Manages global state and context for theme settings.
  - **utils/**: Utility functions and helpers are found in `utils.ts`.
