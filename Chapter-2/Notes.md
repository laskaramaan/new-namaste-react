# Igninting our app


### Q. What is Library?
A. Its a piece of code that somebody wrote for us
Note: React is also a library, This library exports a lot of super powers that we can use
Simplest way to inject react to your is using CDN links

### Q. Why react was introduced?
A. They wanted to write whole HTML inside JS file

### Q. Difference between react and reactDOM
A. react is the core package and reactDOM is used for manipulating the DOM

createElement()=>

```React.createElement(
  type,
  [props],
  [...children]
)
//Create and return a new React element of the given type.
```

**BUNDLERS:** vite,webpack,parcel

### Q.What does bundlers do?
A. Bundlers minify your code, remove the console logs and a lot of other things to make it optimized and production ready.
**Remember**: By default parcel does not remove console logs, we have to configure our system.

Note: create-react-app uses webpack as bundler

But we will use **parcel**
PARCEL is a package

**Now what is a package?**
    Pacxkage is kind of a module or some piece of code,  when need to use package in the project we would have to use package manager (e.g. npm, yarn)

```To install npm: npm init -y // init stands for initialize, -y it skips a lot of steps``` 
After this we would see a new file in the project called "package.json"

### Q.Why we need package managers like npm/yarn?
A. We want to manage a lot of packages, a react app is a huge app which doesnot run on just react, there are a lot of super powers which we need and those super powers comes from different packages

So now npm is installed in your machine, from now on whenever we need to install any package we will do that using npm

```$ npm install -D parcel

-D (devDependeny) means we are installing it in your development enviroment

```
### {Q.read about devDependency and dependency}


after this a new file would show up caled "package-lock.json" and also node modules folder is added

### Q.What's package-lock.json?
    It's a very important file
    Package-lock locks the version of packages so that there is no uncertainity.
    Don't ever put it into gitignore.
    It keeps track of the veriosn and maintains hash of it as well
    This hash ensures that the verios of the package that is running in my system is same in the server as well

### Q.What's node module and why its required?
Whenever you install something(packeges/libraries) it gets installed in the mode modules, so we can say that node modules is kind of a database for the npm



### Q.Difference between ^ and ~ and "none of these two"

### Q.Should you add node_modules to gitignore?
Yes, we dont need in the git,bcz the package-lock.json has sufficient information to recreate node modules


```
$npm install react
$npm install react-dom
```
After this , react is installed in the project as a package 

```
$npx parcel index.html


//With this command we are iginiting our react app
//npx means execution using npm
//index.html is the entry point

//Therefore it means, execute parcel and gave the enrty point as 
//index.html 
```

after this, the server is created and the app is running in the localhost


note:
If we are using import keyword inside any JS file then the type should be "module"

```
e.g

<script type="module src="App.js"></script>

//this means App.js is a module, hence it can have import keyword
```

Note:
HMR= Hot Module Replacement,this is done by parcel which means parcel will keep track of all the files that are being updated, it will automatically refresh.
Parcel does image optimization as well.
Parcel also does caching while development.
Parcel does compression also.
Parcel makes the app compatible with older version of  with the help of browserlist.
parcel uses consistent hashing algorithm to do all the bundling.
Parcel also does tree shaking.

### Q.What is tree shaking?
A. Tree shaking means removing unwanted code.

    **What is unwanted code?**
    A. Suppose your app is importing a library and it a gives to 10-20 helper functions, but suppose we use only 2-3 helper functions.Parcel is very smart it will just ignore the unused code.

 
 How does parcel know about the changes in the files?
    There is something called file watcher algorithm which does this job. It is written in C++.

So, the moment we installed parcel two more folders got added 
 1. .parcel-cache: this provides the space to parcel to carry-out functionalities like file wacthing,caching etc
 2. dist: 
    when we give the command "$npx parcel index.html", it creates a development build for us and it host the app on our server.
    Now when i tell parcel to make a production buld using "build" keyword in the command "$npx parcel build index.html", it will optimize the app and then it will push this build to **dist**.


Note:
We should put parcel-cache in gitignore,bcz anything which is auto generated in the server can be put in gitignore

Transitive dependencies-> dependencies ka inception
{We have package manager which takes care of transitive dependencies of our code}