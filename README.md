# Storybook Deployment Demo

This project is a demonstration of Next.js with Storybook, built to test various deployment strategies for Storybook.

## Technologies Used

- Next.js 13.2.3 (with Pages Router)
- TypeScript 5.4.2
- TailwindCSS 3.4.3
- Storybook 7.5.3
- MSW Storybook Addon 2.0.2

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd storybook-deploy
```

2. Install dependencies:

```bash
yarn install
```

### Running the Application

To run the Next.js development server:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Running Storybook

To start the Storybook development server:

```bash
yarn storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Building for Production

To build the Next.js application:

```bash
yarn build
```

To build Storybook:

```bash
yarn build-storybook
```

## Project Structure

```
├── .storybook/          # Storybook configuration
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── *.stories.tsx # Storybook stories
│   ├── mocks/           # MSW mocks for API simulation
│   ├── pages/           # Next.js pages
│   └── styles/          # CSS styles
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Components

The project includes the following components:

- **Button**: A customizable button component with different variants and sizes.
- **Input**: A form input component with label and error state support.
- **Header**: A page header component with different styling variants.

## Deployment

This project can be used to test various Storybook deployment strategies including:

- GitHub Pages
- Vercel
- Netlify
- AWS Amplify
- Custom solutions

Choose the deployment strategy that best fits your requirements for your production project.
