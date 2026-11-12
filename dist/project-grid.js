function arrangeProjectGrid(container){
 const style=getComputedStyle(container);
 const left=parseFloat(style.paddingLeft)||0;
 const right=parseFloat(style.paddingRight)||0;
 const top=parseFloat(style.paddingTop)||0;
 const bottom=parseFloat(style.paddingBottom)||0;
 const gap=4;
 const width=(container.clientWidth-left-right-gap)/2;
 if(width<=0)return;
 const heights=[0,0];
 const cards=[...container.children].filter(card=>card.classList.contains('project'));
 cards.forEach((card,index)=>{
  const image=card.querySelector('img');
  const imageWidth=Number(image.getAttribute('width'));
  const imageHeight=Number(image.getAttribute('height'));
  const height=width*imageHeight/imageWidth;
  const column=index%2;
  card.style.width=width+'px';
  card.style.left=(left+column*(width+gap))+'px';
  card.style.top=(top+heights[column])+'px';
  heights[column]+=height+gap;
 });
 container.style.height=(top+Math.max(0,...heights)- (cards.length?gap:0)+bottom)+'px';
}
