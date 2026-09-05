/* ==============================
   GYMSPHERE – APP.JS
   ============================== */

// =========================================
// DATA STORE
// =========================================
let members = [
  { id:'M001', name:'Rahul Sharma',   initials:'RS', phone:'+91 9876543210', email:'rahul@gmail.com',  plan:'Premium', joined:'2024-01-15', expires:'2026-10-15', status:'active',   color:'linear-gradient(135deg,#a855f7,#6366f1)' },
  { id:'M002', name:'Priya Kapoor',   initials:'PK', phone:'+91 9845231100', email:'priya@gmail.com',  plan:'Elite',   joined:'2023-11-01', expires:'2026-09-20', status:'expiring', color:'linear-gradient(135deg,#06b6d4,#3b82f6)' },
  { id:'M003', name:'Amit Mishra',    initials:'AM', phone:'+91 9012345678', email:'amit@gmail.com',   plan:'Basic',   joined:'2024-03-10', expires:'2026-09-10', status:'expiring', color:'linear-gradient(135deg,#10b981,#06b6d4)' },
  { id:'M004', name:'Sunita Jha',     initials:'SJ', phone:'+91 9123456780', email:'sunita@gmail.com', plan:'Premium', joined:'2025-06-01', expires:'2026-12-01', status:'active',   color:'linear-gradient(135deg,#f59e0b,#ef4444)' },
  { id:'M005', name:'Dev Kumar',      initials:'DK', phone:'+91 8887776665', email:'dev@gmail.com',    plan:'Basic',   joined:'2023-08-15', expires:'2026-08-15', status:'expired',  color:'linear-gradient(135deg,#ec4899,#a855f7)' },
  { id:'M006', name:'Neha Tiwari',    initials:'NT', phone:'+91 9900112233', email:'neha@gmail.com',   plan:'Elite',   joined:'2025-01-20', expires:'2027-01-20', status:'active',   color:'linear-gradient(135deg,#a855f7,#ec4899)' },
  { id:'M007', name:'Vikash Yadav',   initials:'VY', phone:'+91 9988776655', email:'vikash@gmail.com', plan:'Premium', joined:'2024-07-05', expires:'2026-11-05', status:'active',   color:'linear-gradient(135deg,#06b6d4,#10b981)' },
  { id:'M008', name:'Kavita Singh',   initials:'KS', phone:'+91 8776655443', email:'kavita@gmail.com', plan:'Basic',   joined:'2026-02-10', expires:'2026-08-10', status:'expired',  color:'linear-gradient(135deg,#f59e0b,#10b981)' },
];

let classes = [
  { name:'Yoga Flow',    trainer:'Anita Rao',     day:'Monday',    time:'06:00', duration:60, slots:20, booked:14, icon:'🧘', color:'rgba(168,85,247,0.15)' },
  { name:'HIIT Blast',   trainer:'Vikram Singh',  day:'Monday',    time:'07:30', duration:45, slots:25, booked:22, icon:'🔥', color:'rgba(239,68,68,0.15)' },
  { name:'Zumba Party',  trainer:'Meena Joshi',   day:'Tuesday',   time:'18:00', duration:60, slots:30, booked:27, icon:'💃', color:'rgba(236,72,153,0.15)' },
  { name:'CrossFit',     trainer:'Vikram Singh',  day:'Wednesday', time:'07:00', duration:60, slots:15, booked:13, icon:'⚡', color:'rgba(245,158,11,0.15)' },
  { name:'Pilates',      trainer:'Anita Rao',     day:'Wednesday', time:'10:00', duration:50, slots:12, booked:8,  icon:'🤸', color:'rgba(6,182,212,0.15)' },
  { name:'Boxing',       trainer:'Suresh Patel',  day:'Thursday',  time:'08:00', duration:60, slots:18, booked:16, icon:'🥊', color:'rgba(239,68,68,0.15)' },
  { name:'Spin Class',   trainer:'Vikram Singh',  day:'Friday',    time:'06:30', duration:45, slots:20, booked:20, icon:'🚴', color:'rgba(16,185,129,0.15)' },
  { name:'Meditation',   trainer:'Anita Rao',     day:'Saturday',  time:'07:00', duration:30, slots:25, booked:10, icon:'🧠', color:'rgba(168,85,247,0.15)' },
  { name:'Strength',     trainer:'Suresh Patel',  day:'Saturday',  time:'09:00', duration:60, slots:20, booked:18, icon:'💪', color:'rgba(245,158,11,0.15)' },
  { name:'Sunday Run',   trainer:'Vikram Singh',  day:'Sunday',    time:'06:00', duration:90, slots:50, booked:35, icon:'🏃', color:'rgba(6,182,212,0.15)' },
];

