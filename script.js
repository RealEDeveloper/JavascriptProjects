const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    const Xpos = event.offsetX;
    const Ypos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = Xpos +"px";
    spanEl.style.top = Ypos +"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000);
});