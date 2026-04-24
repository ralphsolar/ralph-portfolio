// === Data ===
const skills = [
  { icon: '⌨️', title: 'Programming Languages', items: ['PHP','Python','C','C++','Java','MATLAB'] },
  { icon: '🌐', title: 'Web Development', items: ['HTML','CSS','JavaScript','Tailwind CSS'] },
  { icon: '🗄️', title: 'Database', items: ['MySQL'] },
  { icon: '🧱', title: 'Frameworks & Technologies', items: ['Slim PHP Framework','RESTful API Development'] },
  { icon: '📊', title: 'Data Analysis', items: ['R Programming'] },
  { icon: '🛠️', title: 'Tools', items: ['VS Code','Visual Studio','SQLyog','PyCharm','RStudio','Cisco Packet Tracer','Arduino IDE','Oracle VirtualBox','VMware'] },
];

const awards = [
  { icon: '📜', title: 'PhilNITS IT Passport Certification', sub: 'Certification Passer' },
  { icon: '🏆', title: 'Best Thesis Award', sub: 'Don Mariano Marcos Memorial State University' },
  { icon: '⭐', title: 'DOST SIBOL Regional Finalist', sub: 'Department of Science and Technology' },
  { icon: '🥇', title: 'Best Paper and Poster', sub: 'ICIEERD Research Consortia' },
  { icon: '👥', title: 'Member — PICSPro', sub: 'Philippine Institute of Cyber Security Professionals' },
];

// === Render Skills ===
const skillsGrid = document.getElementById('skillsGrid');
skillsGrid.innerHTML = skills.map(g => `
  <div class="skill-card">
    <div class="skill-head">
      <div class="icon-box">${g.icon}</div>
      <h3>${g.title}</h3>
    </div>
    <div class="skill-tags">${g.items.map(i => `<span>${i}</span>`).join('')}</div>
  </div>
`).join('');

// === Render Awards ===
const awardsList = document.getElementById('awardsList');
awardsList.innerHTML = awards.map((a, i) => `
  <div class="award-item">
    <div class="icon-box">${a.icon}</div>
    <div class="award-body">
      <div class="award-title">${a.title}</div>
      <div class="muted">${a.sub}</div>
    </div>
    <div class="award-num">0${i+1}</div>
  </div>
`).join('');

// === Year ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Navbar scroll ===
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll);

// === Mobile menu ===
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// === Reveal on scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// === Contact form ===
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(f.subject.value || 'Portfolio inquiry');
  const body = encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\n\n${f.message.value}`);
  window.location.href = `mailto:ralphjacobsolar4@gmail.com?subject=${subject}&body=${body}`;
});
