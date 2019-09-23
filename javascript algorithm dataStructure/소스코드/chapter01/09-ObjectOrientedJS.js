/* Object 예제 1 */

var obj = new Object();

/* Object 예제 2 */

var obj = {};

obj = {
    name: {
        first: '간달프',
        last: '회색의'
    },
    address: '중간계'
};

/* Object 예제 3 */

function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn);
    }
}

var book = new Book('제목', 123, '9781783554874');

console.log(book.title); //도서 제목 출력

book.title = '자바스크립트 자료 구조와 알고리즘'; //도서 제목 업데이트

console.log(book.title); //업데이트된 도서 제목 출력

Book.prototype.printTitle = function(){
    console.log(this.title);
};

book.printTitle();

book.printIsbn();