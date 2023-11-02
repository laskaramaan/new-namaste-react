## What is the Difference Between a Controlled and Uncontrolled Component in React?

In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.

### COntrolled Component Example:

```const ControlledInput = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <ControlledInput value={email} onChange={setEmail} placeholder="Email" />
      <ControlledInput
        value={password}
        onChange={setPassword}
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
  );
};
```

### Uncontrolled component example

```
import React, { useRef } from "react";

const UncontrolledInput = ({ placeholder }) => {
  return <input defaultValue="" placeholder={placeholder} />;
};

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UncontrolledInput ref={emailRef} placeholder="Email" />
      <UncontrolledInput ref={passwordRef} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## The Pros and Cons of Using Controlled vs Uncontrolled Components

Controlled components have the advantage of being more predictable and easier to debug because the state is controlled by the parent component. However, this can also make them more complex to implement in larger projects with many levels of nested components.

On the other hand, uncontrolled components are simpler to implement, but they can be more difficult to track and manage in larger projects. They are also harder to test as the internal state is not exposed.