let trainers = [
  { name:'Abhinash kumar',  initials:'VS', spec:'CrossFit & HIIT',  exp:8,  members:42, rating:4.9, salary:45000, color:'linear-gradient(135deg,#a855f7,#6366f1)', status:'active' },
  { name:'OM Prakash kumar',     initials:'AR', spec:'Yoga & Pilates',    exp:6,  members:38, rating:4.8, salary:40000, color:'linear-gradient(135deg,#06b6d4,#3b82f6)', status:'active' },
  { name:'Sandhya ',  initials:'SP', spec:'Boxing & Strength', exp:10, members:35, rating:4.7, salary:42000, color:'linear-gradient(135deg,#10b981,#06b6d4)', status:'active' },
  { name:'Meena Joshi',   initials:'MJ', spec:'Zumba & Dance',     exp:5,  members:30, rating:4.9, salary:38000, color:'linear-gradient(135deg,#ec4899,#a855f7)', status:'active' },
];

let billing = [
  { inv:'GS-2026-001', member:'Rahul Sharma',  plan:'Premium', amount:'₹1,999', date:'2026-09-01', status:'paid' },
  { inv:'GS-2026-002', member:'Priya Kapoor',  plan:'Elite',   amount:'₹3,499', date:'2026-09-01', status:'paid' },
  { inv:'GS-2026-003', member:'Amit Mishra',   plan:'Basic',   amount:'₹999',   date:'2026-09-01', status:'pending' },
  { inv:'GS-2026-004', member:'Sunita Jha',    plan:'Premium', amount:'₹1,999', date:'2026-09-01', status:'paid' },
  { inv:'GS-2026-005', member:'Dev Kumar',     plan:'Basic',   amount:'₹999',   date:'2026-08-01', status:'failed' },
  { inv:'GS-2026-006', member:'Neha Tiwari',   plan:'Elite',   amount:'₹3,499', date:'2026-09-01', status:'paid' },
  { inv:'GS-2026-007', member:'Vikash Yadav',  plan:'Premium', amount:'₹1,999', date:'2026-09-01', status:'pending' },
  { inv:'GS-2026-008', member:'Kavita Singh',  plan:'Basic',   amount:'₹999',   date:'2026-08-01', status:'failed' },
];

// =========================================
// NAVIGATION
// =========================================
function showSection(name, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  el.classList.add('active');
  document.getElementById('pageTitle').textContent = el.querySelector('span:last-child').textContent;
  // Close sidebar on mobile
  if (window.innerWidth < 768) toggleSidebar(false);
}

function toggleSidebar(force) {
  const sidebar = document.getElementById('sidebar');
  if (force === false) sidebar.classList.remove('open');
  else sidebar.classList.toggle('open');
}

function toggleNotif() {
  document.getElementById('notifPanel').classList.toggle('show');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.notif-btn') && !e.target.closest('.notif-panel')) {
    document.getElementById('notifPanel').classList.remove('show');
  }
});

// =========================================
// TOAST
// =========================================
function showToast(msg, type='info') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  setTimeout(() => t.classList.remove('show'), 3200);
}

// =========================================
// MODALS
// =========================================
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('open'); });
});

