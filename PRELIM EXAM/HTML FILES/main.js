// 1. DYNAMIC CAMPAIGN DATA
const campaignData = [
    { title: "Typhoon Kristine Relief", goal: 1000000, raised: 650000, desc: "Providing food packs and hygiene kits to affected families in Bicol." },
    { title: "National Blood Drive 2024", goal: 5000, raised: 3200, desc: "Aims to collect blood bags for emergency reserves across the Philippines." },
    { title: "First Aid for Schools", goal: 500, raised: 410, desc: "Empowering students with life-saving skills and emergency protocols." }
];
 
// Function to render campaigns
function renderCampaigns() {
    const list = document.getElementById('campaign-list');
    if (!list) return;
 
    campaignData.forEach(camp => {
        const percent = (camp.raised / camp.goal) * 100;
        list.innerHTML += `
            <div class="card">
                <h3>${camp.title}</h3>
                <p>${camp.desc}</p>
                <div style="background:#eee; height:10px; border-radius:5px; margin:15px 0;">
                    <div style="width:${percent}%; background: #d32f2f; height:100%; border-radius:5px;"></div>
                </div>
                <p><small>Raised: ₱${camp.raised.toLocaleString()} / Goal: ₱${camp.goal.toLocaleString()}</small></p>
                <button class="btn btn-red" onclick="openModal('${camp.title}')">Support Now</button>
            </div>
        `;
    });
}
 
// 2. MODAL LOGIC
function openModal(title) {
    const modal = document.getElementById('infoModal');
    document.getElementById('modalTitle').innerText = title;
    modal.style.display = 'flex';
}
 
function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}
 
// 3. VOLUNTEER FORM VALIDATION
function handleVolunteerSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('vName').value;
    const email = document.getElementById('vEmail').value;
    const msg = document.getElementById('formMsg');
 
    if (name.length < 3) {
        msg.innerHTML = "❌ Please enter your full name.";
        msg.style.color = "red";
    } else if (!email.includes('@')) {
        msg.innerHTML = "❌ Please enter a valid email address.";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "✅ Application Sent! Our team will contact you shortly.";
        msg.style.color = "green";
        document.getElementById('volunteerForm').reset();
    }
}
 
// 4. INTERACTIVE SERVICE DESCRIPTIONS
function toggleService(id) {
    const element = document.getElementById(id);
    const allDetails = document.querySelectorAll('.service-detail');
 
    allDetails.forEach(detail => {
        if(detail.id !== id) detail.style.display = 'none';
    });
 
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}
 
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCampaigns();
});