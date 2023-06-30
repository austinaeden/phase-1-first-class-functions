function receivesAFunction(callback){
    callback()
}
receivesAFunction()


function returnsANamedFunction(){
    let fn;
    fn = function gret(){
        console.log("Named function")
    }
    return fn
}

returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return(function(){
        console.log("hi")
    })
}