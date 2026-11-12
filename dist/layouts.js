const layout=document.documentElement.dataset.layout;
const names={a:'编辑式留白',b:'大字海报',c:'紧凑索引'};
document.title=`${layout.toUpperCase()} ${names[layout]} — 詹新雨`;
if(layout==='a'){
 const intro=document.querySelector('.hero .intro');
 intro.classList.add('intro-left');
 document.querySelector('.hero').insertBefore(intro,document.querySelector('.hero-bottom'));
}

document.querySelectorAll('[data-layout-choice]').forEach(a=>{const choice=a.dataset.layoutChoice;a.href=`?layout=${choice}${location.hash}`;if(choice===layout)a.setAttribute('aria-current','page')});
addEventListener('hashchange',()=>document.querySelectorAll('[data-layout-choice]').forEach(a=>a.href=`?layout=${a.dataset.layoutChoice}${location.hash}`));
const back=document.querySelector('.compare-back');function updateComparisonLink(){back.href=`compare.html${location.hash?'?section='+encodeURIComponent(location.hash.slice(1)):''}`}updateComparisonLink();addEventListener('hashchange',updateComparisonLink);
if(document.documentElement.classList.contains('embedded-preview')){
 addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||e.data?.type!=='preview-section')return;const section=document.getElementById(e.data.section);if(section)window.scrollTo({top:section.offsetTop,behavior:'instant'})});
 addEventListener('load',()=>document.fonts.ready.then(()=>parent.postMessage({type:'preview-ready',layout},location.origin)));
}

const collage=document.documentElement.dataset.collage;
if(collage){
 const collageNames={a:'聚拢叠放',b:'扇形展开',c:'高低错落'};
 function updateCollageNavigation(){
  document.querySelectorAll('[data-layout-choice]').forEach(a=>{const c=a.dataset.layoutChoice;a.href=`?layout=a&collage=${c}${location.hash}`;a.innerHTML=`${c.toUpperCase()} <span>${collageNames[c]}</span>`;if(c===collage)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  back.href='hero-compare.html';back.textContent='↗ 图组三版对比';
 }
 updateCollageNavigation();addEventListener('hashchange',updateCollageNavigation);
 document.title=`图组 ${collage.toUpperCase()} ${collageNames[collage]} — 詹新雨`;
 document.querySelector('.preview-label').textContent='COMPOSITION STUDY / 03';
}