// =========================================
// CHECK-IN
// =========================================
function doCheckin() {
  const val = document.getElementById('checkinInput').value.trim();
  const fb = document.getElementById('checkinFeedback');
  if (!val) { fb.style.color='#ef4444'; fb.textContent='⚠️ Please enter a Member ID or Name'; return; }
  const found = members.find(m => m.name.toLowerCase().includes(val.toLowerCase()) || m.id.toLowerCase() === val.toLowerCase());
  if (found) {
    if (found.status === 'expired') {
      fb.style.color = '#ef4444';
      fb.textContent = '🚫 Access Denied — Membership expired for ' + found.name;
      showToast('Access denied: ' + found.name + ' — membership expired', 'error');
    } else {
      fb.style.color = '#10b981';
      fb.textContent = '✅ Check-in successful! Welcome, ' + found.name + ' 👋';
      showToast('✅ ' + found.name + ' checked in successfully!', 'success');
      addLiveCheckin(found);
    }
  } else {
    fb.style.color = '#f59e0b';
    fb.textContent = '❓ Member not found. Check ID or name.';
  }
  document.getElementById('checkinInput').value = '';
}

function addLiveCheckin(member) {
  const list = document.getElementById('activityList');
  const item = document.createElement('div');
  item.className = 'activity-item';
  item.style.animation = 'fadeIn 0.4s ease';
  const statusBadge = member.status === 'active' ? '<span class="badge badge-green">Active</span>' : '<span class="badge badge-yellow">Expiring</span>';
  item.innerHTML = `
    <div class="member-avatar" style="background:${member.color}">${member.initials}</div>
    <div class="activity-info"><strong>${member.name}</strong><span>Checked in · Just now · Manual</span></div>
    ${statusBadge}
  `;
  list.insertBefore(item, list.firstChild);
}

