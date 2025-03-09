function receivesAFunction(cd){
    return cd();
}
console.log(receivesAFunction(() => `I am a callback function`))

function returnsANamedFunction(){
    return function foo(){
        return `I am a named return function`;
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "I am a returned anonymouse function"
    }
}