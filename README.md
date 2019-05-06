#My notes

##JSX

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

###Faker js
Note its pretty big, so don't want to use in Prod, but good for tests

Semantic css for cards

## Class Components

Functional - good for simple content

Class based 
* Easier for code organization
* Keeps track of state
* Lifecycle events

Never make API calls in the render method

###Seasons
semantic-ui icons for the winter/summer icons

        //alwasy want the root div of class to match class name

Avoid multiple return statements in render() method,
if needed, you can do renderContent() / renderBody() inside of some div

#Pics

Note that whenever you make use a function for an "onChange", DO NOT add
(), otherwise it will call the function

Controlled element
- we prefer controlled components
- Basically setting the value of an element using the state after it is rendered
- Otherwise, we could would have to go into the DOM to get the current `value` of the input during runtime ("source of truth" is the DOM, not the element)
- Instead the DOM asks the react component what the value should be, not the other way around
- Also allows you to set some initial value for an input 
Uncontrolled element

##Forms
By default 

The class component is not calling onFormSubmit(), so it won't be able to read state.

Note that Arrow functions automatically bind the value of this to the calss that it is in.

Options: 

handleFormSubmit = (event) => {...}
handleFormSubmit(event) {...}
`<onSubmit={() => this.handleFormSubmit()}>`

`<onSubmit={this.handleFormSubmit}>`

##Props
Props only go down! But, we can pass down callbacks, this allows values to be sent up 

##React Refs
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


#Redux

Always create and return a new object in your reducers