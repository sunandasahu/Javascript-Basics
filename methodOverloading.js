// We can not use method overloading in Javascript. But we can achieve it through a function with all different parameter in one function.

function displayBrowserInfo(browserName, browserVersion, remoteExecution){
    if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean' ){
        console.log(`Browser: ${browserName},'Version:' ${browserVersion}, 'Execution:' ${remoteExecution}`) ;    
    }
    else if(typeof browserVersion === 'number'){
        console.log(`Browser: ${browserName},'Version:' ${browserVersion}`) ;    
    }
    else{
        console.log(`Browser: ${browserName}`);

    }

}
displayBrowserInfo('chrome', 115, true)
displayBrowserInfo('firefox')