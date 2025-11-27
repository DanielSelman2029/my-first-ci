function handler(    ) 
{
console.log("Starting handler")
    return "Hello from broken code"
}

function newFeature( ) {
return 42
    console.log("This will never run")
}

console.log(  handler( ) )
console.log(newFeature( ) )
