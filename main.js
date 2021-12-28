'use strict'
const text=document.querySelectorAll('.card p')
const cards=document.querySelectorAll('.card')
const container=document.querySelector('.main')
const futureDate=new Date(2021,12,1,11,30,0)
console.log(futureDate)

const getDifference=function(){
    const title=document.querySelector('.title p')
    const t=futureDate.getTime();
    const today=new Date().getTime();
    const time=t-today;
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;
    let days=Math.floor(time/oneDay);
    let hours=Math.floor((time%oneDay)/oneHour);
    let minutes=Math.floor((time%oneHour)/oneMinute);
    let secs=Math.floor((time%oneMinute)/1000);

    //updating time
    const format=function(item){
        if(item<10){
            return `0${item}`
        }
        else{
            return item
        }
    }
    const values=[days,hours,minutes,secs]
    text.forEach((item,index) => {
        item.innerHTML=format(values[index])
    });
    if(time<0){
        clearInterval(interval);
        title.innerHTML=`YAAY!! WE HAVE ALREADY LAUNCHED OUR PRODUCT.`
        container.style.display='none'
    }
}
getDifference()

let interval=setInterval(getDifference,1000)
