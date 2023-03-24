function counter(){
    var count = 1;

    function add(count){
        return count + 1;
    }

    return `original count ${count}, new count: ${add(count)}`
}

console.log(counter());