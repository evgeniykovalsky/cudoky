
import { ContextExclusionPlugin } from 'webpack';
import data from '../../data.json';

export function isWebp(){
    function testWebP(callback){
        let webP=new Image();
        webP.onload=webP.onerror=function(){
            callback(webP.height==2)
        };
        webP.src="data:image/webP;base64,UklGR";

    }
    testWebP(function(support){
        let className=support===true?'webp':'no-webp';
        document.documentElement.classList.add(className);
    })
}

export let bool=false;
let level=0;

export function createGameField(lev){
        
    let root=document.querySelector('#root');
    let sumPictures=document.querySelector('.somePictures');
    let sumPictures1=document.querySelector('.somePictures1');
    
    if(level==0){
        sumPictures.classList.remove("hide");}
    else{
        sumPictures1.classList.remove("hide");
    }

    for(let i=0;i<data.level[lev].width;i++)
    {
        for(let j=0;j<data.level[lev].height;j++)
        {
            let div=document.createElement('div');
               div.draggable=false;
                div.classList.add('field');
                div.classList.add('js-sell');
                if(lev==1){
                    root.classList.remove('root');
                    root.classList.add(data.level[lev].classCss);
                    }
                root.appendChild(div);

        
        }
        if(lev==1){
            root.classList.remove('.root');
            root.classList.add(data.level[lev].classCss);
            }

    }
     
    dragAndDrop();
    
}
function chekWin(){
    let a=[];
let sells=document.querySelectorAll('.js-sell');
let message=document.querySelector('.message');
let root=document.querySelector('#root');

let condition0=((a[0]!=a[1]&&a[0]!=a[2]&&a[1]!=a[2])&&
(a[3]!=a[4]&&a[4]!=a[5]&&a[3]!=a[5])&&
(a[6]!=a[7]&&a[7]!=a[8]&&a[6]!=a[8])&&
(a[0]!=a[3]&&a[3]!=a[6]&&a[0]!=a[6])&&
(a[1]!=a[4]&&a[4]!=a[7]&&a[1]!=a[7])&&
(a[2]!=a[5]&&a[5]!=a[8]&&a[2]!=a[8]));

let condition1=((a[0]!=a[1]&&a[0]!=a[2]&&a[1]!=a[2]&&a[0]!=a[3]&&a[1]!=a[3]&&a[2]!=a[3])&&
               (a[4]!=a[5]&&a[5]!=a[6]&&a[4]!=a[6]&&a[6]!=a[7]&&a[4]!=a[7]&&a[5]!=a[7])&&
               (a[8]!=a[9]&&a[9]!=a[10]&&a[10]!=a[11]&&a[8]!=a[11]&&a[9]!=a[11]&&a[10]!=a[11])&&
               (a[12]!=a[13]&&a[13]!=a[14]&&a[14]!=a[15]&&a[12]!=a[15]&&a[13]!=a[15]&&a[14]!=a[15])&&
               (a[0]!=a[4]&&a[4]!=a[8]&&a[8]!=a[12]&&a[0]!=a[12]&&a[4]!=a[12])&&
               (a[1]!=a[5]&&a[5]!=a[9]&&a[9]!=a[13]&&a[1]!=a[13]&&a[5]!=a[13])&&
               (a[2]!=a[6]&&a[6]!=a[10]&&a[10]!=a[14]&&a[2]!=a[14]&&a[6]!=a[14])&&
               (a[3]!=a[7]&&a[7]!=a[11]&&a[11]!=a[15]&&a[3]!=a[15]&&a[7]!=a[15]));

  for(let i=0;i<sells.length;i++)
  {  try{
           if(typeof(sells[i].children[0].src)==='undefined'){
             a[i]=0;
            }
        }
        catch(e){
         message.innerText='Заполните все клетки';
        }
        finally{
            a[i]=String(sells[i].children[0].src).slice(-5,-4);
            let condition0=((a[0]!=a[1]&&a[0]!=a[2]&&a[1]!=a[2])&&
                            (a[3]!=a[4]&&a[4]!=a[5]&&a[3]!=a[5])&&
                            (a[6]!=a[7]&&a[7]!=a[8]&&a[6]!=a[8])&&
                            (a[0]!=a[3]&&a[3]!=a[6]&&a[0]!=a[6])&&
                            (a[1]!=a[4]&&a[4]!=a[7]&&a[1]!=a[7])&&
                            (a[2]!=a[5]&&a[5]!=a[8]&&a[2]!=a[8]));

let condition1=((a[0]!=a[1]&&a[0]!=a[2]&&a[1]!=a[2]&&a[0]!=a[3]&&a[1]!=a[3]&&a[2]!=a[3])&&
               (a[4]!=a[5]&&a[5]!=a[6]&&a[4]!=a[6]&&a[6]!=a[7]&&a[4]!=a[7]&&a[5]!=a[7])&&
               (a[8]!=a[9]&&a[9]!=a[10]&&a[10]!=a[11]&&a[8]!=a[11]&&a[9]!=a[11]&&a[10]!=a[11])&&
               (a[12]!=a[13]&&a[13]!=a[14]&&a[14]!=a[15]&&a[12]!=a[15]&&a[13]!=a[15]&&a[14]!=a[15])&&
               (a[0]!=a[4]&&a[4]!=a[8]&&a[8]!=a[12]&&a[0]!=a[12]&&a[4]!=a[12])&&
               (a[1]!=a[5]&&a[5]!=a[9]&&a[9]!=a[13]&&a[1]!=a[13]&&a[5]!=a[13])&&
               (a[2]!=a[6]&&a[6]!=a[10]&&a[10]!=a[14]&&a[2]!=a[14]&&a[6]!=a[14])&&
               (a[3]!=a[7]&&a[7]!=a[11]&&a[11]!=a[15]&&a[3]!=a[15]&&a[7]!=a[15]));
            let  condition=sells.length<10?condition0:condition1;
           

            if(condition)
               {

                message.innerText='Поздравляю Победа!';
                
               
                bool=confirm('Поздравляю Победа! Играть еще?');
                
             if(bool){

                
                
                                    
                    if(bool){
                        level=1;
                        setTimeout(()=>{message.innerText='Уровень 2 !';
                        root.innerHTML="";
                       
                        createGameField(level);},4000); 
                       
                   }
                   else{
                      
                         createGameField(level);
                   }
                    

                  
                   
                  }
                  else{
                      message.innerText='До встречи!';
                  }               
                

               }
            else{

                  message.innerText='Попробуйте еще раз!';
        
                }


        }

   
  }
 
}
const dragAndDrop=()=>{
    const cards=document.querySelectorAll('.js-card');
    const cell=document.querySelectorAll('.js-sell');
    
    let card;
   
    
    const dragStart=function(elem){
       card=elem.target;
     if(card==undefined)
          {return;}

        setTimeout(()=>{
          this.classList.add('hide');
        },0)
                   
  
    }
    const dragStart1=function(elem){
        card=elem.target;
       
         if(card.src==undefined)
         {return;}
         setTimeout(()=>{
            // this.classList.add('hide');
         },0)
   
     }
    const dragEnd=function(){
        if(card.src==undefined)
        {return;}
       this.classList.remove('hide');
      
    }
    const dragOver=function(evt){
        evt.preventDefault();
     
       
     }
     const dragEnter=function(evt){
        evt.preventDefault();
        if(card.src==undefined)
        {return;}
        this.classList.add('hovered');
        
      }
      const dragLeave=function(){
        
      this.classList.remove('hovered');
        
      }
      const dragDrop=function(){
          if(card.src==undefined){return;}
          let c =card.cloneNode(true);
           c.classList.remove('hide');
          
          this.append(c);
          console.log(card.parentNode.classList.contains("field"));
          if(card.parentNode.classList.contains("field")){
             card.classList.add('hide');
             card.parentNode.innerHTML="";
          }
         
          this.classList.remove('hovered');
      
      chekWin()
             
      }
      const dragDrop1=function(){
        if(card.src==undefined){
            return;
        }
         this.append(card);
        this.classList.remove('hovered');
        console.log('drop1');
         chekWin();
               
        }
        
    cell.forEach(elem=>{elem.addEventListener('dragover',dragOver );})
    cell.forEach(elem=>{elem.addEventListener('dragenter',dragEnter  );})
    cell.forEach(elem=>{elem.addEventListener('dragleave',dragLeave );})
    cell.forEach(elem=>{elem.addEventListener('drop',dragDrop );})




    cards.forEach(element => {
        
        element.addEventListener('dragstart',dragStart);
       
    });
    cards.forEach(element => {
        
        element.addEventListener('dragend',dragEnd);
    });
    ////////////////////////
    cell.forEach(element => {
        
        element.addEventListener('dragstart',dragStart1);
       
    });
    cell.forEach(element => {
        
        element.addEventListener('dragend',dragEnd);
    });
    cards.forEach(elem=>{elem.addEventListener('dragover',dragOver );})
    cards.forEach(elem=>{elem.addEventListener('dragenter',dragEnter  );})
    cards.forEach(elem=>{elem.addEventListener('dragleave',dragLeave );})
    cards.forEach(elem=>{elem.addEventListener('drop',dragDrop1 );})


}
createGameField(level);