// =========================================
// MEMBERS TABLE
// =========================================
function renderMembersTable(data) {
  const tbody = document.getElementById('membersTbody');
  tbody.innerHTML = data.map((m, i) => {
    const statusBadge = {
      active:   '<span class="badge badge-green">Active</span>',
      expiring: '<span class="badge badge-yellow">Expiring Soon</span>',
      expired:  '<span class="badge badge-red">Expired</span>',
    }[m.status] || '';
    const planBadge = {
      Basic:   '<span class="badge badge-blue">Basic</span>',
      Premium: '<span class="badge badge-purple">Premium</span>',
      Elite:   '<span class="badge" style="background:rgba(245,158,11,0.15);color:#f59e0b;border:1px solid rgba(245,158,11,0.3)">Elite</span>',
    }[m.plan] || m.plan;
    return `
    <tr>
      <td>
        <div class="member-cell">
          <div class="member-avatar" style="background:${m.color}">${m.initials}</div>
          <div>
            <div style="font-weight:600">${m.name}</div>
            <div style="font-size:0.75rem;color:var(--text-secondary)">${m.id} · ${m.email}</div>
          </div>
        </div>
      </td>
      <td>${planBadge}</td>
      <td style="color:var(--text-secondary)">${m.joined}</td>
      <td style="color:var(--text-secondary)">${m.expires}</td>
      <td>${statusBadge}</td>
      <td>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm btn-ghost" onclick="editMember(${i})">✏️ Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteMember(${i})">🗑️</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function filterMembers(search) {
  const status = document.getElementById('statusFilter').value;
  const plan = document.getElementById('planFilter').value;
  let filtered = members.filter(m => {
    const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.id.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === 'all' || m.status === status;
    const matchPlan = plan === 'all' || m.plan === plan;
    return matchSearch && matchStatus && matchPlan;
  });
  renderMembersTable(filtered);
}

function addMember() {
  const name = document.getElementById('newMemberName').value.trim();
  const phone = document.getElementById('newMemberPhone').value.trim();
  const email = document.getElementById('newMemberEmail').value.trim();
  const plan = document.getElementById('newMemberPlan').value;
  const date = document.getElementById('newMemberDate').value;
  if (!name || !email || !date) { showToast('⚠️ Please fill all required fields', 'error'); return; }
  const initials = name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  const colors = [
    'linear-gradient(135deg,#a855f7,#6366f1)',
    'linear-gradient(135deg,#06b6d4,#3b82f6)',
    'linear-gradient(135deg,#10b981,#06b6d4)',
    'linear-gradient(135deg,#ec4899,#a855f7)',
    'linear-gradient(135deg,#f59e0b,#ef4444)',
  ];
  const expDate = new Date(date);
  expDate.setFullYear(expDate.getFullYear() + 1);
  members.push({
    id: 'M' + String(members.length+1).padStart(3,'0'),
    name, initials, phone, email, plan,
    joined: date,
    expires: expDate.toISOString().split('T')[0],
    status: 'active',
    color: colors[Math.floor(Math.random()*colors.length)]
  });
  renderMembersTable(members);
  closeModal('addMemberModal');
  showToast('✅ Member ' + name + ' added successfully!', 'success');
  document.getElementById('statMembers').textContent = members.length.toLocaleString();
  // clear form
  ['newMemberName','newMemberPhone','newMemberEmail','newMemberDate'].forEach(id=>document.getElementById(id).value='');
}

function deleteMember(i) {
  const name = members[i].name;
  members.splice(i, 1);
  renderMembersTable(members);
  showToast('🗑️ ' + name + ' removed', 'info');
}

function editMember(i) {
  showToast('✏️ Edit panel coming soon for ' + members[i].name, 'info');
}

// =========================================
// SCHEDULING
// =========================================
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function renderSchedule() {
  const container = document.getElementById('schedule-container');
  container.innerHTML = DAYS.map(day => {
    const dayClasses = classes.filter(c => c.day === day);
    return `
    <div class="day-col">
      <div class="day-col-header">${day.slice(0,3)}</div>
      ${dayClasses.map(c => `
        <div class="class-pill" onclick="showToast('📅 ${c.name} · ${c.time} · Trainer: ${c.trainer}','info')">
          <div class="pill-name">${c.icon} ${c.name}</div>
          <div class="pill-time">${c.time} · ${c.duration}m</div>
          <span class="pill-slots">${c.booked}/${c.slots} booked</span>
        </div>
      `).join('')}
      ${dayClasses.length === 0 ? '<div style="font-size:0.72rem;color:var(--text-muted);text-align:center;padding:8px">No classes</div>' : ''}
    </div>`;
  }).join('');
}

function renderClassesList() {
  const list = document.getElementById('classesList');
  list.innerHTML = classes.map(c => {
    const pct = Math.round((c.booked/c.slots)*100);
    const fillColor = pct >= 90 ? '#ef4444' : pct >= 70 ? '#f59e0b' : '#10b981';
    return `
    <div class="class-row">
      <div class="class-icon" style="background:${c.color}">${c.icon}</div>
      <div class="class-details">
        <div class="class-name">${c.name}</div>
        <div class="class-meta">📅 ${c.day} · ⏰ ${c.time} · ⌛ ${c.duration} mins · 🏋️ ${c.trainer}</div>
      </div>
      <div class="class-slots-bar">
        <div class="slots-label">${c.booked}/${c.slots}</div>
        <div class="slots-track"><div class="slots-fill" style="width:${pct}%;background:${fillColor}"></div></div>
      </div>
      <button class="btn btn-sm btn-primary" onclick="bookClass('${c.name}', ${c.booked}, ${c.slots})">Book</button>
    </div>`;
  }).join('');
}

function addClass() {
  const name     = document.getElementById('newClassName').value.trim();
  const trainer  = document.getElementById('newClassTrainer').value;
  const day      = document.getElementById('newClassDay').value;
  const time     = document.getElementById('newClassTime').value;
  const slots    = parseInt(document.getElementById('newClassSlots').value) || 20;
  const duration = parseInt(document.getElementById('newClassDuration').value) || 60;
  if (!name || !time) { showToast('⚠️ Class name and time are required', 'error'); return; }
  classes.push({ name, trainer, day, time, duration, slots, booked:0, icon:'💪', color:'rgba(168,85,247,0.15)' });
  renderSchedule();
  renderClassesList();
  closeModal('addClassModal');
  showToast('✅ Class "' + name + '" scheduled on ' + day, 'success');
  ['newClassName','newClassTime','newClassSlots','newClassDuration'].forEach(id=>document.getElementById(id).value='');
}

function bookClass(name, booked, slots) {
  if (booked >= slots) { showToast('❌ ' + name + ' is fully booked!', 'error'); return; }
  const cls = classes.find(c => c.name === name);
  if (cls) { cls.booked++; renderClassesList(); renderSchedule(); }
  showToast('✅ Slot booked for ' + name + '!', 'success');
}

// =========================================
// BILLING TABLE
// =========================================
function renderBillingTable() {
  const tbody = document.getElementById('billingTbody');
  tbody.innerHTML = billing.map(b => {
    const statusBadge = {
      paid:    '<span class="badge badge-green">Paid</span>',
      pending: '<span class="badge badge-yellow">Pending</span>',
      failed:  '<span class="badge badge-red">Failed</span>',
    }[b.status] || b.status;
    return `
    <tr>
      <td style="font-weight:600;color:var(--accent-purple)">${b.inv}</td>
      <td>${b.member}</td>
      <td>${b.plan}</td>
      <td style="font-weight:700">${b.amount}</td>
      <td style="color:var(--text-secondary)">${b.date}</td>
      <td>${statusBadge}</td>
      <td>
        <button class="btn btn-sm btn-ghost" onclick="downloadInvoice('${b.inv}')">📄 PDF</button>
        ${b.status !== 'paid' ? '<button class="btn btn-sm btn-primary" onclick="retryPayment(this)">Retry</button>' : ''}
      </td>
    </tr>`;
  }).join('');
}

function generateInvoice() {
  const member = document.getElementById('invoiceMember').value;
  const plan = document.getElementById('invoicePlan').value;
  const planName = plan.split('–')[0].trim();
  const amount = plan.match(/₹[\d,]+/)?.[0] || '₹999';
  const inv = 'GS-2026-' + String(billing.length + 1).padStart(3, '0');
  billing.unshift({ inv, member, plan: planName, amount, date: new Date().toISOString().split('T')[0], status: 'paid' });
  renderBillingTable();
  closeModal('newInvoiceModal');
  showToast('✅ Invoice ' + inv + ' generated and sent to ' + member, 'success');
}

function downloadInvoice(inv) { showToast('📄 Downloading ' + inv + '.pdf...', 'info'); }

function retryPayment(btn) {
  const row = btn.closest('tr');
  const cells = row.querySelectorAll('td');
  cells[5].innerHTML = '<span class="badge badge-green">Paid</span>';
  btn.remove();
  showToast('✅ Payment retried successfully!', 'success');
}

// =========================================
// TRAINERS
// =========================================
function renderTrainers(data) {
  const grid = document.getElementById('trainersGrid');
  grid.innerHTML = data.map(t => {
    const stars = '⭐'.repeat(Math.round(t.rating)) + ` ${t.rating}`;
    return `
    <div class="trainer-card">
      <div class="trainer-avatar" style="background:${t.color}">${t.initials}</div>
      <div class="trainer-name">${t.name}</div>
      <div class="trainer-spec">${t.spec}</div>
      <div class="trainer-rating">${stars}</div>
      <div class="trainer-stats">
        <div class="trainer-stat"><div class="ts-val">${t.exp}y</div><div class="ts-lbl">Experience</div></div>
        <div class="trainer-stat"><div class="ts-val">${t.members}</div><div class="ts-lbl">Members</div></div>
        <div class="trainer-stat"><div class="ts-val">₹${(t.salary/1000).toFixed(0)}K</div><div class="ts-lbl">Salary</div></div>
      </div>
      <div class="trainer-actions">
        <button class="btn btn-sm btn-ghost" onclick="viewSchedule('${t.name}')">📅 Schedule</button>
        <button class="btn btn-sm btn-primary" onclick="msgTrainer('${t.name}')">💬 Message</button>
      </div>
    </div>`;
  }).join('');
}

function addTrainer() {
  const name   = document.getElementById('newTrainerName').value.trim();
  const spec   = document.getElementById('newTrainerSpec').value.trim();
  const exp    = parseInt(document.getElementById('newTrainerExp').value) || 1;
  const salary = parseInt(document.getElementById('newTrainerSalary').value) || 30000;
  if (!name || !spec) { showToast('⚠️ Name and specialization are required', 'error'); return; }
  const initials = name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  const colors = ['linear-gradient(135deg,#a855f7,#6366f1)','linear-gradient(135deg,#06b6d4,#3b82f6)','linear-gradient(135deg,#10b981,#06b6d4)'];
  trainers.push({ name, initials, spec, exp, members:0, rating:4.5, salary, color:colors[trainers.length%colors.length], status:'active' });
  renderTrainers(trainers);
  closeModal('addTrainerModal');
  showToast('✅ Trainer ' + name + ' added!', 'success');
  ['newTrainerName','newTrainerSpec','newTrainerExp','newTrainerSalary'].forEach(id=>document.getElementById(id).value='');
}

function viewSchedule(name) { showToast('📅 Viewing schedule for ' + name, 'info'); }
function msgTrainer(name) { showToast('💬 Opening chat with ' + name, 'info'); }

// =========================================
// CHARTS
// =========================================
const chartDefaults = {
  color: '#8a92b2',
  borderColor: 'rgba(255,255,255,0.07)',
  gridColor: 'rgba(255,255,255,0.05)',
};

Chart.defaults.color = chartDefaults.color;
Chart.defaults.font.family = 'Outfit';
Chart.defaults.font.size = 12;

// Revenue Chart
let revenueChart;
function initRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  const labels6 = ['Apr','May','Jun','Jul','Aug','Sep'];
  const data6 = [320000, 385000, 410000, 398000, 445000, 482500];
  revenueChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels6,
      datasets: [{
        label: 'Revenue (₹)',
        data: data6,
        backgroundColor: ctx => {
          const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 260);
          g.addColorStop(0, 'rgba(168,85,247,0.8)');
          g.addColorStop(1, 'rgba(6,182,212,0.3)');
          return g;
        },
        borderRadius: 8,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: chartDefaults.gridColor }, border: { display: false } },
        y: { grid: { color: chartDefaults.gridColor }, border: { display: false }, ticks: { callback: v => '₹' + (v/1000).toFixed(0) + 'K' } }
      }
    }
  });
}

function updateRevenueChart(months) {
  const labels12 = ['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
  const data12 = [290000,310000,360000,295000,320000,380000,320000,385000,410000,398000,445000,482500];
  const labels6  = labels12.slice(6);
  const data6    = data12.slice(6);
  revenueChart.data.labels = months === '12' ? labels12 : labels6;
  revenueChart.data.datasets[0].data = months === '12' ? data12 : data6;
  revenueChart.update();
}

// Membership Doughnut
function initMembershipChart() {
  const ctx = document.getElementById('membershipChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Basic','Premium','Elite'],
      datasets: [{
        data: [380, 580, 288],
        backgroundColor: ['rgba(6,182,212,0.8)','rgba(168,85,247,0.8)','rgba(245,158,11,0.8)'],
        borderColor: '#13162a',
        borderWidth: 4,
        hoverOffset: 10,
      }]
    },
    options: {
      responsive: true,
      cutout: '68%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true } }
      }
    }
  });
}

// Check-in trend
function initCheckinChart() {
  const ctx = document.getElementById('checkinChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Apr','May','Jun','Jul','Aug','Sep'],
      datasets: [{
        label: 'Check-ins',
        data: [5200, 6100, 5800, 6900, 7200, 7800],
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6,182,212,0.1)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#06b6d4',
        pointBorderColor: '#13162a',
        pointBorderWidth: 2,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: chartDefaults.gridColor }, border: { display: false } },
        y: { grid: { color: chartDefaults.gridColor }, border: { display: false } }
      }
    }
  });
}

// Class popularity
function initClassChart() {
  const ctx = document.getElementById('classChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Yoga','HIIT','Zumba','CrossFit','Boxing','Spin','Pilates'],
      datasets: [{
        label: 'Bookings',
        data: [280, 320, 275, 190, 220, 300, 150],
        backgroundColor: [
          'rgba(168,85,247,0.7)','rgba(239,68,68,0.7)','rgba(236,72,153,0.7)',
          'rgba(245,158,11,0.7)','rgba(239,68,68,0.7)','rgba(16,185,129,0.7)','rgba(6,182,212,0.7)'
        ],
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: chartDefaults.gridColor }, border: { display: false } },
        y: { grid: { display: false }, border: { display: false } }
      }
    }
  });
}

// Retention
function initRetentionChart() {
  const ctx = document.getElementById('retentionChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Apr','May','Jun','Jul','Aug','Sep'],
      datasets: [{
        label: 'Retention %',
        data: [78, 80, 79, 83, 85, 87],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16,185,129,0.1)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#13162a',
        pointBorderWidth: 2,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: chartDefaults.gridColor }, border: { display: false } },
        y: { min: 70, max: 100, grid: { color: chartDefaults.gridColor }, border: { display: false }, ticks: { callback: v => v + '%' } }
      }
    }
  });
}

// Revenue Breakdown
function initRevenueBreakChart() {
  const ctx = document.getElementById('revenueBreakChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Membership Fees','Personal Training','Merchandise','Supplement Sales','Event Fees'],
      datasets: [{
        data: [68, 15, 8, 5, 4],
        backgroundColor: [
          'rgba(168,85,247,0.8)','rgba(6,182,212,0.8)','rgba(16,185,129,0.8)',
          'rgba(245,158,11,0.8)','rgba(236,72,153,0.8)'
        ],
        borderColor: '#13162a',
        borderWidth: 4,
        hoverOffset: 10,
      }]
    },
    options: {
      responsive: true,
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}%` } }
      }
    }
  });
}

