# Lazify

Lazy load for react components.
Original idea found [here](https://dev.to/kayis/lazy-loaded-react-components-with-webpack-2).

## Install

```
yarn add react-lazify --save
```
or
```
npm install react-lazify --save
```

## How to use

Example 1:
```jsx
const loadComponent = (name) => lazify(() => System.import(`pages/${name}.jsx`));

// ... in render

<Router>
    <div>
        <Route exact path="/" component={ loadComponent('Home') }/>
        <Route path="/settings" component={ loadComponent('Settings') }/>
    </div>
</Router>
```

`System.import` is a Webpack function that can load chunks. Also webpack can automatically generate
 a chunks that had dynamic names.
 
Example 2:
```jsx
const MyComponent = lazify(() => System.import('components/MyComponent.jsx'), <Spinner />);

// ...

<MyComponent some={ 'prop' } that={ 'will' } be={ 'passed' } to={ 'loaded' } component />
```

Here we pass second optional argument to function `lazify(load, [prompt])`, that will be display
during component loading.
