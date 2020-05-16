# My notes

## Helpful links

Transpiling: babeljs.io 
Dummy json data: https://jsonplaceholder.typicode.com/

Easy css: https://semantic-ui.com
* Semantic ui cdn: https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

lodash: https://lodash.com/


Gantt chart? https://ourcodeworld.com/articles/read/509/top-5-best-reactjs-gantt-chart-solutions

## JSX

//For all jsx properties, use double quotes
//use single quotes everywhere else

/* Reserved words: 
*Instead of class, you have to use className in JSX (class is a reserved word in js)
*for - use htmlFor
Check console for these 
*/

Values JSX can show: 
* Arrays will be concatenated

Values that JSX can't show/print: 
* js objects

BUT you can use objects for attributes/style
*/

## Components


https://semantic-ui.com

semantic ui cdn
Added to html
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

### Faker js
Note its pretty big, so don't want to use in Prod, but good for tests

Semantic css for cards

## Class Components

Functional - good for simple content

Class based 
* Easier for code organization
* Keeps track of state
* Lifecycle events

Never make API calls in the render method

### Seasons
semantic-ui icons for the winter/summer icons

        //alwasy want the root div of class to match class name

Avoid multiple return statements in render() method,
if needed, you can do renderContent() / renderBody() inside of some div

## Pics

Note that whenever you make use a function for an "onChange", DO NOT add
(), otherwise it will call the function

Controlled element
- we prefer controlled components
- Basically setting the value of an element using the state after it is rendered
- Otherwise, we could would have to go into the DOM to get the current `value` of the input during runtime ("source of truth" is the DOM, not the element)
- Instead the DOM asks the react component what the value should be, not the other way around
- Also allows you to set some initial value for an input 
Uncontrolled element

## Forms
By default 

The class component is not calling onFormSubmit(), so it won't be able to read state.

Note that Arrow functions automatically bind the value of this to the calss that it is in.

Options: 

handleFormSubmit = (event) => {...}
handleFormSubmit(event) {...}
`<onSubmit={() => this.handleFormSubmit()}>`

`<onSubmit={this.handleFormSubmit}>`

## Props
Props only go down! But, we can pass down callbacks, this allows values to be sent up 

## React Refs
Gives access to a single DOM element - in place of using document.querySelector('')
Created in the constructor, kept as an instance variable in the element 

Note: The Chrome console is smart. When you expand info about a ref, it only then checks for the details of the DOM elements 


https://lodash.com/docs/4.17.11#debounce
debounce helped a lot 
        this.debounceSetSpans = _.debounce(this.setSpans, 300);

But now there is a lag on load :(

        Theres also a bug when starting the inspector 
        TypeError: Cannot read property 'clientHeight' of null
> 27 |     const height = this.imageRef.current.clientHeight;


# Redux

Always create and return a new object in your reducers

## Songs 

# Redux-Thunk

Allows action creators to return functions



## Blogs App

### General data loading with Redux

Components are generally responsible for fetching data they need by calling an *action creator*
**Component gets rendered onto the screen**
**Component's componentDidMount lifecycle method is called**
**Component calls action creator from componentDidMount**
*Action creators* are responsible for making API requests
**Action creator calls API**
**Action creator returns an 'action' with the fetched data on the payload property**
The fetched data is sent to components by generating new state in redux store via mapStateToProps
**Some reducer seens the action, returns that data from payload**
**App is re-rendered**

### Notes
Rules of action creators:
1. Action creators must return plain JS objects!
1. By the time the action gets to the reducer, it must have the data

Rules of Reducers:
1. Each one is called exactly once on start up (can allow default state)
1. Can return anything that is **NOT** `undefined`
1. "Reducers are pure" - only the previous state and action object (that has been dispatched) can be used to produce state/sdata
1. Reducers are not supposed to fetch outside data (API requests, prompt user, etc)
1. Must not mutate input state argument (This is misleading, because you can, but easier to tell beginners to never do it. Redux determines state change by reference checking (not value checking) of the next and previous state)

In js String and number are imutable (unlike arrays/objects)

---
#### How to cache the User requests 

Every time we call the fetchUser actionCreator, a new function is returned, so we can't just blindly memoize the actionCreator

**Option 1: Memoize**
`const cachedFunc = _.memoize(func);`
//Any time that you call cachedFunc with the same parameters, the method of `func` is not called and the response is instead just cached
//NOTE: IF you ever want to re-fetch the data for a user, you will have to somehow create the function again


**Option 2: Create a new action creator called fetchPostsAndUsers**
This will just call the two actionCreators that we already have.


