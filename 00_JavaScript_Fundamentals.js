/* LEARNING JAVASCRIPT IN JUST 2 DAYS */

/* CHAPTER: 01 *//* TYPE OF VARIABLES IN JAVASCRIPT */
    /* var, let, const */
        var vr = 5
        let lt = 10
        const cnst = 15

/* CHAPTER: 02 *//* VARIABLE NAMING RULES */
        var x = 10; // x is a number
        var y = "hello"; // y is a string
        var z = [1, 2, 3]; // z is an array

/* CHAPTER: 03 *//* PRIMITIVES DATA TYPE OF JAVASCRIPT */
    /* NN BB SS U */
        let nl = null
        let num = 1234
        let bool = true
        let bigInt = BigInt(567)
        let str = "Name>"
        let symb = symbol("its a symbol")
        let uns = undefined

/* CHAPTER: 04 *//* NON-PRIMITIVES DAT: AOBJECTS OF JAVASCRIPT */
        const item = {
            "Apple": Red,
            "Mango": Yellow,
            "Orange": Orange,
        }
        console.log("item") 
        console.log(item["Orange"])

/* CHAPTER: 05 *//* OPERATORS IN JAVASCRIPT */
    /*
    +	Addition
    -	Subtraction
    *	Multiplication
    **	Exponentiation (ES2016)
    /	Division
    %	Modulus (Division Remainder)
    ++	Increment
    --	Decrement
    */
        console.log(6+5)  // 11
        console.log(6-5)  // 01
        console.log(6*5)  // 30
        console.log(6**2) // 36
        console.log(6/2)  // 03
        console.log(6%2)  // 00
        console.log(6++)  // 6,7
        console.log(6--)  // 5,6

/* CHAPTER: 06 *//* CONDITIONAL LOGIC IN JAVASCRIPT */
        /*
        ==	equal to
        ===	equal [value and type]
        !=	not equal
        !==	not equal [value or type]
        >	greater than
        <	less than
        >=	greater than or equal to
        <=	less than or equal to
        ?	ternary operator
        */ 
        var x=prompt('enter your number')
        if(x==="1"){
            console.log(x)
        }
   
/* CHAPTER:7 *//* IF ELSE STATEMENT OF JAVASCRIPT */
        let age = prompt("Enter Your Age")
        if (age>0 && age<13) {
            greeting = "You are a kid"
        } else if (age>12 && age<20) {
            greeting = "You are teenager"
        } else if (age>19 && age<60) {
            greeting = "You are adult"
        } else if (age>59) {
            greeting = "you senior citizen"
        } else {
            alert("Enter A valdid input")
        }    

/* CHAPTER:8 *//* SWITCH EXPRESSION OF JAVASCRIPT */
    /* let age = prompt("Enter Your Age") */
        switch(age){
        case "10":
          console.log("10Y")
          break
        case "11":
          console.log("11Y")
          break
        case "12":
          console.log("12Y")
          break
        case "13":
          console.log("13Y")
          break
        default:
          console.log("Invalid")
        }

/* CHAPTER:09 *//* TERNARY OPERATOR OF JAVASCRIPT */
    /* (a>0? "Arguement1" : "Arguement2" */
        let a = 5
        console.log("text1",  (a>0? "text2":"text3"))
    
/* CHAPTER:10 *//* LOOP "FOR, WHILE, DO-WHILE, FOR IN,  OF JAVASCRIPT */
    /* For loop */
        /* for(let i=0 ; i<n ; i++/i-- ) {
           console.log(i, "Hi")
           }
        */
        let n = prompt("Enter a number")
        n = Number.parseInt(n)
        for(let i=0;i<=n;i++){
        console.log(i, "Hi")
        }
    /* while loop */
        /* while(condition){} */
        let m = prompt("enter the value ")
        m = Number.parseInt(m);
        while(m>0){
            console.log(m, "Hlw")
            m--
        }

/* CHAPTER:11 *//* FUNCTION  OF JAVASCRIPT */
    /* Type - i [Basic] */
        /* let funName(x, y){
           return x*y;
           }
        */
        let a1 = 5
        let a2 = 6
        function myFunc(x, y){
            return x+y
        }
        console.log("Sum of n1 and n2", myFunc(a1, a2))
    /* Type - ii [Arrow]*/
        /* const myFun = ()=> {
           return "Hello World!"
            }
         console.log(myFun())
        */
        const myName = ()=> {
            return "D. Supriyo"
        }
        console.log("Hi I'm", myName())