// =========================================
// GLOBAL SEARCH
// =========================================
function handleSearch(val) {
  if (!val) return;
  const found = members.find(m => m.name.toLowerCase().includes(val.toLowerCase()) || m.id.toLowerCase().includes(val.toLowerCase()));
  if (found) {
    showToast('🔍 Found: ' + found.name + ' — ' + found.plan + ' member', 'info');
  }
}

// =========================================
// COUNTER ANIMATION
// =========================================
function animateCounter(el, target, prefix='', suffix='') {
  let start = 0;
  const duration = 1500;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.round(eased * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// =========================================
// INIT
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  // Set today's date default
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('newMemberDate');
  if (dateInput) dateInput.value = today;

  // Render all data
  renderMembersTable(members);
  renderSchedule();
  renderClassesList();
  renderBillingTable();
  renderTrainers(trainers);

  // Charts
  initRevenueChart();
  initMembershipChart();
  initCheckinChart();
  initClassChart();
  initRetentionChart();
  initRevenueBreakChart();

  // Animate counters
  animateCounter(document.getElementById('statMembers'), 1248);
  animateCounter(document.getElementById('statClasses'), 38);
  animateCounter(document.getElementById('statCheckins'), 342);

  // Live check-in simulation
  const liveNames = ['Arjun Gupta', 'Deepa Nair', 'Rakesh Tomar', 'Meera Pillai', 'Sanjay Das'];
  const liveInitials = ['AG', 'DN', 'RT', 'MP', 'SD'];
  const liveColors = [
    'linear-gradient(135deg,#a855f7,#ec4899)',
    'linear-gradient(135deg,#06b6d4,#10b981)',
    'linear-gradient(135deg,#f59e0b,#ef4444)',
    'linear-gradient(135deg,#3b82f6,#a855f7)',
    'linear-gradient(135deg,#10b981,#06b6d4)',
  ];
  let liveIdx = 0;
  setInterval(() => {
    const list = document.getElementById('activityList');
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.style.animation = 'fadeIn 0.5s ease';
    item.innerHTML = `
      <div class="member-avatar" style="background:${liveColors[liveIdx%5]}">${liveInitials[liveIdx%5]}</div>
      <div class="activity-info"><strong>${liveNames[liveIdx%5]}</strong><span>Checked in · Just now · QR Code</span></div>
      <span class="badge badge-green">Active</span>
    `;
    list.insertBefore(item, list.firstChild);
    if (list.children.length > 8) list.removeChild(list.lastChild);
    liveIdx++;
  }, 8000);

  showToast('🚀 GymSphere Dashboard loaded!', 'success');
});
