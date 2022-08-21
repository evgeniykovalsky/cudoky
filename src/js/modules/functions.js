import * as getData from "../modules/getData.js";




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



export function createGameField(width,height){
       getData.getJsonLevel();
    let root=document.querySelector('.root');

    for(let i=0;i<width;i++)
    {
        for(let j=0;j<height;j++)
        {
            let div=document.createElement('div');
               div.draggable=false;
                div.classList.add('field');
                div.classList.add('js-sell');
                root.classList.remove('.root');
                root.classList.add('root1');

                 root.appendChild(div);

        
        }

    }
    dragAndDrop();
    
}
function chekWin(){
    let a=[];
let sells=document.querySelectorAll('.js-sell');
let message=document.querySelector('.message');
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

            if((a[0]!=a[1]&&a[0]!=a[2]&&a[1]!=a[2])&&
            (a[3]!=a[4]&&a[4]!=a[5]&&a[3]!=a[5])&&
            (a[6]!=a[7]&&a[7]!=a[8]&&a[6]!=a[8])&&
            (a[0]!=a[3]&&a[3]!=a[6]&&a[0]!=a[6])&&
            (a[1]!=a[4]&&a[4]!=a[7]&&a[1]!=a[7])&&
            (a[2]!=a[5]&&a[5]!=a[8]&&a[2]!=a[8]))
               {

                message.innerText='Поздравляю Победа!';
                setTimeout(()=>{if(confirm('Играть еще?')){
                    location.reload();
                  }
                  else{
                      message.innerText='До встречи!';
                  }},500);

               
                

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

        setTimeout(()=>{
            this.classList.add('hide');
        },0)
  
    }
    const dragStart1=function(elem){
        card=elem.target;
 
         setTimeout(()=>{
            // this.classList.add('hide');
         },0)
   
     }
    const dragEnd=function(){
        
       this.classList.remove('hide');
      
    }
    const dragOver=function(evt){
        evt.preventDefault();
     
       
     }
     const dragEnter=function(evt){
        evt.preventDefault();
        this.classList.add('hovered');
        
      }
      const dragLeave=function(){
        
      this.classList.remove('hovered');
        
      }
      const dragDrop=function(){
        
      this.append(card);
      this.classList.remove('hovered');
      chekWin()
             
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
    cards.forEach(elem=>{elem.addEventListener('drop',dragDrop );})


}