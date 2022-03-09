class Parser {
    constructor (string){
        this.array = this.parseIncomingArray(string)
    }

    parseIncomingArray(){
        
        return string
    }
}







const arrayS = new Parser([[2, 4, 6], [5, 7, 8], [1], [10, 'hello']]);

console.log(arrayS)
// console.log(Parser.parseIncomingArray([[2, 4, 6], [5, 7, 8], [1], [10, 'hello']])); // 2, 4, 6, 5, 7, 8, 1, 10, hello
// console.log(Parser.parseIncomingObject({name: 'Arlingga', age: 20, firstArray: [1, 2, 3], firstObject: {name : 'Steven', age: 20}})); // Arlingga, 20, 1, 2, 3, Steven, 20

// console.log(Parser.parseIncomingUrl('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python')); 
// {
//   protocol: 'https',
//   originalUrl: 'github.com/pubnub/python/search',
//   query: 'utf8=%E2%9C%93&q=python',
//   params: { utf8: '%E2%9C%93', q: 'python' }
// }