/* CHAPTER: 12 *//* STRING OF JAVASCRIPT */   
    /* Length of a String */
        let nAme = "Supriyo"
        console.log(nAme.length)
        console.log(nAme[3]) 
    /* Index numer on of Sring */
        let gf = "Jayitaa"
            for (let i=0 ; i<Number.parseInt(gf.length) ; i++) {
                console.log(gf[i])
            }
    /* Escape Sequence */
        /* \' \n \t \r */
        let codeName = 'Supriyo\'s' 
        greeting = codeName
    /* ToUpperCase/ToLowerCase Methods */
        let vName = "sAyAn"
        console.log(vName.toUpperCase(), vName.toLowerCase())
    /* Trim Methods */
        let tName = "     Nitish      "
        console.log(tName.trim())
    /* Slice Methods */
        let sName = "abcdefghij"
        console.log(sName.slice(1,8))
    /* Slice Methods */
        let rName = "K. Priti"
        console.log(rName.replace("K." , "N."))
    /* Using of $ sign */
        let friendName = "Akas"
        console.log(`${friendName} is friend of ${nAme}`)

/* CHAPTER: 14 *//* ARRAY and ARRAY METHODS JAVASCRIPT */
        let myArry = [1, 2, 3, 4, 5]
        console.log(myArry)
    /* Push-Method*/
        myArry.push(NaN)
        console.log(myArry)
    /* Pop-Method*/
        myArry.pop()
        console.log(myArry)
    /* Pop-Method*/
        myArry.shift()
        console.log(myArry)
    /* Pop-Method*/
        myArry.unshift(NaN)
        console.log(myArry)
    /* Pop-Method*/
        var myArray = [1, 2, 3, 4, 5];
        myArray.forEach(function(element) {
           console.log(element);
        });

/* CHAPTER: 15 *//* MAP-FILTER-REDUCE METHODS */
        let myArray = [1, 2, 3, 4, 5];
    /* Map */
        let multipliedArray = myArray.map(function(element) {
            return element * 2;
        });
        console.log(multipliedArray); // [2, 4, 6, 8, 10]
    /* Filter */
        let evenNumbers = myArray.filter(function(element) {
        return element % 2 === 0;
        });
        console.log(evenNumbers); // [2, 4]
    /* Reduce */
        var sum = myArray.reduce(function(acc, cur) {
        return acc + cur;
        }, 0);
        console.log(sum); // 15

/* CHAPTER: 16 *//* DATE, MATH, NUMBER BOOLEAN */
    /* Date */
        let date = new Date()
        console.log(date)
        console.log(date.toLocaleTimeString())
        console.log(date.toLocaleDateString())
        console.log(date.getMinutes())
        console.log(date.getSeconds())
        console.log(date.getHours())
        console.log(date.getDay())
        console.log(date.getMonth())
        console.log(date.getFullYear());
    /* Math */
        let aNum = 5.25
        console.log(Math.random(5))
        console.log(Math.floor(aNum))
        console.log(Math.ceil(aNum))
        console.log(Math.max(5,6,7,8))
        console.log(Math.min(5,6,7,8))
        console.log(Math.pow())
        console.log(Math.sqrt())
        console.log(Math.PI())
        console.log(Math.E())
    /* Number */
        console.log(Number("3.14"));
        // Output: 3.14
        console.log(Number(true));
        // Output: 1
        console.log(parseInt("3"));
        // Output: 3
        console.log(parseFloat("3.14"));
        // Output: 3.14
        console.log(Number.MAX_VALUE);
        // Output: 1.7976931348623157e+308
        console.log(Number.MIN_VALUE);
        // Output: 5e-324
        console.log(1 / 0);
        // Output: Infinity
        console.log(-1 / 0);
        // Output: -Infinity
        console.log((3.1415926535897932384626433832795).toFixed(2));
        // Output: "3.14"    
    /* Boolean */
        var isTrue = Boolean(1);
        console.log(isTrue); // Output: true
        var isFalse = Boolean(0);
        console.log(isFalse); // Output: false
        var x = true;
        var y = false;
        console.log(x && y); // Output: false
        console.log(x || y); // Output: true
        console.log(!x); // Output: false
        console.log(!y); // Output: truevar b = new Boolean(true);
        console.log(b.valueOf()); // Output: true
        var b = new Boolean(true);
        console.log(b.valueOf()); // Output: true

/* CHAPTER: 17 *//* ACCESING CHILD, PARRENTS AND DOM */
    /*  document.element.firstChild      
        document.element.lastChild
        document.element.childNodes
        document.element.parentNode
        document.element.parentElement
    */
    /*  document.element.previousElementSibling
        document.element.nextElementSibling
        document.element.firstElementChild
        document.element.lastElementChild
    */
    /*
        document.getElementById("")
        document.getElementsByClassName("")
        document.querySelectorAll("CSS Selector")[index]
        document.querySelector("CSS Selector")
    */
    /*
        setTimeout
        clearTimeout
        setInterval
        clearInterval
        CloseEvent
    */

/* -- THE END -- */