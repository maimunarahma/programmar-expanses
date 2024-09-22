
// const cost=value('cost1')+value('cost2')+value('cost3'
//console.log(cost);
 document.getElementById('total').addEventListener('click',function(event){

     event.preventDefault();
     const cost=value('cost1')+value('cost2')+value('cost3');
     
     const p=value('earn')-cost;
     console.log(p);
  
     const overview= document.getElementById('summary');
    overview.style.display='block';
 })
   document.getElementById('saving-calculation').addEventListener('click',function(event){
       event.preventDefault();
       const p=value('earn')-value('cost1')+value('cost2')+value('cost3')
       const q=value('save')*p/100;
       console.log(q);
       
   })