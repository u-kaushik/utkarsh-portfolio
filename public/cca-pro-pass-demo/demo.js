const ideas = [
  { slug: 'purpose', title: 'Hold the purpose, change the route', topic: 'Session design', description: 'Keep the intended learning visible while players explore another workable way to reach it.', artwork: 'Keep the destination clear. Let the route move.', tone: 'bronze' },
  { slug: 'picture', title: 'Wait for one more picture', topic: 'Observation', description: 'Delay the next intervention long enough to see whether the same coaching problem appears again.', artwork: 'One moment attracts attention. A pattern earns action.', tone: 'charcoal' },
  { slug: 'fixed', title: 'Name what is fixed', topic: 'Communication', description: 'Make the non-negotiable clear so that player choice is genuine rather than guessed.', artwork: 'Clarity about the boundary creates room inside it.', tone: 'stone' },
  { slug: 'choice', title: 'Offer a choice that matters', topic: 'Player ownership', description: 'Give players a decision that changes how the practice unfolds, not a decorative option.', artwork: 'A real choice changes the next action.', tone: 'navy' },
  { slug: 'noticed', title: 'Ask what they noticed', topic: 'Coach-player dialogue', description: 'Understand the information behind a player’s decision before judging the decision itself.', artwork: 'Start with their picture of the moment.', tone: 'bronze' },
  { slug: 'constraint', title: 'Change one constraint', topic: 'Practice design', description: 'Make one deliberate adjustment so the players’ response is easier to interpret.', artwork: 'One clear change. One response to study.', tone: 'charcoal' },
];

let view = 'home';
let selected = null;
let saved = new Set(['purpose', 'fixed']);
let query = '';
const outlet = document.querySelector('#demo-view');
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

function cover(item, index) {
  return `<button type="button" class="demo-cover ${item.tone}" data-open="${item.slug}" aria-label="Open ${escapeHtml(item.title)}"><small>${String(index + 1).padStart(2, '0')} / COACHING CUE</small><img src="./brand-mark.png" alt=""><strong>${escapeHtml(item.artwork)}</strong><small>${escapeHtml(item.topic.toUpperCase())}</small></button>`;
}

function card(item, index) {
  return `<article>${cover(item, index)}<div class="demo-card-meta"><span>2 MIN · ${escapeHtml(item.topic)}</span><button type="button" data-save="${item.slug}" aria-label="${saved.has(item.slug) ? 'Remove' : 'Save'} ${escapeHtml(item.title)}">${saved.has(item.slug) ? 'Saved ✓' : '+ Save'}</button></div><button type="button" class="demo-card-title" data-open="${item.slug}">${escapeHtml(item.title)}</button><p>${escapeHtml(item.description)}</p></article>`;
}

function render() {
  document.querySelector('#breadcrumb').textContent = `Pro Pass / ${selected ? 'Guide' : view === 'home' ? 'Home' : view === 'library' ? 'Library' : 'Saved'}`;
  document.querySelector('#greeting').textContent = selected ? selected.title : 'Good to see you, Coach.';
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view && !selected));

  if (selected) {
    outlet.innerHTML = `<article class="demo-guide"><button type="button" class="demo-text-button" data-back>← Back to ${view}</button><div class="demo-guide-grid"><div><p class="cca-label">Coaching cue · 2 min read</p><h1>${escapeHtml(selected.title)}.</h1><p class="demo-lead">${escapeHtml(selected.description)}</p><button type="button" class="demo-primary" data-save="${selected.slug}">${saved.has(selected.slug) ? 'Saved for later ✓' : 'Save for later'}</button></div><div class="demo-cover ${selected.tone}"><small>CCA / FIELD NOTES</small><img src="./brand-mark.png" alt=""><strong>${escapeHtml(selected.artwork)}</strong><small>LEARN · REFLECT · APPLY</small></div></div><section class="demo-reading"><span class="cca-label">Inside the guide</span><h2>Take the idea onto the pitch.</h2><p>${escapeHtml(selected.description)}</p><p>This sample view shows how a member moves from a concise learning idea to an action they can test in practice. The full private-alpha guide remains available only to invited members.</p><div><strong>Try this in your next session</strong><p>Notice one moment where this idea could change your next question or intervention. Record what happened, then decide what to keep.</p></div></section></article>`;
    return;
  }

  const hero = view === 'home' ? `<section class="demo-hero"><div><p class="cca-label">Your next coaching idea / 01</p><h1>Make the next session count.</h1><p>Short, practical learning for coaches who want to notice more, make better decisions and carry ideas into their work.</p><button class="demo-primary" type="button" data-open="purpose">Continue learning ↗</button></div><div class="demo-hero-note"><span>YOUR SAMPLE PROGRESS</span><strong>${saved.size} ideas saved<br>1 guide in progress</strong><div><i></i></div><small>Keep building your coaching practice.</small></div></section>` : '';
  const items = ideas.filter(item => (view !== 'saved' || saved.has(item.slug)) && `${item.title} ${item.topic} ${item.description}`.toLowerCase().includes(query.toLowerCase())).slice(0, view === 'home' ? 4 : undefined);
  outlet.innerHTML = `${hero}<section class="demo-library"><div class="demo-section-head"><div><p class="cca-label">${view === 'saved' ? 'Your reading list' : 'Curated for coaches'}</p><h2>${view === 'saved' ? 'Saved for later' : view === 'home' ? 'Explore the library' : 'All coaching ideas'}</h2></div>${view === 'home' ? '<button type="button" class="demo-text-button" data-view="library">View all →</button>' : ''}</div>${view !== 'home' ? `<label class="demo-search"><span class="cca-label">Search the library</span><input id="demo-search" value="${escapeHtml(query)}" placeholder="Search title or topic"></label>` : ''}<div class="demo-cards">${items.map(card).join('')}</div>${items.length ? '' : '<p class="demo-empty">No ideas match this view. Try another search or save a title from the library.</p>'}</section>`;
}

document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.view) { view = button.dataset.view; selected = null; query = ''; render(); }
  else if (button.dataset.open) { selected = ideas.find(item => item.slug === button.dataset.open); render(); window.scrollTo(0, 0); }
  else if (button.dataset.save) { saved.has(button.dataset.save) ? saved.delete(button.dataset.save) : saved.add(button.dataset.save); render(); }
  else if (button.hasAttribute('data-back')) { selected = null; render(); }
});
document.addEventListener('input', event => {
  if (event.target.id !== 'demo-search') return;
  const caret = event.target.selectionStart;
  query = event.target.value;
  render();
  const input = document.querySelector('#demo-search');
  input.focus();
  input.setSelectionRange(caret, caret);
});
render();

