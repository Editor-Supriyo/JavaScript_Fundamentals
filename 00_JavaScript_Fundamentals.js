/* LEARNING JAVASCRIPT IN 2 DAYS */

/* CHAPTER: 01 *//* TYPE OF VARIABLES IN JAVASCRIPT */
    //var, let, const
    var vr = 5
    let lt = 10
    const cnst = 15

/* CHAPTER: 02 *//* SYNTAX IN JAVASCRIPT */
    console.log("Hello World")
    greeting = ("Hello World") 
    prompt("Hello World")
    alert("Hello World")

/* CHAPTER: 03 *//* PRIMITIVES DATA TYPE OF JAVASCRIPT */
    // NN BB SS U
    let nl = null
    let num = 1234
    let bool = true
    let bigInt = BigInt(567)
    let str = "Name>"
    let symb = symbol("its a symbol")
    let uns = undefined

/* CHAPTER: 04 *//* NON-PRIMITIVES DAT: AOBJECTS OF JAVASCRIPT */
    //EXP
    const item = {
        "Apple": Red,
        "Mango": Yellow,
        "Orange": Orange,
    }
    console.log("item") 
    console.log(item["Orange"])

/* CHAPTER: 05 *//* OPERATORS IN JAVASCRIPT */
    /* EXAMPLE :
    +	Addition
    -	Subtraction
    *	Multiplication
    **	Exponentiation (ES2016)
    /	Division
    %	Modulus (Division Remainder)
    ++	Increment
    --	Decrement */
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
    ?	ternary operator */ 
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
    // let age = prompt("Enter Your Age")
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
    /* Syntax: (a>0? "Arguement1" : "Arguement2" */
        let a = 5
        console.log("text1",  (a>0? "text2":"text3"))
    
/* CHAPTER:10 *//* LOOP "FOR, WHILE, DO-WHILE, FOR IN,  OF JAVASCRIPT */
    /* (i) for loop
    *   syntax :
        for(let i=0 ; i<n ; i++/i-- ) {
           console.log(i, "Hi")
           } */
    let n = prompt("Enter a number")
    n = Number.parseInt(n)
    for(let i=0;i<=n;i++){
        console.log(i, "Hi")
        }
    /* (ii) for in loop
    *for('variable' in 'object'){
        }
    */
    var obj = {
        name:"<NAME>",
        age:678
        };
       for(var key in obj){
           if(key=="name"){
               alert(obj[key])
               }else {
                   continue
                   }
                    }

    /* (iii) while loop
    *    Syntax :while(condition){} */
    let m = prompt("enter the value ")
    m = Number.parseInt(m);
    while(m>0){
        console.log(m, "Hlw")
     m--
    }
  
/* CHAPTER:11 *//* FUNCTION  OF JAVASCRIPT */
    /* Type - i [Basic]
    * let funName(x, y){
        return x*y;
        }
    */ 
    let a1 = 5;
    let a2 = 6;
    let a3 = 7;
    let a4 = 8;
    let a5 = 9;
    function myFunc(x, y){
        return x+y
    }
    console.log("Sum of n1 and n2", myFunc(a1, a2))
    /* Type - ii [Arrow]
    * const myFun = ()=> {
    *   return "Hello World!"
    *    }
    * console.log(myFun())
    */
    const myName = ()=> {
        return "D. Supriyo"
        }
        console.log("Hi I'm", myName())

/* CHAPTER: 12 *//* STRING OF JAVASCRIPT */   
    /* Length of String */
        let nAme = "Supriyo"
        console.log(nAme.length)
        console.log(nAme[3])
    /* Using of $ sign */
        let friendName = "Akas"
            console.log(`${friendName} is friend of ${nAme}`)
    /* Escape Sequence */
        /* \' \n \t \r */
        let codeName = 'Supriyo\'s' 
        greeting = codeName
    /* Find index using for loop */    
        let gf = "Jayitaa"
            for (let i=0 ; i<Number.parseInt(v.length) ; i++) {
                console.log(v[i])
            }
    /* ToUpperCase/ToLowerCase Methods */
        let vName = "sAyAn"
        console.log(vName.toUpperCase(), vName.toLowerCase())
    /* Trim Methods */
        let tName = "     Nitish      "
        console.log(tName.trim())
    /* Slice Methods */
        let sName = "abcdefghij"
        console.log(sName.slice(1,8))

/* CHAPTER: 13 *//* ARRAY IN JAVASCRIPT */
    let aNum = [1, 2, 3, 4, 5]
    console.log(typeof aNum)
    /* PUSH-METHOD */

/* CHAPTER: 14 *//* MAP-FILTER-REDUCE METHODS */

/* -- THE END -- */