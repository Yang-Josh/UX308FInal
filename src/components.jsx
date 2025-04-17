import {QuestionA, QuestionB, QuestionC, QuestionD, QuestionE} from './functions.js';

function RGB(){
    return <section>
1. Create color based on RGB values
      <h2>results</h2>
      <p>QuestionA("blue", "blue") == "{QuestionA('blue', 'blue')}"</p>
      <p>QuestionA("blue", "blue") == "{QuestionA('blue', 'blue')}"</p>
      <p>QuestionA("blue", "blue") == "{QuestionA('blue', 'blue')}"</p>
    </section>;
}

function LargeProd(){
    return <section>
2. Find top 2 biggest and calculate product        
<h2>results</h2>
<p>QuestionB(12,10,0) == "{QuestionB(12,10,0)}"</p>
<p>QuestionB(12,10,0) == "{QuestionB(12,10,0)}"</p>
<p>QuestionB(12,10,0) == "{QuestionB(12,10,0)}"</p>
    </section>
}

function Week(){
    return <section>
3. Translate number to day of the week        
<h2>results</h2>
<p>QuestionC(2) == "{QuestionC(2)}"</p>
<p>QuestionC(2) == "{QuestionC(2)}"</p>
<p>QuestionC(2) == "{QuestionC(2)}"</p>
    </section>
}

function PayRaise(){
    return <section>
4. Take info and calculate pay raise amount       
<h2>results</h2>
<p>QuestionD(P,10,10) == "{QuestionD(P,10,10)}"</p>
<p>QuestionD(P,10,10) == "{QuestionD(P,10,10)}"</p>
<p>QuestionD(P,10,10) == "{QuestionD(P,10,10)}"</p>
    </section>
}

function LeapYear(){
    return <section>
5. Calculate if it's a leap year     
<h2>results</h2>
<p>QuestionE(400) == "{QuestionE(400)}"</p>
<p>QuestionE(400) == "{QuestionE(400)}"</p>
<p>QuestionE(400) == "{QuestionE(400)}"</p>
    </section>
}

export {RGB, LargeProd, Week, PayRaise, LeapYear}