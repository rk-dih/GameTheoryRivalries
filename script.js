// Back To Top Button

let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

if (window.scrollY > 500) {

topButton.style.display = "block";

}

else {

topButton.style.display = "none";

}

});

topButton.onclick = function () {

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// Fade Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el=>{

observer.observe(el);

});
// Accordion

const accordions=document.querySelectorAll(".accordion");

accordions.forEach(button=>{

button.addEventListener("click",function(){

this.classList.toggle("active");

let panel=this.nextElementSibling;

if(panel.style.display==="block"){

panel.style.display="none";

}

else{

panel.style.display="block";

}

});

});
function showSpotify(){

document.getElementById("spotifyExplain").innerHTML=

"<b>Explanation:</b><br><br>(8,8) Both firms keep premium pricing and earn healthy profits.<br><br>(10,4) Spotify discounts and attracts more subscribers.<br><br>(4,10) Apple discounts and gains more customers.<br><br>(6,6) Both discount, increasing subscribers but reducing profits.";

}

function showCJP(){

document.getElementById("cjpExplain").innerHTML =

"<b>Explanation:</b><br><br><b>(8,7)</b> CJP continues its campaign and the Government responds. Public pressure leads to action, benefiting both through increased accountability.<br><br><b>(9,3)</b> CJP continues while the Government ignores the issue. CJP gains public attention, but the Government faces criticism.<br><br><b>(5,8)</b> CJP reduces campaigning after the Government responds. The Government restores confidence, while CJP's influence decreases.<br><br><b>(2,6)</b> CJP reduces campaigning and the Government ignores the issue. Public attention fades and neither side gains significantly.";

}

function showCoke(){

document.getElementById("cokeExplain").innerHTML =

`
<h3>Explanation of the Payoff Matrix</h3>

<p><b>(8,8) – Coca-Cola Advertises | Pepsi Advertises</b></p>

<p>
When both companies invest heavily in advertising, neither gains a significant competitive advantage because both remain equally visible in the market. Although advertising costs are high, both companies maintain strong brand loyalty and stable market shares. This creates a balanced outcome where each firm earns good profits without losing customers to its competitor.
</p>

<br>

<p><b>(7,9) – Coca-Cola Advertises | Pepsi Discounts</b></p>

<p>
Pepsi attracts more price-sensitive customers by offering discounts while Coca-Cola focuses mainly on branding. Pepsi experiences higher short-term sales and market share growth, resulting in a higher payoff. Coca-Cola still retains loyal customers because of its strong brand image but loses some customers looking for lower prices.
</p>

<br>

<p><b>(9,7) – Coca-Cola Discounts | Pepsi Advertises</b></p>

<p>
This is the opposite situation. Coca-Cola gains additional customers through lower prices while Pepsi relies on advertising. Coca-Cola achieves a higher payoff because the discount strategy attracts consumers who are sensitive to price, whereas Pepsi depends mainly on brand loyalty.
</p>

<br>

<p><b>(6,6) – Coca-Cola Discounts | Pepsi Discounts</b></p>

<p>
If both companies continuously reduce prices, they attract more customers but significantly reduce their profit margins. This creates a price war in which neither company gains a lasting competitive advantage. Although sales volumes increase, overall profitability declines for both firms, making this the least desirable outcome.
</p>

<br>

<p><b>Game Theory Interpretation</b></p>

<p>
The payoff matrix illustrates that both companies prefer competing through advertising, branding, product innovation, and customer loyalty instead of engaging in continuous price wars. This explains why Coca-Cola and Pepsi spend billions on global marketing campaigns, celebrity endorsements, sponsorships, and new product launches rather than constantly lowering prices.
</p>

`;

}

