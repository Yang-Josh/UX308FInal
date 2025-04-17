function QuestionA(rgb1, rgb2){
    const colour = "";
    if (rgb1 = "red"){
        if(rgb2 = "red"){
            colour = "red";
        }
        else if (rgb2 = "blue"){
            colour = "fuchsia";
        }
        else if (rgb2 = "green"){
            colour = "yellow";
        }

    }
    else if (rgb1 = "green"){
        if(rgb2 = "red"){
            colour = "yellow";
        }
        else if (rgb2 = "blue"){
            colour = "aqua";
        }
        else if (rgb2 = "green"){
            colour = "green";
        }

    }
    else if (rgb1 = "blue"){
        if(rgb2 = "red"){
            colour = "fuchsia";
        }
        else if (rgb2 = "blue"){
            colour = "blue";
        }
        else if (rgb2 = "green"){
            colour = "aqua";
        }
    }
    else {
        colour = "error";
    }

    return colour;
}

function QuestionB(val1, val2, val3){
    const Fproduct = 0;
    const prod1 = 0;
    const prod2 = 0;
    if (val1> val2 && val1> val3){
        prod1 = val1;
        if (val2 > val3){
            prod2 = val2;
        
        }
        else {
            prod2 = val3;
        }

    }
    else if (val2 > val1 && val2 > val3){
        prod1 = val2
        if (val1 > val3){
            prod2 = val1
        
        }
        else {
            prod2 = val3;
        }

    }
    else if (val3 > val1 && val3 > val2){
        prod1 = val3;
        if (val1 > val2){
            prod2 = val1;

        }
        else {
            prod2 = val2;
        }
    }

    else {
    }

    Fproduct = prod1*prod2;

    return Fproduct;
}

function QuestionC (day_num){
    const day ="";
    if (day_num = 1){
        day = "Sunday";
    }
    else if (day_num = 2){
        day = "Monday";
    }
    else if (day_num = 3){
        day = "Tuesday";
    }
    else if (day_num = 4){
        day = "Wednesday";
    }
    else if (day_num = 5){
        day = "Thursday";
    }
    else if (day_num = 6){
        day = "Friday";
    }
    else if (day_num = 7){
        day = "Saturday";
    }

    else{
        day = "Error";
    }

    return day;
}

function QuestionD (status, years, salary){
    const Newsal = 0;
    if (status = "F"){
        if (years >= 10){
            Newsal = salary+(salary*.05);
        
        }
        else if (years < 4 ){
            Newsal = salary+(salary*.015);
        
        }
        else {
            Newsal = salary+(salary*.02);
        }
    }
    else if (status = "P"){
        if (years > 10){
            Newsal = salary+(salary*.03);
        
        }
        else if (years < 4){
            Newsal = salary+(salary*.01);
        
        }
        else {
            Newsal = salary+(salary*.02);
        }
    
    }
    else {
        Newsal = "Error";
    }


    return Newsal;
}

function QuestionE (year){
    const Lyear = "";
    const YearCalc1 = year%4;
    const YearCalc2 = year%100;
    const YearCalc3 = year%400;
    if (YearCalc2 = 0) {
        Lyear = "Not a leap year";

        }
        else if (YearCalc3 = 0 ){
            Lyear = "Is a leap year"
       
        }
        else if (YearCalc1 = 0){
            Lyear = "Is a leap year";
        
        }
        else {
            Lyear = "Not a leap year";
        }

        return Lyear;
}

export {QuestionA, QuestionB, QuestionC, QuestionD, QuestionE}