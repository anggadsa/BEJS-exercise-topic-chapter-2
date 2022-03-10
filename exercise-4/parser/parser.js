class Parser {
    constructor (string){
        // this.array = string;
    }

    static parseIncomingArray(array){
        let string = '';
        for (let i=0; i<array.length; i++){
            for(let j=0; j<array[i].length;j++){
                if(i === array.length-1 && j === array[i].length-1){
                    string += `${array[i][j].toString()}`
                } else {
                    string += `${array[i][j].toString()}, `
                }
            }
        }
        return string
    }
    // akhir parseIncomingArray() 
    static parseIncomingUrl(url){

            let newUrl = url.split(`://`)
            let newUrl2 = newUrl[1].split(`?`); //[ 'github.com/pubnub/python/search', 'utf8=%E2%9C%93&q=python' ]
            let originalUrl = newUrl2[0]; //
            let query = newUrl2[1]; //
            let params = newUrl2[1].split(`=`);
            let utf8 = params[1].split(`&`); //
            let utf = utf8[0]
            let language = params[2] // python
            // 
            let objectNya = {
                protocol: newUrl[0],
                originalUrl: newUrl2[0],
                query: query,
                params: { utf8: utf, q: language}
            }
            
            return objectNya
        }

    static parseIncomingObject(object){
            
            let nama = `${object.name}, `;
            let age = `${object.age}, `;
            let firstArray = `${object.firstArray[0]}, ${object.firstArray[1]}, ${object.firstArray[2]}, `;
            let firstObject = object.firstObject.name + `, ` + object.firstObject.age;
            let result = nama + age + firstArray + firstObject
            
            return result
    }
    

} // akhir class

console.log(Parser.parseIncomingArray([[2, 4, 6], [5, 7, 8], [1], [10, 'hello']])); // 2, 4, 6, 5, 7, 8, 1, 10, hello

console.log(Parser.parseIncomingUrl('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python')); 

console.log(Parser.parseIncomingObject({name: 'Arlingga', age: 20, firstArray: [1, 2, 3], firstObject: {name : 'Steven', age: 20}}));

