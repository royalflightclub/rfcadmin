'use strict';
function birthdayLabel(value){return new Date('2000-'+value+'T12:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'long'});}
function renderBirthdays(){
  const upcoming=db.staff.map(s=>({s,r:T.birthdayReminder(s)})).filter(x=>x.r&&x.r.days<=7).sort((a,b)=>a.r.days-b.r.days||a.s.name.localeCompare(b.s.name));
  for(const target of ['overview','reminders']){
    let panel=document.querySelector('#'+target+' .birthday-panel');
    if(!panel){panel=document.createElement('div');panel.className='panel birthday-panel';document.querySelector('#'+target+' .section-title').after(panel);}
    panel.innerHTML='<h3>🎂 Birthdays · next 7 days</h3>'+ (upcoming.map(({s,r})=>`<div class="item"><div><strong>${esc(s.name)}</strong> <span class="badge soon30">${esc(r.label)}</span><p>${esc(birthdayLabel(s.birthday))}${s.department?' · '+esc(s.department):''}</p></div><button data-edit="${esc(s.id)}">Edit staff</button></div>`).join('')||'<p>No birthdays in the next seven days.</p>')+'<p>Reminders appear while you use the app. Add or edit birthdays in Staff register → Edit / history.</p>';
  }
}
document.querySelector('#birthday-import').onchange=async e=>{
  try{const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw Error('Birthday file is too large.');const result=T.importBirthdays(db,JSON.parse(await file.text()));if(persist(result.db))toast(`Birthdays updated for ${result.matched} staff. ${result.unmatched} unmatched. Other records preserved.`);}
  catch(err){toast('Birthday import failed: '+err.message);}finally{e.target.value='';}
};
// Refresh after midnight as well as on reopening, without creating background notifications.
setInterval(()=>{if(!document.hidden)renderBirthdays();},60000);
