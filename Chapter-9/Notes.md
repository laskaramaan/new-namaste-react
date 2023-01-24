### Build a feature where we will track where the user is online or offline

**Window:event online**:https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event
It is used to check in the code whether your system is online or offline

### Q.Difference between functional component and hook

A. Functional component returns JSX whereas hook doesn't contains any JSX part it contains only logic

### What is the very basic job of parcel?

A. To bundle code

### Chunking/code splitting/dynamic bundling/lazy loading/On demand loading/Dynamic import

It is required in large-scale production application

### At what point you do chunking?

A.Wherever you have a import of that particualr component-> you will have to do lazy load it(dynamic import)

e.g.:

```
import { lazy } from "react";
const InstaMart = lazy(() => import("./components/InstaMart"));
```

upon render-> react will suspend loading

### suspense-> it will allow react to lazy load

```
<Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
```

Here, inside fallback-> whatever we write-> it will execute till the page is loading

**Note:** Never ever dynamically load a component inside another component
