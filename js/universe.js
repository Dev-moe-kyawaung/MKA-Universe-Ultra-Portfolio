<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <!-- META TAGS -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moe Kyaw Aung ⚛ Universe Ultra Pro 6.0</title>
    
    <meta name="description" content="Ultimate AI-powered developer portfolio with universe theme. Senior Android Developer with 82+ certifications and 40+ projects.">
    <meta name="keywords" content="Senior Android Developer,Kotlin,Compose,AI,Portfolio,Universe">
    <meta name="author" content="Moe Kyaw Aung">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Moe Kyaw Aung ⚛ Universe Ultra Pro">
    <meta property="og:description" content="AI-powered developer portfolio">
    <meta property="og:image" content="https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp">
    <meta property="og:url" content="https://dev-moe-kyawaung.github.io">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/icons/favicon.png">
    <link rel="manifest" href="manifest.json">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Libs -->
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/themes.css">
</head>
<body>
    <!-- UNIVERSE BACKGROUND -->
    <canvas id="universeCanvas"></canvas>
    
    <!-- PRELOADER -->
    <div class="preloader" id="preloader">
        <div class="preloader-inner">
            <div class="galaxy-loader">
                <div class="planet"><i class="fas fa-rocket"></i></div>
                <div class="orbit orbit-1"></div>
                <div class="orbit orbit-2"></div>
                <div class="orbit orbit-3"></div>
            </div>
            <div class="preloader-text">
                <span class="galaxy-text">ENTERING MKA UNIVERSE</span>
                <div class="space-bar"><div class="space-fill" id="spaceFill"></div></div>
                <span class="space-percent" id="spacePercent">0%</span>
            </div>
        </div>
    </div>
    
    <!-- HEADER -->
    <header class="header" id="header">
        <div class="container">
            <nav class="nav">
                <a href="#home" class="nav-brand">
                    <div class="brand-sun"><span class="sun-core">M</span></div>
                    <div class="brand-text">
                        <span class="brand-name">MKA</span>
                        <span class="brand-space">UNIVERSE</span>
                    </div>
                </a>
                
                <ul class="nav-links" id="navLinks">
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#journey">Journey</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
                <div class="nav-actions">
                    <button class="theme-toggle" id="themeToggle"><i class="fas fa-moon"></i></button>
                    <button class="nav-toggle" id="navToggle"><span></span><span></span><span></span></button>
                </div>
            </nav>
        </div>
    </header>
    
    <!-- MOBILE NAV -->
    <div class="mobile-nav" id="mobileNav">
        <button class="mobile-close" id="mobileClose">×</button>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    
    <main>
        <!-- HERO -->
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-stars">
                        <span class="hstar h-1">✦</span>
                        <span class="hstar h-2">✦</span>
                        <span class="hstar h-3">✦</span>
                    </div>
                    
                    <div class="hero-badge">
                        <i class="fas fa-satellite"></i> Available for Missions
                    </div>
                    
                    <h1 class="hero-title">
                        <span class="cosmic-text cosmic-1">MOE</span>
                        <span class="cosmic-text cosmic-2">KYAW</span>
                        <span class="cosmic-text cosmic-3 gradient-space">AUNG</span>
                    </h1>
                    
                    <div class="hero-roles">
                        <span class="bracket">⟨</span>
                        <span id="cosmicRoles"></span>
                        <span class="bracket">⟩</span>
                    </div>
                    
                    <p class="hero-desc">
                        Building <span class="text-neon">intergalactic</span> mobile experiences 
                        from Myanmar to Bangkok
                    </p>
                    
                    <div class="hero-cta">
                        <a href="#projects" class="btn btn-primary">
                            <i class="fas fa-rocket"></i> Launch Projects
                        </a>
                        <a href="#contact" class="btn btn-outline">
                            <i class="fas fa-signal"></i> Connect
                        </a>
                    </div>
                    
                    <div class="hero-stats">
                        <div class="cosmic-stat">
                            <span class="cosmic-num" data-count="82">0</span>
                            <span class="cosmic-plus">+</span>
                            <span class="cosmic-label">Certifications</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="cosmic-stat">
                            <span class="cosmic-num" data-count="40">0</span>
                            <span class="cosmic-plus">+</span>
                            <span class="cosmic-label">Projects</span>
                        </div>
                        <div class="stat-divider"></div>
                        <div class="cosmic-stat">
                            <span class="cosmic-num" data-count="9">0</span>
                            <span class="cosmic-plus">+</span>
                            <span class="cosmic-label">Domains</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator">
                <div class="comet"></div>
                <span>SCROLL TO EXPLORE</span>
            </div>
        </section>
        
        <!-- SKILLS -->
        <section id="skills" class="section">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <span class="section-tag">// POWER LEVELS</span>
                    <h2 class="section-title">My <span class="gradient-space">Nebula Skills</span></h2>
                </div>
                
                <div class="skills-grid" id="skillsGrid">
                    <!-- JS Loaded -->
                </div>
            </div>
        </section>
        
        <!-- PROJECTS -->
        <section id="projects" class="section">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <span class="section-tag">// GALAXY PROJECTS</span>
                    <h2 class="section-title">Featured <span class="gradient-space">Missions</span></h2>
                </div>
                
                <div class="projects-filter" data-aos="fade-up">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="android">Android</button>
                    <button class="filter-btn" data-filter="game">Games</button>
                    <button class="filter-btn" data-filter="web">Web</button>
                </div>
                
                <div class="projects-grid" id="projectsGrid">
                    <!-- JS Loaded -->
                </div>
            </div>
        </section>
        
        <!-- JOURNEY -->
        <section id="journey" class="section">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <span class="section-tag">// SPACE TIME</span>
                    <h2 class="section-title">My <span class="gradient-space">Cosmic Journey</span></h2>
                </div>
                
                <div class="timeline" id="journeyTimeline">
                    <!-- JS Loaded -->
                </div>
            </div>
        </section>
        
        <!-- CONTACT -->
        <section id="contact" class="section">
            <div class="container">
                <div class="section-header" data-aos="fade-up">
                    <span class="section-tag">// TRANSMISSION</span>
                    <h2 class="section-title">Send Me a <span class="gradient-space">Signal</span></h2>
                </div>
                
                <div class="contact-layout">
                    <div class="contact-info" data-aos="fade-right">
                        <h3>Let's build the next <span class="text-neon">big bang</span></h3>
                        <p>I'm always open to exploring new frontiers in tech.</p>
                        
                        <div class="contact-channel">
                            <i class="fas fa-phone"></i>
                            <span>+95 9 889 000 889</span>
                        </div>
                        <div class="contact-channel">
                            <i class="fas fa-envelope"></i>
                            <span>moekyawaung@technologist.com</span>
                        </div>
                        
                        <div class="social-satellites">
                            <a href="#" class="satellite-link"><i class="fab fa-github"></i></a>
                            <a href="#" class="satellite-link"><i class="fab fa-linkedin"></i></a>
                            <a href="#" class="satellite-link"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    
                    <form class="space-form" id="contactForm">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="text" placeholder="Subject">
                        <textarea placeholder="Message..."></textarea>
                        <button type="submit" class="btn btn-primary btn-block">
                            <i class="fas fa-paper-plane"></i> Send Transmission
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    
    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer-orbit">
                <span>© 2024 Moe Kyaw Aung</span>
                <span class="footer-heart">Made with ⚛️ in the Universe</span>
            </div>
        </div>
    </footer>
    
    <!-- BACK TO TOP -->
    <button class="back-to-top" id="backToTop"><i class="fas fa-rocket"></i></button>
    
    <!-- SCRIPTS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="js/data.js"></script>
    <script src="js/utilities.js"></script>
    <script src="js/universe.js"></script>
    <script src="js/particles.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/components.js"></script>
    <script src="js/chat.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
