const days=[
 {day:1,focus:"Recognize 0–3",exercises:[
  {type:"circle",target:2,choices:[0,2,3,1]},
  {type:"count",count:3},
  {type:"match",pairs:[[1,1],[2,2],[3,3]]},
  {type:"represent",target:2}]},
 {day:2,focus:"Recognize and count 0–5",exercises:[
  {type:"count",count:5},
  {type:"circle",target:4,choices:[2,5,4,3]},
  {type:"match",pairs:[[2,2],[4,4],[5,5]]},
  {type:"represent",target:5}]},
 {day:3,focus:"Quantity to numeral 0–5",exercises:[
  {type:"count",count:4},
  {type:"match",pairs:[[1,1],[3,3],[5,5]]},
  {type:"tenframe",count:5},
  {type:"circle",target:3,choices:[5,2,3,4]}]}
];

const dots=n=>"● ".repeat(n)||"—";
function tenFrame(n){return '<div class="ten-frame">'+Array.from({length:10},(_,i)=>'<div class="cell">'+(i<n?'<span class="dot"></span>':'')+'</div>').join('')+'</div>'}
function exercise(e,i){
 const title=String.fromCharCode(65+i)+'. ';
 if(e.type==="circle")return '<section class="exercise"><h2>'+title+'Circle the number '+e.target+'.</h2><div class="choices">'+e.choices.map(x=>'<span class="choice">'+x+'</span>').join('')+'</div></section>';
 if(e.type==="count")return '<section class="exercise"><h2>'+title+'Count and write.</h2><div class="objects">'+dots(e.count)+'</div><div>How many?<span class="answer-box"></span></div></section>';
 if(e.type==="match")return '<section class="exercise"><h2>'+title+'Match each number to its group.</h2><div class="match"><div>'+e.pairs.map(p=>'<p>'+p[0]+'</p>').join('')+'</div><div>'+e.pairs.map(p=>'<p>'+dots(p[1])+'</p>').join('')+'</div></div></section>';
 if(e.type==="represent")return '<section class="exercise"><h2>'+title+'Show '+e.target+'. Draw '+e.target+' dots.</h2><div class="represent"></div></section>';
 if(e.type==="tenframe")return '<section class="exercise"><h2>'+title+'How many dots?</h2>'+tenFrame(e.count)+'<div>Number:<span class="answer-box"></span></div></section>';
}
function render(d){return '<article class="page"><header class="header"><div><h1>5-Minute Daily Number Sense</h1><div class="focus">'+d.focus+'</div></div><div><div class="day">Day '+d.day+'</div><div class="name">Name: __________________</div></div></header><div class="grid">'+d.exercises.map(exercise).join('')+'</div><div class="footer">P001 • Kindergarten Number Sense</div></article>'}
document.getElementById("worksheets").innerHTML=days.map(render).join("");
