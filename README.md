
The application will start and can be accessed at `http://localhost:3000`.

## Usage

Once the application is running, you can select a language, date format, number format, and units type from the dropdown menus. The application will display a welcome message, a date, a number, and a unit value, all localized according to your selections.

## Scripts

The following scripts are available:

- `npm start`: Starts the development server.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test watcher in an interactive mode.
- `npm eject`: Removes this tool and copies build dependencies, configuration files and scripts into the app directory.

## Application Structure

The main entry point of the application is the `App` component, which uses the `useTranslation` hook from `react-i18next` to provide localization. It maintains state for the selected language, date format, number format, and units type, and provides functions to handle changes to these selections.

The `App` component renders `LocalizedDate`, `LocalizedNumber`, and `LocalizedUnit` components, passing them the relevant format key or units type and a value to display.

## Testing

To run tests, use the `npm test` command. The tests use the `@testing-library/react` package.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.
