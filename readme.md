# Lazify

Lazy load for react components.
Original idea found [here](https://dev.to/kayis/lazy-loaded-react-components-with-webpack-2).

## How to use

Example 1:
```
const loadComponent = (name) => lazify(() => System.import(`pages/${name}.jsx`));

// ... in render

<Router>
    <div>
        <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer open={ true } docked={ true }>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <Route exact path="/" component={ loadComponent('Home') }/>
        <Route path="/settings" component={ loadComponent('Settings') }/>
    </div>
</Router>
```

`System.import` is a Webpack function that can load chunks. Also webpack can automatically generate
 a chunks that had dynamic names.
 
Example 2:
```
const MyComponent = lazify(() => System.import('components/MyComponent.jsx'), <Spinner />);

// ...

<MyComponent />
```

Here we pass second optional argument to function `lazify(load, [prompt])`, that will display
during component loading.
