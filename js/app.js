// ========================================
// MAIN APP - UNIVERSE ULTRA PRO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTheme();
    initNavigation();
    initTyping();
    initAOS();
    initSkills();
    initProjects();
    initJourney();
    initContact();
    initCounters();
});

// Preloader
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const fill = document.getElementById('spaceFill');
    const percent = document.getElementById('spacePercent');
    
    let progress = 0;
    const timer = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            setTimeout(() => preloader.classList.add('hidden'), 500);
        }
        fill.style.width = `${progress}%`;
        percent.textContent = `${Math.round(progress)}%`;
    }, 200);
}

// Theme
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('universe-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('universe-theme', next);
    });
}

// Typing
function initTyping() {
    const el = document.getElementById('cosmicRoles');
    const roles = ['Senior Android Developer', 'Kotlin Explorer', 'Compose Pilot', 'AI Navigator'];
    let i = 0, char = 0, deleting = false;
    
    function type() {
        const role = roles[i];
        if (deleting) {
            el.textContent = role.substring(0, char);
            char--;
            if (char < 0) { deleting = false; i = (i + 1) % roles.length; setTimeout(type, 300); return; }
            setTimeout(type, 30);
        } else {
            el.textContent = role.substring(0, char + 1);
            char++;
            if (char === role.length) { deleting = true; setTimeout(type, 2000); return; }
            setTimeout(type, 60);
        }
    }
    type();
}

// Skills
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    SkillsData.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-planet';
        div.innerHTML = `
            <div class="planet-icon">${skill.icon}</div>
            <div class="planet-name">${skill.name}</div>
            <div class="planet-level">
                <div class="level-bar" style="width:${skill.level}%"></div>
            </div>
            <div class="planet-loc">📍 ${skill.planet}</div>
        `;
        grid.appendChild(div);
    });
}

// Projects
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    const filters = document.querySelectorAll('.filter-btn');
    
    function render(filter = 'all') {
        grid.innerHTML = '';
        const filtered = filter === 'all' ? ProjectsData : ProjectsData.filter(p => p.category === filter);
        
        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <a href="${project.github}" target="_blank">View on GitHub</a>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
                    <div class="project-location"><i class="fas fa-globe"></i> ${project.onPlanet}</div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.dataset.filter);
        });
    });
    
    render();
}