function showZomato(){

document.getElementById("zomatoExplain").innerHTML =

`
<h3>Explanation of the Payoff Matrix</h3>

<p><b>(6,6) – Zomato Discounts | Swiggy Discounts</b></p>

<p>
When both Zomato and Swiggy offer heavy discounts simultaneously, they attract a large number of customers in the short term. However, both companies sacrifice a significant portion of their profit margins because of the high cost of promotional offers. Since both firms are following the same strategy, neither gains a lasting competitive advantage, making this a moderate payoff for both players.
</p>

<br>

<p><b>(7,8) – Zomato Discounts | Swiggy Fast Delivery</b></p>

<p>
Zomato attracts price-sensitive customers through discounts, while Swiggy focuses on improving delivery speed and customer experience. Fast and reliable delivery often increases customer satisfaction and repeat orders, giving Swiggy a slightly higher payoff. Although Zomato gains additional users through discounts, it earns lower profits due to promotional costs.
</p>

<br>

<p><b>(8,7) – Zomato Fast Delivery | Swiggy Discounts</b></p>

<p>
In this scenario, Zomato invests in logistics, faster delivery, and operational efficiency, while Swiggy relies mainly on discounts. Customers increasingly value quick and reliable delivery, especially in urban markets, allowing Zomato to build long-term customer loyalty. Swiggy still attracts some customers through lower prices but earns slightly lower profits because of the cost of discounts.
</p>

<br>

<p><b>(9,9) – Zomato Fast Delivery | Swiggy Fast Delivery</b></p>

<p>
Both companies prioritize improving delivery speed, technology, rider networks, and customer service instead of relying on discounts. This results in higher customer satisfaction, stronger brand loyalty, and improved operational efficiency. Since neither company is sacrificing profits through excessive discounting, both enjoy sustainable growth and healthy long-term profitability. This is the highest payoff for both firms.
</p>

<br>

<p><b>Game Theory Interpretation</b></p>

<p>
The payoff matrix demonstrates that investing in operational excellence and customer experience is a more sustainable competitive strategy than engaging in continuous price wars. In reality, both Zomato and Swiggy have increasingly focused on improving delivery times, expanding restaurant partnerships, enhancing technology, and entering quick-commerce services rather than depending solely on discounts. This reflects a Nash Equilibrium where both firms benefit from innovation and efficiency instead of aggressive pricing.
</p>

`;

}

function showNike(){

document.getElementById("nikeExplain").innerHTML =

`
<h3>Explanation of the Payoff Matrix</h3>

<p><b>(8,8) – Nike Marketing | Adidas Marketing</b></p>

<p>
When both Nike and Adidas focus primarily on marketing, they invest heavily in advertisements, athlete sponsorships, social media campaigns, and global sporting events. Both companies maintain strong brand recognition and customer loyalty, but neither gains a significant competitive advantage because they are following similar strategies. Although marketing expenses are high, both firms continue to generate healthy sales and stable profits, resulting in balanced payoffs.
</p>

<br>

<p><b>(7,9) – Nike Marketing | Adidas Innovation</b></p>

<p>
Nike continues investing mainly in marketing while Adidas focuses on product innovation by developing new footwear technologies, sustainable materials, and performance-enhancing designs. Innovation provides Adidas with a stronger competitive advantage because customers increasingly value product quality and unique features. Nike maintains its loyal customer base through branding, but Adidas attracts new customers looking for advanced products, giving Adidas the higher payoff.
</p>

<br>

<p><b>(9,7) – Nike Innovation | Adidas Marketing</b></p>

<p>
In this situation, Nike invests heavily in research, development, and innovative products while Adidas relies mainly on marketing. Nike gains an advantage by introducing better-performing shoes, sustainable manufacturing methods, and advanced sports technology. These innovations strengthen customer loyalty and justify premium pricing. Adidas still benefits from its strong brand image but receives a slightly lower payoff because it lacks the same level of product differentiation.
</p>

<br>

<p><b>(10,10) – Nike Innovation | Adidas Innovation</b></p>

<p>
When both companies prioritize innovation, they continuously improve product quality, invest in research and development, adopt sustainable manufacturing practices, and introduce advanced sports technologies. Competition shifts from price wars to creating better products and customer experiences. Although innovation requires significant investment, both firms benefit from stronger customer loyalty, premium pricing, higher long-term profitability, and sustainable competitive growth. This represents the highest payoff for both companies.
</p>

<br>

<p><b>Game Theory Interpretation</b></p>

<p>
The payoff matrix demonstrates that long-term success in the sportswear industry depends more on innovation than on advertising alone. While marketing increases brand visibility, continuous innovation creates lasting competitive advantages that competitors cannot easily replicate. In reality, both Nike and Adidas invest billions of dollars in research, sustainable materials, athlete performance technology, and digital fitness products. This reflects a Nash Equilibrium where both firms continuously innovate because moving away from innovation would reduce their competitive position and long-term profitability.
</p>

`;

}
function updateClock(){

let now=new Date();

document.getElementById("clock").innerHTML=now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();
const quotes=[

"Strategy is about making choices.",

"In business, every move has a reaction.",

"Game Theory helps predict competitors.",

"Competition drives innovation.",

"The best strategy depends on your rival."

];

document.getElementById("quote").innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];
window.onload=function(){

setTimeout(function(){

alert("Welcome! Explore our Game Theory project on Strategic Rivalries.");

},500);

}

