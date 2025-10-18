const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log('You can drive');
}else{
    console.log('You cannot drive');
}

const isTired = false;

const canDrive = hasDriversLicense && hasGoodVision && !isTired;
if(canDrive){
    console.log('You can drive');
}else{
    console.log('You cannot drive');
}