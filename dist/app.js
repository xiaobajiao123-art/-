const projects=[
  {
    "id": "douyin-newyear",
    "title": "抖音好好跨年季",
    "category": "品牌活动 / 整合创意设计",
    "description": "抖音好好跨年季整合创意设计项目。",
    "href": "project-newyear.html",
    "cover": "assets/projects/douyin-newyear/1.webp",
    "width": 2400,
    "height": 1350
  },
  {
    "id": "lost-found-afar",
    "title": "AI动画短片工业化制作 Workflow & Asset Bible 建设方案",
    "category": "AI 短片 / 影像叙事",
    "description": "远方的失物 AI 动画短片与创作工作流。",
    "href": "project-lost-found.html",
    "cover": "assets/projects/lost-found-afar/cover.webp",
    "width": 1441,
    "height": 2197
  },
  {
    "id": "douyin-sunset",
    "title": "抖音落日合唱派对",
    "category": "品牌活动 / 整合创意设计",
    "description": "抖音落日合唱派对视觉设计项目。",
    "href": "project-sunset.html",
    "cover": "assets/projects/douyin-sunset/1.webp",
    "width": 1920,
    "height": 1361
  },
  {
    "id": "cny2024",
    "title": "2024 欢笑中国年",
    "category": "节日营销 / 视觉创意",
    "description": "2024 欢笑中国年春节活动视觉设计项目。",
    "href": "project-cny2024.html",
    "cover": "assets/projects/cny2024/cover-theme.webp",
    "width": 2400,
    "height": 1854
  },
  {
    "id": "eb2025",
    "title": "2025 EB 新年祝福",
    "category": "雇主品牌 / 节日创意",
    "description": "字节跳动招聘新年线上祝福视觉项目。",
    "href": "project-eb2025.html",
    "cover": "assets/projects/eb2025/1.webp",
    "width": 2400,
    "height": 2824
  },
  {
    "id": "douyin-camping",
    "title": "抖音叽叽扎扎去露营",
    "category": "品牌活动 / 整合创意设计",
    "description": "露营主题系列直播视觉设计项目。",
    "href": "project-camping.html",
    "cover": "assets/projects/douyin-camping/1.webp",
    "width": 1920,
    "height": 1288
  },
  {
    "id": "douyin-worldcup",
    "title": "上抖音看世界杯直播",
    "category": "品牌活动 / 视觉创意",
    "description": "世界杯主题直播视觉设计项目。",
    "href": "project-worldcup.html",
    "cover": "assets/projects/douyin-worldcup/1.webp",
    "width": 2400,
    "height": 2080
  },
  {
    "id": "douyin-wonder-night",
    "title": "抖音美好奇妙夜",
    "category": "品牌活动 / H5 视觉",
    "description": "抖音美好奇妙夜活动与 H5 视觉设计项目。",
    "href": "project-wonder-night.html",
    "cover": "assets/projects/douyin-wonder-night/16.webp",
    "width": 1264,
    "height": 712
  },
  {
    "id": "creator2025",
    "title": "2025 抖音创作者大会",
    "category": "品牌活动 / 整合视觉",
    "description": "2025 抖音创作者大会视觉设计项目。",
    "href": "project-creator2025.html",
    "cover": "assets/projects/creator2025/1.webp",
    "width": 2400,
    "height": 965
  },
  {
    "id": "ai-adventure",
    "title": "AI 少年奇遇季",
    "category": "品牌视觉 / 活动创意",
    "description": "AI 少年奇遇季品牌视觉设计项目。",
    "href": "project-ai-adventure.html",
    "cover": "assets/projects/ai-adventure/1-updated.webp",
    "width": 2400,
    "height": 1659
  },
  {
    "id": "douyin-spring",
    "title": "新春来抖音",
    "category": "节日营销 / 联名视觉",
    "description": "新春来抖音春节营销视觉项目。",
    "href": "project-spring.html",
    "cover": "assets/projects/douyin-spring/1.webp",
    "width": 2400,
    "height": 1358
  },
  {
    "id": "illustration-library",
    "title": "插画库",
    "category": "插画设计 / 视觉资产",
    "description": "角色、场景与视觉元素的插画资产设计。",
    "href": "project-illustration.html",
    "cover": "assets/projects/illustration-library/1.webp",
    "width": 2400,
    "height": 2769
  },
  {
    "id": "douyin-zaizai",
    "title": "抖音仔仔—— 3D角色：视觉基准与 Asset Bible",
    "category": "3D 角色 / 视觉资产规范",
    "description": "抖音仔仔 3D 角色视觉基准与资产规范。",
    "href": "project-zaizai.html",
    "cover": "assets/projects/douyin-zaizai/cover.webp",
    "width": 2400,
    "height": 1350
  },
  {
    "id": "douyin-summer",
    "title": "抖音夏日歌会",
    "category": "音乐活动 / 整合视觉",
    "description": "抖音夏日歌会活动视觉设计项目。",
    "href": "project-summer.html",
    "cover": "assets/projects/douyin-summer/1.webp",
    "width": 2400,
    "height": 1350
  },
  {
    "id": "annual-report",
    "title": "抖音年度报告",
    "category": "年度报告 / H5 视觉",
    "description": "抖音年度报告 H5 视觉设计项目。",
    "href": "project-annual-report.html",
    "cover": "assets/projects/annual-report/cover-2021.webp",
    "width": 1228,
    "height": 1401
  }
];
const projectHeights={forma:1180,still:760,echo:1200,mono:1000,field:860,void:780};
const grid=document.querySelector('#projects');const dialog=document.querySelector('#project-dialog');
projects.forEach((p,i)=>{
 const card=document.createElement(p.href?'a':'button');card.className='project';
 card.setAttribute('aria-label',`查看 ${p.title}${p.href?'项目':'概念项目'}`);
 const cover=p.cover||`assets/${p.id}.svg`;
 card.innerHTML=`<img src="${cover}" alt="${p.title} — ${p.category}" loading="lazy" width="${p.width||1000}" height="${p.height||projectHeights[p.id]}"><div class="project-overlay"><div><h3>${p.title}</h3><small>${String(i+1).padStart(2,'0')} — ${p.category}</small></div><span>↗</span></div>`;
 if(p.href){card.href=`${p.href}?layout=${document.documentElement.dataset.layout||'a'}`;}
 else card.addEventListener('click',()=>{document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-category').textContent=p.category;document.querySelector('#dialog-description').textContent=p.description;document.querySelector('#dialog-index').textContent=`SELECTED WORK / ${String(i+1).padStart(2,'0')}`;const img=document.querySelector('#dialog-image');img.src=`assets/${p.id}.svg`;img.alt=p.title+'概念设计';dialog.showModal();document.body.style.overflow='hidden'});
 grid.append(card);
});
// Keep DOM reading order while placing successive projects left, then right.
let projectGridWidth=-1;
function refreshProjectGrid(){
 const width=grid.getBoundingClientRect().width;
 if(width!==projectGridWidth){projectGridWidth=width;arrangeProjectGrid(grid);}
}
if(typeof ResizeObserver!=='undefined')new ResizeObserver(refreshProjectGrid).observe(grid);
window.addEventListener('resize',refreshProjectGrid);
refreshProjectGrid();

function closeProject(){dialog.close();document.body.style.overflow=''}document.querySelector('.close-dialog').addEventListener('click',closeProject);dialog.addEventListener('click',e=>{if(e.target===dialog)closeProject()});dialog.addEventListener('close',()=>document.body.style.overflow='');
const trailPhotos=[{"src":"assets/mouse-trail-v2/photo-01.webp","width":750,"height":1000},{"src":"assets/mouse-trail-v2/photo-02.webp","width":694,"height":1000},{"src":"assets/mouse-trail-v2/photo-03.webp","width":750,"height":1000},{"src":"assets/mouse-trail-v2/photo-04.webp","width":1000,"height":1000},{"src":"assets/mouse-trail-v2/photo-05.webp","width":1000,"height":678},{"src":"assets/mouse-trail-v2/photo-06.webp","width":1000,"height":563},{"src":"assets/mouse-trail-v2/photo-07.webp","width":1000,"height":646},{"src":"assets/mouse-trail-v2/photo-08.webp","width":750,"height":1000},{"src":"assets/mouse-trail-v2/photo-09.webp","width":719,"height":1000},{"src":"assets/mouse-trail-extra/photo-01.webp","width":1000,"height":558},{"src":"assets/mouse-trail-extra/photo-02.webp","width":1000,"height":671},{"src":"assets/mouse-trail-extra/photo-03.webp","width":858,"height":1000},{"src":"assets/mouse-trail-extra/photo-04.webp","width":910,"height":1000},{"src":"assets/mouse-trail-extra/photo-05.webp","width":1000,"height":553},{"src":"assets/mouse-trail-extra/photo-06.webp","width":917,"height":1000},{"src":"assets/mouse-trail-extra/photo-07.webp","width":1000,"height":741},{"src":"assets/mouse-trail-extra/photo-08.webp","width":1000,"height":653},{"src":"assets/mouse-trail-extra/photo-09.webp","width":1000,"height":563}];
// Warm the image cache before the pointer trail begins.
const trailPreloads=trailPhotos.map(photo=>{const img=new Image();img.decoding="async";img.src=photo.src;return img});
const hero=document.querySelector('.hero'),trail=document.querySelector('#trail');let lastX=null,lastY=null,lastTime=0,index=0,idleTimer;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const pool=Array.from({length:12},()=>{const img=document.createElement('img');img.className='trail-img';img.style.opacity=0;trail.append(img);return img});
function showImage(x,y){const img=pool[index%pool.length];img.getAnimations().forEach(a=>a.cancel());const photo=trailPhotos[index%trailPhotos.length];const compact=matchMedia("(max-width: 760px)").matches;const width=Math.min(compact?140:220,(compact?180:270)*photo.width/photo.height);img.src=photo.src;img.style.width=width+"px";img.style.height=(width*photo.height/photo.width)+"px";img.style.left=x+'px';img.style.top=y+'px';img.style.zIndex=index+1;const rotation=[-11,8,-5,12,-8,3][index%6];img.animate([{opacity:0,transform:`translate(-50%,-42%) rotate(${rotation-5}deg) scale(.82)`},{opacity:1,transform:`translate(-50%,-50%) rotate(${rotation}deg) scale(1)`,offset:.15},{opacity:1,transform:`translate(-50%,-53%) rotate(${rotation}deg) scale(1)`,offset:.48},{opacity:0,transform:`translate(-50%,-66%) rotate(${rotation+4}deg) scale(.93)`}],{duration:1350,easing:'cubic-bezier(.2,.7,.25,1)',fill:'forwards'});index++}
hero.addEventListener('pointermove',e=>{if(reduced||e.pointerType==='touch')return;const r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;const now=performance.now();if(lastX===null||Math.hypot(x-lastX,y-lastY)>65&&now-lastTime>70){showImage(x,y);lastX=x;lastY=y;lastTime=now;hero.classList.add('moving');clearTimeout(idleTimer);idleTimer=setTimeout(()=>{hero.classList.remove('moving');lastX=null},1900)}});hero.addEventListener('pointerleave',()=>{lastX=null;clearTimeout(idleTimer);idleTimer=setTimeout(()=>hero.classList.remove('moving'),1300)});
