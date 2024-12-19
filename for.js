// 1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday as cases and any expression related to case 
// var day="SUNDAY";
switch("MONDAY"){
        case "MONDAY":
        console.log("The first day of the week ");
        break;
        case "TUESDAY":
        console.log("The day after Monday ");
        break;
        case "WEDNESDAY":
        console.log("The day after Tuesday ");
        break;
        case "THURSDAY":
        console.log("The day after wednesday ");
        break;
        case "FRIDAY":
        console.log("The day after thursday ");
        break;
        case "SATURDAY":
        console.log("The day before Sunday");
        break;
        case "SUNDAY":
        console.log("The last day of the week");
        break;
        default:
            console.log("Invalid day! Please enter a valid day.")

}

// 2. For of loop:-- iterate array of elements having number 1  to 5
var a=[1,2,3,4,5]
for(var element of a){
console.log(a);
}

// 3. For of loop:-- take string Nd iterate characters

var b="LIKITHA"
for(var char of a){
    console.log(b)
}