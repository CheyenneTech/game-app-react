
//we want to use PascalCasing when we want to create a function component
function Message() {
    //this is JSX or JavaScript XML. the code below is going to get compiled down to javascript
    const name = ''
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;