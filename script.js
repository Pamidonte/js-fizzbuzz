/*se i è un multiplo di 3 && 5 allora apparirà sulla console
intera e sulla stessa riga la scritta FizzBuzz*/
for (let i = 1; i <= 100; i++ ){
    if ((i % 3 == 0) && (i % 5 == 0) ) {
        console.log(">FizzBuzz");
    }
    /* nel primo else if se i è un multiplo di 3 con resto zero 
    apparirà la scritta Fizz */
    else if ( i % 3 ==0) {
        console.log("Fizz");
    }
     /* nel secondo else if se i è un multiplo di 5 con resto zero 
    apparirà la scritta Buzz */
    else if (i % 5 ==0) {
        console.log("Buzz");
    }
    /*tutto cio che non rietra nei casi specificati verrà
    visualizzato come un numero  */
    else {
        console.log(i);
    }

}
