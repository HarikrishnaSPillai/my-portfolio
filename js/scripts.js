// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- "DATABASE" FOR PROJECTS ---
    const projectsData = [
        {
            title: "Project Title ONE",
            imageSrc: "https://placehold.co/600x400/FF6347/FFFFFF?text=Project+1",
            altText: "Project 1 Screenshot",
            tech: "HTML, CSS, JavaScript, WOW!",
            description: "WHAM! A brief description of this amazing project. It solves a problem and looks great doing it. Users love its POW-erful features!",
            fullContent: `
                <p>WHAM! A brief description of this amazing project. It solves a problem and looks great doing it. Users love its POW-erful features!</p>
                <p>This is the <strong>first detailed paragraph</strong> about Project Title ONE. It delves into the core functionalities, the problems it aimed to solve, and the initial approach taken. We really wanted to push the boundaries with this one, ZAP!</p>
                <p>The <strong>second paragraph</strong> would typically discuss the challenges faced during development. For instance, integrating a particularly tricky API or optimizing performance for a large dataset. Overcoming these hurdles was a real POW! moment for the team.</p>
                <p>Finally, the <strong>third paragraph</strong> could cover the outcomes and learnings. What was the impact of the project? What new skills were acquired? This section often includes a call to action or a link to a live demo if available. It's all about showing the journey and the results, WHAMMO!</p>
            `,
            buttonColor: "bg-red-500",
            buttonHoverColor: "hover:bg-red-600"
        },
        {
            title: "Project Title TWO",
            imageSrc: "https://placehold.co/600x400/90EE90/000000?text=Project+2",
            altText: "Project 2 Screenshot",
            tech: "React, Tailwind, ZAP!",
            description: "BOOM! This project showcases cutting-edge technology and a user-friendly interface. Lorem ipsum something something. It's super effective!",
            fullContent: `
                <p>BOOM! This project showcases cutting-edge technology and a user-friendly interface. Lorem ipsum something something. It's super effective!</p>
                <p>For Project Title TWO, we leveraged the power of <strong>React and Tailwind CSS</strong> to create a highly dynamic and responsive user experience. The main goal was to build a platform that was both intuitive for new users and powerful enough for experts. SMASH!</p>
                <p>One of the significant challenges involved state management across complex components. We explored various solutions before settling on a streamlined approach that enhanced performance and maintainability. Getting this right felt like a major VICTORY!</p>
                <p>The project received positive feedback for its clean design and fast load times. Key takeaways include the importance of component-based architecture and the efficiency gains from utility-first CSS. THWACK!</p>
            `,
            buttonColor: "bg-green-500",
            buttonHoverColor: "hover:bg-green-600"
        },
        {
            title: "Project Title THREE",
            imageSrc: "https://placehold.co/600x400/FFD700/000000?text=Project+3",
            altText: "Project 3 Screenshot",
            tech: "Node.js, Express, KAPOW!",
            description: "HOLY SMOKES! A backend marvel that powers incredible applications. Scalable, robust, and lightning fast!",
            fullContent: `
                <p>HOLY SMOKES! A backend marvel that powers incredible applications. Scalable, robust, and lightning fast!</p>
                <p>Project Title THREE was an ambitious backend system developed using <strong>Node.js and Express</strong>. The primary objective was to create a high-performance API capable of handling thousands of concurrent requests. CRUNCH!</p>
                <p>We focused heavily on database optimization and asynchronous programming patterns to ensure non-blocking operations. This involved meticulous planning and rigorous testing to guarantee stability and speed. Success felt truly SUPER!</p>
                <p>The resulting API significantly improved data processing times for its client applications and demonstrated excellent scalability under load tests. This project solidified our expertise in building robust server-side solutions. EXCELSIOR!</p>
            `,
            buttonColor: "bg-yellow-500",
            buttonHoverColor: "hover:bg-yellow-600",
            buttonTextColor: "text-black" 
        }
    ];

    // --- "DATABASE" FOR BLOG POSTS - REMOVED ---
    // const blogData = [ ... ]; // This array is no longer used. Data comes from metadata.json

    // --- "DATABASE" FOR CERTIFICATIONS ---
    const certificationsData = [
        {
            title: "Azure Data Fundamentals, DP-900",
            issuer: "Microsoft",
            date: "April 2025", // Assuming you meant a future or recent date
            description: "This certification proves that I understand core data concepts and Azure data services, laying the foundation for roles in data engineering, analytics, or cloud.",
            fullContent: `
                <p>This certification demonstrates a solid understanding of core data concepts and Azure data services, providing a strong foundation for roles in data engineering, analytics, and cloud computing.</p>
                <p>The <strong>Microsoft Certified: Azure Data Fundamentals (DP-900)</strong>, earned in April 2025, validates essential knowledge of data storage, processing, and analytics on Azure. It covers both relational and non-relational data models, batch vs. streaming workloads, and Azure services like Synapse, Cosmos DB, and Data Lake.</p>
                <p>The exam included conceptual questions and scenario-based challenges, testing the ability to apply data principles in cloud-native environments. Earning this certification signifies a key milestone in building cloud data expertise. SHAZAM!</p>
            `,
            link: "#", // Replace with actual link to credential if available
            buttonText: "See Badge", 
            buttonColor: "bg-teal-500",
            buttonHoverColor: "hover:bg-teal-600"
        },
        {
            title: "Azure AI Fundamentals, AI-900",
            issuer: "Microsoft",
            date: "March 2025", // Assuming you meant a future or recent date
            description: "This certification proves that I understand fundamental AI concepts and how Microsoft Azure delivers AI services like machine learning, computer vision, and natural language processing.",
            fullContent: `
                <p>This certification, the <strong>Microsoft Certified: Azure AI Fundamentals (AI-900)</strong>, validates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.</p>
                <p>Achieved in March 2025, it demonstrates an understanding of AI workloads and considerations, principles of machine learning on Azure, computer vision workloads on Azure, and Natural Language Processing (NLP) workloads on Azure.</p>
                <p>It's an excellent starting point for anyone looking to build a career in AI or understand how AI can be leveraged using cloud platforms. KAPOW!</p>
            `,
            link: "#", // Replace with actual link
            buttonText: "See Badge",
            buttonColor: "bg-teal-500",
            buttonHoverColor: "hover:bg-teal-600"
        },
        { // Keeping one placeholder for structure, can be replaced or removed
            title: "Placeholder Certification",
            issuer: "Future Achievements Inc.",
            date: "To Be Announced",
            description: "Details about this future certification will be updated here. KRUNCH!",
            fullContent: `
                <p>Details about this future certification will be updated here. KRUNCH!</p>
                <p>This placeholder represents an upcoming achievement or a spot for another one of your valuable certifications. Keep learning and growing! WONDERFUL!</p>
            `,
            link: "#",
            buttonText: "See Badge",
            buttonColor: "bg-teal-500",
            buttonHoverColor: "hover:bg-teal-600"
        }
    ];

    // --- RENDER FUNCTIONS ---
    function renderProjects() {
        const container = document.getElementById('projectCardsContainer');
        if (!container) return;
        let projectsHTML = '';
        projectsData.forEach(project => {
            projectsHTML += `
                <div class="bg-white rounded-lg comic-border project-card p-1">
                    <div class="bg-gray-200 p-4 comic-border-sm rounded-t-md">
                        <h3 class="font-bangers text-2xl text-black text-center project-title-display">${project.title}</h3>
                    </div>
                    <img src="${project.imageSrc}" alt="${project.altText}" class="w-full h-48 object-cover rounded-b-md project-image-display" onerror="this.style.display='none';">
                    <div class="p-6">
                        <p class="text-sm mb-3 project-tech-display"><strong class="font-bangers">Tech:</strong> ${project.tech}</p>
                        <p class="mb-4 project-description-display">${project.description}</p>
                        <button class="view-project-btn font-bangers text-lg ${project.buttonColor} ${project.buttonTextColor || 'text-white'} px-6 py-2 rounded comic-border-button ${project.buttonHoverColor} inline-block"
                                data-title="${project.title}"
                                data-image="${project.imageSrc}"
                                data-tech="${project.tech}"
                                data-fullcontent="${project.fullContent.replace(/"/g, '&quot;')}"> 
                           View Project! 
                        </button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = projectsHTML;
    }

    async function renderBlogPosts() {
        const container = document.getElementById('blogCardsContainer');
        if (!container) {
            console.error("Blog cards container not found!");
            return;
        }
        try {
            // Path relative to index.html where script.js is loaded
            const response = await fetch('blogs/metadata.json'); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}, while fetching metadata.json`);
            }
            const blogMetadata = await response.json();
            
            let blogHTML = '';
            blogMetadata.forEach(post => {
                blogHTML += `
                    <div class="bg-white rounded-lg comic-border blog-card p-1" 
                         data-title="${post.title}" 
                         data-subdetail="${post.date} - ${post.category}"
                         data-filename="blogs/${post.fileName}"> 
                        <div class="blog-title-bg p-4 comic-border-sm rounded-t-md"> 
                            <h3 class="font-bangers text-2xl text-black text-center">${post.title}</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-sm mb-2 text-gray-600">${post.date}</p>
                            <p class="mb-4">${post.shortContent}</p>
                            <p class="text-xs text-gray-500">Category: ${post.category}</p>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = blogHTML;
            // It's important to re-attach listeners specifically for blog cards here
            // because they are rendered asynchronously.
            attachBlogCardListeners(); 
        } catch (error) {
            console.error("Could not load blog posts:", error);
            container.innerHTML = "<p class='text-center text-red-500 col-span-full'>Could not load blog posts. Please check the console and ensure 'blogs/metadata.json' and individual blog HTML files exist and are accessible.</p>";
        }
    }

    function renderCertifications() {
        const container = document.getElementById('certificationCardsContainer');
        if (!container) return;
        let certsHTML = '';
        certificationsData.forEach(cert => {
            certsHTML += `
                <div class="bg-white rounded-lg comic-border cert-card p-1"
                     data-title="${cert.title}"
                     data-subdetail="${cert.issuer} - ${cert.date}"
                     data-fullcontent="${cert.fullContent.replace(/"/g, '&quot;')}">
                    <div class="cert-title-bg p-4 comic-border-sm rounded-t-md">
                        <h3 class="font-bangers text-2xl text-black text-center">${cert.title}</h3>
                    </div>
                    <div class="p-6">
                        <p class="text-md font-semibold mb-1">${cert.issuer}</p>
                        <p class="text-sm text-gray-600 mb-3">${cert.date}</p>
                        <p class="mb-4">${cert.description}</p>
                        <a href="${cert.link}" target="_blank" 
                           class="font-bangers text-lg ${cert.buttonColor} text-white px-6 py-2 rounded comic-border-button ${cert.buttonHoverColor} inline-block cert-link-btn">
                           ${cert.buttonText}
                        </a>
                    </div>
                </div>
            `;
        });
        container.innerHTML = certsHTML;
    }

    // --- MODAL LOGIC ---
    const detailModal = document.getElementById('detailModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalSubDetail = document.getElementById('modalSubDetail');
    const modalFullContent = document.getElementById('modalFullContent');
    const body = document.body;

    async function openModal(data) {
        modalTitle.textContent = data.title || '';
        if (data.imageSrc) {
            modalImage.src = data.imageSrc;
            modalImage.alt = data.title || 'Detail image';
            modalImage.classList.remove('hidden');
        } else {
            modalImage.src = ''; 
            modalImage.classList.add('hidden');
        }
        modalSubDetail.textContent = data.subDetail || '';

        if (data.fileName) { // If it's a blog post needing content fetched
            try {
                // Path relative to index.html
                const response = await fetch(data.fileName); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}, while fetching ${data.fileName}`);
                }
                const htmlContent = await response.text();
                modalFullContent.innerHTML = htmlContent;
            } catch (error) {
                console.error(`Could not load blog content from ${data.fileName}:`, error);
                modalFullContent.innerHTML = `<p class='text-red-500'>Error loading content from ${data.fileName}. Please check the file path and ensure the file exists.</p>`;
            }
        } else { // For projects or certs where fullContent is directly provided
            modalFullContent.innerHTML = data.fullContent || ''; 
        }
        
        detailModal.classList.add('active');
        body.classList.add('modal-open');
    }

    function closeModal() {
        detailModal.classList.remove('active');
        body.classList.remove('modal-open');
        modalTitle.textContent = '';
        modalImage.src = '';
        modalImage.classList.add('hidden');
        modalSubDetail.textContent = '';
        modalFullContent.innerHTML = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (detailModal) {
        detailModal.addEventListener('click', (event) => {
            if (event.target === detailModal || event.target === detailModal.querySelector('.modal-content-wrapper')) {
                closeModal();
            }
        });
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && detailModal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- ATTACH MODAL LISTENERS ---
    function attachProjectAndCertListeners() {
        // Project "View Project!" buttons
        document.querySelectorAll('.view-project-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                openModal({
                    title: button.dataset.title,
                    imageSrc: button.dataset.image,
                    subDetail: button.dataset.tech,
                    fullContent: button.dataset.fullcontent
                });
            });
        });
        
        // Cert cards 
        document.querySelectorAll('.cert-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('a.cert-link-btn')) { 
                    return; 
                }
                openModal({
                    title: card.dataset.title,
                    subDetail: card.dataset.subdetail,
                    fullContent: card.dataset.fullcontent
                });
            });
        });
    }

    function attachBlogCardListeners() {
        // Blog cards 
        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => {
                openModal({
                    title: card.dataset.title,
                    subDetail: card.dataset.subdetail,
                    fileName: card.dataset.filename // Pass filename to fetch
                });
            });
        });
    }


    // --- INITIALIZE PAGE ---
    renderProjects();
    renderBlogPosts(); // This is async and will call attachBlogCardListeners internally
    renderCertifications();
    attachProjectAndCertListeners(); // Attach listeners for projects and certs


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; 
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('header')?.offsetHeight || 70; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    const messageBoxOverlay = document.getElementById('messageBoxOverlay');
    const messageBoxButton = document.getElementById('messageBoxButton');
    function showMessage(title, text) {
        document.getElementById('messageBoxTitle').textContent = title;
        document.getElementById('messageBoxText').textContent = text;
        if (messageBoxOverlay) messageBoxOverlay.classList.add('visible');
    }
    if (messageBoxButton) {
        messageBoxButton.addEventListener('click', () => {
            if (messageBoxOverlay) messageBoxOverlay.classList.remove('visible');
        });
    }
    if (messageBoxOverlay) {
        messageBoxOverlay.addEventListener('click', (e) => {
            if (e.target === messageBoxOverlay) {
                if (messageBoxOverlay) messageBoxOverlay.classList.remove('visible');
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!name || !email || !message) {
                showMessage("HOLD UP, CHAMP!", "Please fill in all fields before sending your signal!");
                return;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showMessage("WHOOPS!", "That email address doesn't look quite right. Check it and try again!");
                return;
            }
            console.log('Form submitted:', { name, email, message });
            showMessage("SUCCESS!", "Your message has been ZAPPED into the cosmos! I'll get back to you soon!");
            contactForm.reset(); 
        });
    }

    const sectionTitles = document.querySelectorAll('h2.font-bangers');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            title.style.transform = 'rotate(-2deg) scale(1.05)';
            title.style.transition = 'transform 0.2s ease-in-out';
        });
        title.addEventListener('mouseleave', () => {
            title.style.transform = 'rotate(0deg) scale(1)';
        });
    });
});
