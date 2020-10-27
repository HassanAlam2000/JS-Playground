// Just for the sake of learning use of switch-case statement

let percentage = 70;

let category = undefined;
if (percentage >= 90) category = 'A+';
else if (percentage >= 80 && percentage < 90) category = 'A';
else if (percentage >= 75 && percentage < 80) category = 'B';
else if (percentage >= 70 && percentage < 75) category = 'C';

switch (category) {
    case 'A+':
        console.log("Congratulations! You've got full scholarship.");
        break;
    case 'A':
        console.log("Congratulations! You've got 80% scholarship.");
        break;
    case 'B':
        console.log("Congratulations! You've got 75% scholarship.");
        break;
    case 'C':
        console.log("Congratulations! You've got 70% scholarship.");
        break;
    default:
        console.log("Sorry! You've not got any concessions.");
}