function spotifySimulator(){

let spotify=document.getElementById("spotifyChoice").value;

let apple=document.getElementById("appleChoice").value;

let result="";

if(spotify=="premium" && apple=="premium"){

result="<h3>Payoff: (8,8)</h3><p>Both companies maintain premium pricing. Neither starts a price war and both enjoy sustainable profits.</p>";

}

else if(spotify=="discount" && apple=="premium"){

result="<h3>Payoff: (10,4)</h3><p>Spotify attracts price-sensitive users while Apple loses some market share.</p>";

}

else if(spotify=="premium" && apple=="discount"){

result="<h3>Payoff: (4,10)</h3><p>Apple gains more subscribers through discounts while Spotify keeps higher pricing.</p>";

}

else{

result="<h3>Payoff: (6,6)</h3><p>Both companies discount their services. Subscribers increase but profits fall because of a price war.</p>";

}

document.getElementById("spotifyResult").innerHTML=result;

}

function cjpSimulator(){

let cjp = document.getElementById("cjpChoice").value;

let gov = document.getElementById("govChoice").value;

let result = "";

if(cjp=="continue" && gov=="respond"){

result = `
<h3>Payoff: (8,7)</h3>

<p><b>Explanation:</b></p>

<p>
The Cockroach Janta Party continues its campaign while the Government responds positively. Public concerns are acknowledged, corrective actions are taken, and institutional trust improves. Although the Government incurs administrative costs, both sides achieve a reasonably favourable outcome.
</p>

<p><b>Nash Equilibrium:</b> This is the most stable outcome because continued public pressure encourages an official response.</p>
`;

}

else if(cjp=="continue" && gov=="ignore"){

result = `
<h3>Payoff: (9,3)</h3>

<p><b>Explanation:</b></p>

<p>
The movement continues aggressively while the Government ignores the issue. CJP gains public attention and media coverage, increasing pressure on authorities. However, the Government suffers reputational damage, leading to a lower payoff.
</p>

<p><b>Prediction:</b> Ignoring sustained public pressure is usually not a sustainable long-term strategy.</p>
`;

}

else if(cjp=="reduce" && gov=="respond"){

result = `
<h3>Payoff: (5,8)</h3>

<p><b>Explanation:</b></p>

<p>
The movement slows down after the Government responds. Public confidence improves, and the Government benefits by restoring trust. Since CJP reduces its campaign, its influence also decreases, giving it a moderate payoff.
</p>

<p><b>Prediction:</b> Both parties move toward cooperation and conflict reduces.</p>
`;

}

else{

result = `
<h3>Payoff: (2,6)</h3>

<p><b>Explanation:</b></p>

<p>
The campaign loses momentum and the Government also ignores the issue. Public attention gradually fades and neither side achieves its objective. This creates the weakest strategic outcome for the movement.
</p>

<p><b>Prediction:</b> This outcome is unstable because unresolved issues can later trigger renewed public campaigns.</p>
`;

}

document.getElementById("cjpResult").innerHTML = result;

}

function cokeSimulator(){

let coke = document.getElementById("cokeChoice").value;
let pepsi = document.getElementById("pepsiChoice").value;

let result = "";

if(coke=="advertise" && pepsi=="advertise"){

result = `
<h3>Payoff: (8,8)</h3>

<p><b>Explanation:</b></p>

<p>
Both Coca-Cola and Pepsi invest heavily in advertising campaigns, celebrity endorsements, sports sponsorships, and brand promotion. Neither company gains a major advantage because both remain equally visible in the market. Although advertising costs are high, both maintain strong customer loyalty and healthy profits.
</p>

<p><b>Strategic Outcome:</b> Stable competition based on branding instead of price.</p>

<p><b>Nash Equilibrium:</b> Advertising vs Advertising.</p>
`;

}

else if(coke=="advertise" && pepsi=="discount"){

result = `
<h3>Payoff: (7,9)</h3>

<p><b>Explanation:</b></p>

<p>
Pepsi offers discounts while Coca-Cola focuses on advertising. Pepsi attracts more price-sensitive customers and gains short-term market share. Coca-Cola retains loyal customers because of its strong brand image but earns a slightly lower payoff.
</p>

<p><b>Strategic Outcome:</b> Pepsi benefits in the short run through aggressive pricing.</p>
`;

}

else if(coke=="discount" && pepsi=="advertise"){

result = `
<h3>Payoff: (9,7)</h3>

<p><b>Explanation:</b></p>

<p>
Coca-Cola introduces discounts while Pepsi continues advertising. Coca-Cola attracts customers looking for better prices and temporarily increases sales. Pepsi maintains its brand strength but loses some customers to Coca-Cola's promotional offers.
</p>

<p><b>Strategic Outcome:</b> Coca-Cola gains a temporary competitive advantage.</p>
`;

}

else{

result = `
<h3>Payoff: (6,6)</h3>

<p><b>Explanation:</b></p>

<p>
Both companies reduce prices simultaneously, creating a price war. Customers benefit from cheaper products, but both firms experience lower profit margins. Since neither company gains a lasting advantage, this is the least profitable outcome for both players.
</p>

<p><b>Strategic Outcome:</b> Price wars reduce long-term profitability.</p>

<p><b>Nash Prediction:</b> Firms usually avoid continuous price wars and return to branding strategies.</p>
`;

}

document.getElementById("cokeResult").innerHTML = result;

}

