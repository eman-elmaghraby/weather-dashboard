# Weather Dashboard - Next.js with TypeScript, Redux, and Tailwind CSS

This is a simple weather dashboard application built using **Next.js**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. It fetches weather information for a city and displays it on the homepage. Users can search for a city, view weather details, and toggle between light and dark modes.

## Project Structure

- **/app**: Contains the main app components and pages.
  - **/layout.tsx**: The root layout of the application that wraps the entire page.
  - **/page.tsx**: The homepage that fetches and displays weather information.
- **/components**: Contains reusable components.
  - **/WeatherCard.tsx**: A card component that displays weather details for a city.
  - **/SearchBar.tsx**: A search bar component that allows users to search for weather by city name.
  - **/ErrorMessage.tsx**: A component that displays error messages (e.g., city not found).
  - **/ThemeToggle.tsx**: A button component that allows users to toggle between light and dark modes.
- **/hooks**: Contains custom hooks for functionality like debouncing and geolocation.
  - **/useDebounce.tsx**: A custom hook to debounce search input for fetching weather data.
  - **/useGeolocation.tsx**: A custom hook to fetch the user's geolocation.
- **/lib**: Contains utility functions and API calls.
  - **/api.tsx**: A utility function to fetch weather data from the WeatherAPI.
  - **/utils.tsx**: Utility functions (e.g., for capitalizing city names).
- **/store**: Contains Redux store setup and slices for managing weather and theme state.
  - **/slices/weatherSlice.tsx**: A slice for handling weather-related state (fetching weather data, setting errors).
  - **/slices/themeSlice.ts**: A slice for managing theme state (light or dark mode).
  - **/store.tsx**: The Redux store configuration.
- **/styles**: Contains the global CSS files, including Tailwind CSS setup.
  - **/globals.css**: Global styles.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **next.config.js**: Next.js configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project dependencies and scripts.

## Features

- **Search Functionality**: Allows users to search for weather by city name.
- **Geolocation**: Automatically fetch weather based on the user's current location.
- **Theme Toggle**: Toggle between light and dark modes.
- **Error Handling**: Displays error messages when an invalid city is entered or weather data can't be fetched.
- **Responsive Design**: Tailwind CSS ensures the app is responsive and works on different screen sizes.

## Setup & Installation

Follow the steps below to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/eman-elmaghraby/weather-dashboard.git


## Deploy on Vercel

https://weather-dashboard-snowy-three.vercel.app/
