const day = 'Full-moon day';

switch(day){
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Go to the gym');
        break;
    case 'Wednesday':
        console.log('Go Swimming');
        break;
    case 'Thursday':
    case 'Friday':
        console.log('Coding');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Hey, Weekend');
        break;
    default:
        console.log('Not Valid');
}

if(day === 'Monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if (day === 'Tuesday'){
    console.log('Go to the gym');
}else if (day === 'Wednesday'){
    console.log('Go Swimming');
}else if (day === 'Thursday' || day === 'Friday'){
    console.log('Coding');
}else if (day === 'Saturday' || day === 'Sunday'){
    console.log('Hey, Weekend');
}else{
    console.log('Not a valid day');
}