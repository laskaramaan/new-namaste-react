# Error Boundary in React.js

Error boundaries are react components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They’re like a JavaScript catch {} block but for components.

## Error boundaries dont work in following cases:

1. Event handlers (for that, you need to use regular try/catch)
2. Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
3. Server-side rendering
4. Errors thrown in the error boundary itself (rather than its children)

ou need to define a class component with either or both of the following lifecycle methods: getDerivedStateFromError() or componentDidCatch().

**getDerivedStateFromError():** This lifecycle method renders a fallback UI after an error is thrown. It is called during the render phase, so side effects are not permitted.

**componentDidCatch():** This method is used for logging error information. It is called during the commit phase, so side effects are permitted

````class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}```
````
