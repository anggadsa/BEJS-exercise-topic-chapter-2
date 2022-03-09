# Parser Class

`WAJIB MEMBUAT CLASS.`

### HINTS

- Nama `Class` haruslah `Parser` dan __tidak boleh diganti dengan nama class lainnya__. Untuk detail class akan mengacu kepada [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu membuat class dan melakukan manipulasi method maupun property di dalamnya.
- Dapat menghasilkan suatu class dengan tujuan dan fungsi tertentu.

## Directions

Diberikan sebuah `class` bernama `Parser` dimana class tersebut akan kita gunakan untuk melakukan parsing berbagai hal.

Buatlah beberapa method yang `HANYA BISA DIAKSES` oleh class `Parser`, seperti `parseIncomingArray`, `parseIncomingObject`, `parseIncomingUrl` sehingga dapat menghasilkan berbagai hasil seperti contoh berikut:

```js
class Parser {

}

console.log(Parser.parseIncomingArray([[2, 4, 6], [5, 7, 8], [1], [10, 'hello']])); // 2, 4, 6, 5, 7, 8, 1, 10, hello
console.log(Parser.parseIncomingObject({name: 'Arlingga', age: 20, firstArray: [1, 2, 3], firstObject: {name : 'Steven', age: 20}})); // Arlingga, 20, 1, 2, 3, Steven, 20

console.log(Parser.parseIncomingUrl('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python')); 
// {
//   protocol: 'https',
//   originalUrl: 'github.com/pubnub/python/search',
//   query: 'utf8=%E2%9C%93&q=python',
//   params: { utf8: '%E2%9C%93', q: 'python' }
// }
```