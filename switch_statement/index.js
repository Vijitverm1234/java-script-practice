let day =prompt("enter any number");
day=Number(day)
switch (day) {
    case 1:
        console.groupCollapsed("Monday");
        break;
    case 2:
        console.groupCollapsed("Tuesday");
        break;
    case 3:
        console.groupCollapsed("Wednesday");
        break;
    case 4:
        console.groupCollapsed("Thursday");
        break;
    case 5:
        console.groupCollapsed("Friday");
        break;
    case 6:
        console.groupCollapsed("Saturday");
        break;
    case 7:
        console.groupCollapsed("Sunday");
        break;
    default:
        console.log("no matching case ")

// break plays a very important role in switch case , as absence it can lead to working of multiple case at a time .

}