function zomatoSimulator(){

let zomato = document.getElementById("zomatoChoice").value;
let swiggy = document.getElementById("swiggyChoice").value;

let result = "";

if(zomato=="discount" && swiggy=="discount"){

result = `
<h3>Payoff: (6,6)</h3>

<p><b>Explanation:</b></p>

<p>
Both Zomato and Swiggy provide heavy discounts to attract customers. Although order volumes increase, both companies experience lower profit margins due to the high cost of promotions. Neither company gains a lasting competitive advantage, making this a balanced but less profitable outcome.
</p>

<p><b>Strategic Outcome:</b> Price wars increase customer orders but reduce long-term profitability.</p>

<p><b>Nash Prediction:</b> Companies usually avoid continuous discount battles.</p>
`;

}

else if(zomato=="discount" && swiggy=="delivery"){

result = `
<h3>Payoff: (7,8)</h3>

<p><b>Explanation:</b></p>

<p>
Zomato attracts customers through discounts while Swiggy focuses on faster delivery. Swiggy builds stronger customer loyalty because quick and reliable service improves the overall customer experience. Zomato gains some new users but spends more on promotional offers.
</p>

<p><b>Strategic Outcome:</b> Better service often creates a stronger long-term advantage than discounts.</p>
`;

}

else if(zomato=="delivery" && swiggy=="discount"){

result = `
<h3>Payoff: (8,7)</h3>

<p><b>Explanation:</b></p>

<p>
Zomato invests in delivery speed and operational efficiency while Swiggy depends on discounts. Customers increasingly prefer reliable and faster deliveries, allowing Zomato to improve customer satisfaction and long-term loyalty.
</p>

<p><b>Strategic Outcome:</b> Service quality becomes a competitive advantage.</p>
`;

}

else{

result = `
<h3>Payoff: (9,9)</h3>

<p><b>Explanation:</b></p>

<p>
Both companies focus on improving delivery speed, logistics, technology, and customer satisfaction instead of offering excessive discounts. This creates sustainable growth, stronger brand loyalty, and higher long-term profits for both companies.
</p>

<p><b>Strategic Outcome:</b> Competing through innovation and service quality benefits both firms.</p>

<p><b>Nash Equilibrium:</b> Fast Delivery vs Fast Delivery.</p>
`;

}

document.getElementById("zomatoResult").innerHTML = result;

}

function nikeSimulator(){

let nike = document.getElementById("nikeChoice").value;
let adidas = document.getElementById("adidasChoice").value;

let result = "";

if(nike=="marketing" && adidas=="marketing"){

result = `
<h3>Payoff: (8,8)</h3>

<p><b>Explanation:</b></p>

<p>
Both Nike and Adidas invest heavily in advertising, athlete sponsorships, and global marketing campaigns. Their strong brand recognition helps maintain customer loyalty and stable sales. Since both follow similar strategies, neither gains a significant competitive advantage, resulting in equal payoffs.
</p>

<p><b>Strategic Outcome:</b> Competition remains balanced through branding.</p>

<p><b>Nash Equilibrium:</b> Marketing vs Marketing.</p>
`;

}

else if(nike=="marketing" && adidas=="innovation"){

result = `
<h3>Payoff: (7,9)</h3>

<p><b>Explanation:</b></p>

<p>
Nike focuses on marketing while Adidas invests in product innovation, sustainable materials, and advanced footwear technology. Adidas attracts customers looking for better-performing products, giving it a higher payoff.
</p>

<p><b>Strategic Outcome:</b> Innovation creates a stronger long-term competitive advantage.</p>
`;

}

else if(nike=="innovation" && adidas=="marketing"){

result = `
<h3>Payoff: (9,7)</h3>

<p><b>Explanation:</b></p>

<p>
Nike develops innovative products while Adidas concentrates on marketing. Nike strengthens customer loyalty through better technology and premium products, allowing it to gain a competitive advantage.
</p>

<p><b>Strategic Outcome:</b> Product innovation leads to sustainable growth.</p>
`;

}

else{

result = `
<h3>Payoff: (10,10)</h3>

<p><b>Explanation:</b></p>

<p>
Both companies continuously invest in innovation, research and development, sustainability, and advanced sports technology. This creates stronger customer loyalty, premium pricing opportunities, and higher long-term profitability for both companies.
</p>

<p><b>Strategic Outcome:</b> Innovation benefits both firms and strengthens long-term competitiveness.</p>

<p><b>Nash Equilibrium:</b> Innovation vs Innovation.</p>
`;

}

document.getElementById("nikeResult").innerHTML = result;

}
