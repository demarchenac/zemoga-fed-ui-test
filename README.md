# Zemoga UI FED Test

UI test @ Zemoga

## Published

See it [here](https://zemoga-fed-ui-test-interactive.netlify.app/home)

## React Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This npx template enables typescript for development. The following npx command generates the Create React App template:

```
> npx create-react-app interactive --template typescript
> yarn add sass
```

### Development Environment

To run this project in a development environment open a terminal inside _./interactive_ and run:

```
> yarn start
```

This will open the dev server at [http://localhost:3000](http://localhost:3000) if the port isn't occupied by another app.

## Styling

### Icons

The icons were retrieved from [FontAwesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) npm package.

### B.E.M.

I followed the [Block Element Modifier (BEM)](https://en.bem.info/methodology/quick-start/) methodology in order to create the styles of the web app.

### 7 - 1 Sass Architecture

I defined the folder structure for the styles following the principles from [Sass Guidelines](https://sass-guidelin.es/#architecture), the main reason as the use cases for this structure is to store the variables, mixins and fonts.

### Toast Notifications

I used the npm package [react-toastify](https://fkhadra.github.io/react-toastify/introduction) in order to create toast notifications at the upper right corner of the viewport.

## Storage

I used the browser local storage as a memory to store the following keys keys:

-   **demar-zemoga-ui-test-session:** the data of the candidates
-   **demar-zemoga-ui-test-candidates:** the session id for voting

### Candidate Data Structure

I defined the followig interface in order to structure the data of a candidate:

```
{
    id: number;
    name: string;
    imageUrl: string;
    lastUpdate: string;
    updateArea: string;
    description: string;
    upvotes: number;
    downvotes: number;
    votes: string[];
}

```

### Image Storage

Finally I uploaded the image files to [cloudinary](https://cloudinary.com/) in order to have more of a real life web app flow when retrieving information.

### To Add

-   **Testing:** I would probably handle this part of the development process with _mocha & chai_ or with _testing-library_, I think that any of these tools would generate great tests.
