const quizData={
  'core-check':{correct:['a','b'],feedback:'Correct. Shoots grow towards light and away from gravity; primary roots grow in the direction of gravity. Tropisms are growth responses, not muscular movements.'},
  'figure-check':{correct:'a',feedback:'Correct. Box A tests overhead light and straight growth; Box B tests one-sided light and bending towards the light; Box C tests darkness and tall, non-directional growth.'},
  'fair-test-check':{correct:['a','c'],feedback:'Correct. Replication with comparable seedlings improves reliability, while one consistent measurement method makes the comparison valid.'},
  'investigation-check':{correct:'a',feedback:'Correct. The smaller angle is evidence that rotation reduces a consistent one-sided gravity stimulus. It does not remove gravity, auxin or growth.'},
  'orientation-check':{correct:'a',feedback:'Correct. The radicle and plumule respond to the gravitational direction, even when the seed starts upside down or on its side.'},
  'auxin-check':{correct:'a',feedback:'Correct. The unequal cell lengths, despite similar division rates, identify differential elongation as the cause of curvature rather than extra cell division.'},
  'auxin-mechanism-check':{correct:'b',feedback:'Correct. Unilateral light shifts auxin towards the shaded side. Those cells elongate more, so unequal growth makes the shoot curve towards the light.'},
  'evidence-check':{correct:'a',feedback:'Correct. The result supports a diffusible, water-soluble chemical signal released by the tip that can move through gelatin and produce unequal elongation.'},
  'space-check':{correct:'b',feedback:'Correct. Directional light can still act as a cue in microgravity. Shoots are generally positive phototropic and roots generally negative phototropic.'},
  'plenary-check':{correct:'a',feedback:'Correct. Blocking light at the tip prevents the directional auxin gradient. A transparent control still detects light, redistributes auxin and curves through unequal elongation.'}
};
const answered=new Set();
function showFeedback(id,correct){const box=document.getElementById(`feedback-${id}`); if(!box)return; const data=quizData[id]; if(correct){box.className='quiz-feedback feedback-correct';box.textContent=`✓ ${data.feedback}`;answered.add(id)}else{box.className='quiz-feedback feedback-try';box.textContent='Not quite. Re-read the highlighted mechanism and try again — the explanation is in the feedback you are looking for.'}}
function submitQuiz(id){const wrap=document.querySelector(`[data-quiz="${id}"]`);if(!wrap)return;const data=quizData[id];const selected=[...wrap.querySelectorAll('input:checked')].map(i=>i.value);if(!selected.length){const box=document.getElementById(`feedback-${id}`);box.className='quiz-feedback feedback-try';box.textContent='Choose an answer first, then check your thinking.';return}let correct;if(Array.isArray(data.correct)){correct=selected.length===data.correct.length&&selected.every(v=>data.correct.includes(v))}else{correct=selected.length===1&&selected[0]===data.correct}showFeedback(id,correct);updateProgress()}
document.querySelectorAll('[data-quiz-submit]').forEach(btn=>btn.addEventListener('click',()=>submitQuiz(btn.dataset.quizSubmit)));
document.querySelectorAll('[data-scroll-to]').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.scrollTo)?.scrollIntoView({behavior:'smooth'})));
document.querySelector('[data-scroll-top]')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const sections=[...document.querySelectorAll('[data-section]')];const navItems=[...document.querySelectorAll('[data-nav]')];
function setActive(id){navItems.forEach(item=>item.classList.toggle('active',item.dataset.nav===id))}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.dataset.section)});updateProgress()},{rootMargin:'-18% 0px -70% 0px',threshold:0});sections.forEach(section=>observer.observe(section));
function updateProgress(){const y=window.scrollY+window.innerHeight*.45;const docHeight=document.documentElement.scrollHeight-window.innerHeight;const pct=Math.min(100,Math.max(0,Math.round((window.scrollY/docHeight)*100)));const explored=document.getElementById('progressText');if(explored)explored.textContent=`${pct}% explored · ${answered.size}/10 checks`;}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const search=document.getElementById('vocabSearch');search?.addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();document.querySelectorAll('.vocab-card').forEach(card=>card.classList.toggle('hidden',q&&!card.dataset.term.includes(q)))});
// Allow keyboard users to see a selected option clearly without changing the native control.
document.querySelectorAll('.options input').forEach(input=>input.addEventListener('change',()=>{input.closest('label').parentElement.querySelectorAll('label').forEach(label=>label.classList.remove('selected'));input.closest('label').classList.add('selected')}));
