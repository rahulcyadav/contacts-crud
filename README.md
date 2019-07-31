## Instructions to run the project

In the project directory, run the following two commands in separate consoles:

### `npm run mockapi`

Runs the mock json server to provide mock data

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder structure

- **assets**: for images fonts, etc.
- **components**: for reusable UI components.
- **constants**: for constants like colors, font-family etc.
- **interfaces**: components which compose reusable UI components or page level components
- **logichooks**: container equivalent of hooks
- **models**: redux store, reducers, actions, selectors, sagas, apis etc.
- **utilities**: general utilities

## Libraries used

- **axios**: axios is used for async api calls
- **formik**: to handle form state and validations
- **formik-material-ui**: material ui wrappers for material ui fields
- **redux**: for application state management
- **redux-saga**: redux middleware to handle side effects
- **redux-starter-kit**: to generate redux actions, reducers and selectors
- **typescript**: for static types
- **validator**: for form validations

- **faker**: to generate mock data
- **prettier**: code formatter
- **tslint**: for linting source code

## Description

A single page app for CRUD operations on contacts.
The app consists of a single screen which is the `<App/>` component.
The existing list of contacts is fetched on mount of the `<App/>` component by dispatching a `fetchRequest` redux action.
An `isLoading` flag is set inside the redux store to show a loading spinner for the async fetch operation.
The saga catches the `fetchRequest` and triggers an api call.
On completion of the api call the saga dispaatches an appropriate `fetchSuccess` or `fetchFailure` redux action.
On `fetchSuccess` or `fetchFailure` the reducer resets the `isLoading` flag and the `data` or `error` from the action payload.
The component accordingly displays an error or the fetched data.