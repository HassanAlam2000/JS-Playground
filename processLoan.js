// ----- Eligible for loan -----

const monthlyIncome = 1_200;
let hasHighIncome = monthlyIncome >= 1_200;

let bankCredit = 14_550;
let hasHighCredit = bankCredit >= 10_000;

let eligibleForLoan = hasHighIncome && hasHighCredit;
let applicationStatus = eligibleForLoan ? 'accepted' : 'rejected';

console.log(`The candidate's application has been "${applicationStatus}!"`);
