# Weather App

This is a simple weather application that fetches and displays current weather data for a specified city using the WeatherAPI.

## Features

- Users can search for current weather conditions by entering a city name.
- Displays the temperature, humidity, weather condition, and wind speed.
- Provides loading indication when fetching data.
- Basic error handling for invalid city names or failed requests.

## Prerequisites

To run the project locally, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

## Getting Started

### Clone the Repository

```bash

git clone https://github.com/surendergupta/xweatherapp.git
cd xweatherapp

```

### Install Dependencies

Run the following command to install the required dependencies:

```bash

npm install

```

### API Key

This application uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. To use the app, you need an API key.

1. Sign up for an API key at [WeatherAPI](https://www.weatherapi.com/).
2. Replace the placeholder ```API_KEY``` in the ```App.js``` file with your actual API key.

```javascript

const API_KEY = "your_api_key_here";

```

### Running the Application

To start the application, run:

```bash

npm start

```

The app should now be running at ```http://localhost:3000```.

## Usage
1. Enter a city name in the search box.
2. Click the **Search** button to fetch the current weather.
3. Weather information such as temperature, humidity, condition, and wind speed will be displayed.

## Project Structure

- ```App.js:``` Main component for the weather app.
- ```App.css:``` Styling for the app components.

## Error Handling

- If no city is entered, the search will not proceed.
- If an invalid city is entered, an alert will notify the user of the failure to fetch data.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **WeatherAPI:** External API to fetch real-time weather data.

## Future Enhancements

- Improve the design and styling of the weather cards.
- Add functionality to display a forecast for upcoming days.
- Handle more detailed errors and improve user experience.
