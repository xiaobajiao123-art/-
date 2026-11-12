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
