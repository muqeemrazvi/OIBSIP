const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eaight=document.getElementById('eaight');
const nine=document.getElementById('nine');
const zero=document.getElementById('zero');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const divide=document.getElementById('divide');
const into=document.getElementById('into');
const ac=document.getElementById('ac');
const equal=document.getElementById('equal');
const point=document.getElementById('point');

const display=document.getElementById('display')
var EnterVal

one.addEventListener('click',()=>{
    let val=one.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

two.addEventListener('click',()=>{
    let val1=two.value;
    if(EnterVal==undefined)
    {
        EnterVal=val1;
    }
    else
    {
    EnterVal=EnterVal+val1;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

three.addEventListener('click',()=>{
    let val=three.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

four.addEventListener('click',()=>{
    let val=four.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

five.addEventListener('click',()=>{
    let val=five.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

six.addEventListener('click',()=>{
    let val=six.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

seven.addEventListener('click',()=>{
    let val=seven.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})
eaight.addEventListener('click',()=>{
    let val=eaight.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})
nine.addEventListener('click',()=>{
    let val=nine.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

zero1.addEventListener('click',()=>{
    let val=zero1.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})

point.addEventListener('click',()=>{
    let val=point.value;

    if(EnterVal==undefined)
    {
        EnterVal=val;
    }
    
    else
    {
    EnterVal=EnterVal+val;
    }
    console.log(EnterVal)
    display.innerHTML=`<h3>${EnterVal}<h3>`

})


plus.addEventListener('click',()=>{
    let val1=plus.value;
    if(EnterVal==undefined)
    {
        EnterVal=val1;
    }
   
     else
    {

    EnterVal=EnterVal+val1;
    }
    console.log(EnterVal)
    if(EnterVal.includes("+"))
    {
        display.innerHTML=`<h3>${EnterVal}<h3>`
    }
})

minus.addEventListener('click',()=>{
    let val1=minus.value;
    if(EnterVal==undefined)
    {
        EnterVal=val1;
    }
   
     else
    {

    EnterVal=EnterVal+val1;
    }
    console.log(EnterVal)
    if(EnterVal.includes("-"))
    {
        display.innerHTML=`<h3>${EnterVal}<h3>`
    }
})

into.addEventListener('click',()=>{
    let val1=into.value;
    if(EnterVal==undefined)
    {
        EnterVal=val1;
    }
   
     else
    {

    EnterVal=EnterVal+val1;
    }
    console.log(EnterVal)
    if(EnterVal.includes("*"))
    {
        display.innerHTML=`<h3>${EnterVal}<h3>`
    }
})

divide.addEventListener('click',()=>{
    let val1=divide.value;
    if(EnterVal==undefined)
    {
        EnterVal=val1;
    }
   
     else
    {

    EnterVal=EnterVal+val1;
    }
    console.log(EnterVal)
    if(EnterVal.includes("/"))
    {
        display.innerHTML=`<h3>${EnterVal}<h3>`
    }
})


equal.addEventListener('click',()=>{
    display.innerHTML=``;
    if(EnterVal.includes("/")){
        display.innerHTML=`<h3>${parseFloat(eval(EnterVal)).toFixed(4)}</h3>`

    }
    else{
    display.innerHTML=`<h3>${eval(EnterVal)}</h3>`
    EnterVal=undefined
    }
})


ac.addEventListener('click',()=>{
display.innerHTML='';
EnterVal=undefined;
})
