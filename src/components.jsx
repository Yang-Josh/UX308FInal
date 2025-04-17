import {QuestionA, QuestionB, QuestionC, QuestionD, QuestionE} from './functions.js';

function RGB(){
    return <section>
1. Create color based on RGB values
      <h2>results</h2>
      <p>QuestionA("blue","red") == "{QuestionA('red','blue')}"</p>
      <p>QuestionA("blue","blue") == "{QuestionA('blue','blue')}"</p>
      <p>QuestionA("blue","gree") == "{QuestionA('blue','green')}"</p>
    </section>;
}

function LargeProd(){
    return <section>
2. Find top 2 biggest and calculate product        
<h2>results</h2>
<p>QuestionB(12,10,0) == "{QuestionB(12,10,0)}"</p>
<p>QuestionB(12,10,100) == "{QuestionB(12,10,100)}"</p>
<p>QuestionB(2,10,30) == "{QuestionB(2,10,30)}"</p>
    </section>
}

function Week(){
    return <section>
3. Translate number to day of the week        
<h2>results</h2>
<p>QuestionC(2) == "{QuestionC(2)}"</p>
<p>QuestionC(7) == "{QuestionC(7)}"</p>
<p>QuestionC(8) == "{QuestionC(8)}"</p>
    </section>
}

function PayRaise(){
    return <section>
4. Take info and calculate pay raise amount       
<h2>results</h2>
<p>QuestionD(P,10,10) == "{QuestionD('P',10,10)}"</p>
<p>QuestionD(F,10,10) == "{QuestionD('F',10,10)}"</p>
<p>QuestionD(P,1,10) == "{QuestionD('P',1,10)}"</p>
    </section>
}

function LeapYear(){
    return <section>
5. Calculate if it's a leap year     
<h2>results</h2>
<p>QuestionE(400) == "{QuestionE(400)}"</p>
<p>QuestionE(16) == "{QuestionE(16)}"</p>
<p>QuestionE(100) == "{QuestionE(100)}"</p>
    </section>
}

export {RGB, LargeProd, Week, PayRaise, LeapYear}