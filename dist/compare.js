const sectionNames={home:'首屏',work:'作品',about:'关于',experience:'经历',skills:'技能',contact:'联系'};
let section=new URLSearchParams(location.search).get('section')||'home';if(!sectionNames[section])section='home';
const frames=[...document.querySelectorAll('.viewport iframe')];
const resize=new ResizeObserver(entries=>entries.forEach(e=>e.target.style.setProperty('--preview-scale',e.target.clientWidth/1440)));
document.querySelectorAll('.viewport').forEach(v=>resize.observe(v));
function sendSection(frame){frame.contentWindow?.postMessage({type:'preview-section',section},location.origin)}
function updateSection(next){section=next;document.querySelectorAll('[data-section]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.section===section)));document.querySelectorAll('[data-option]').forEach(article=>article.querySelectorAll('.open-layout,.frame-link').forEach(a=>a.href=`index.html?layout=${article.dataset.option}#${section}`));document.querySelector('.preview-help').textContent=`正在对比：${sectionNames[section]} · 点击任一画面可完整浏览，体验鼠标动效。`;frames.forEach(sendSection);const url=new URL(location.href);if(section==='home')url.searchParams.delete('section');else url.searchParams.set('section',section);history.replaceState(null,'',url)}
document.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>updateSection(b.dataset.section)));
addEventListener('message',e=>{if(e.origin!==location.origin||e.data?.type!=='preview-ready')return;const f=frames.find(f=>f.contentWindow===e.source);if(f)sendSection(f)});
frames.forEach(f=>f.addEventListener('load',()=>sendSection(f)));
updateSection(section);
