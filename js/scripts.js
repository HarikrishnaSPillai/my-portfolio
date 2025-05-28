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

    // --- "DATABASE" FOR BLOG POSTS ---
    const blogData = [
        {
            title: "My First Blog Post!",
            date: "May 27, 2025",
            shortContent: "Welcome to the command center! This is where I'll share updates, insights, and maybe a few secret formulas. Stay tuned, heroes! ZAP!",
            category: "Announcements",
            fullContent: `
                <p>Welcome to the command center! This is where I'll share updates, insights, and maybe a few secret formulas. Stay tuned, heroes! ZAP!</p>
                <p>This is the <strong>first main paragraph</strong> of the blog post titled "My First Blog Post!". Here, we would expand on the initial summary, providing more context and depth. For example, if the post is about a new technology, this paragraph might explain its core concepts. WHOOSH!</p>
                <p>The <strong>second paragraph</strong> could explore different aspects or use cases. Perhaps it includes a short tutorial, some code snippets (if applicable), or a discussion of pros and cons. It's all about engaging the reader and offering valuable insights. BAM!</p>
                <p>In the <strong>third paragraph</strong>, we might draw some conclusions, offer personal opinions, or invite discussion in the comments section (if this were a real blog platform). The idea is to wrap up the main points and leave the reader with something to think about. ZING!</p>
            `
        },
        {
            title: "The Power of Comic Sans (Just Kidding!)",
            date: "May 26, 2025",
            shortContent: "Let's talk typography in design. While Comic Sans gets a bad rap, choosing the right font is CRITICAL for impact. POW!",
            category: "Design Tips",
            fullContent: `
                <p>Let's talk typography in design. While Comic Sans gets a bad rap, choosing the right font is CRITICAL for impact. POW!</p>
                <p>In this post, we explore the fascinating world of typography. Good type can elevate a design from merely functional to truly memorable. We'll discuss principles like hierarchy, contrast, and readability. THWIP!</p>
                <p>We'll also look at some common typographic pitfalls and how to avoid them. Choosing appropriate font pairings and understanding licensing are also key aspects for any serious designer or developer. Remember, with great font power comes great responsibility! ZOWIE!</p>
                <p>So, while we might joke about Comic Sans, the underlying message is serious: pay attention to your type! It speaks volumes before a single word is read. KA-BOOM!</p>
            `
        },
        {
            title: "Debugging Adventures",
            date: "May 25, 2025",
            shortContent: "Spent the day wrestling a mischievous bug. Victory was achieved with perseverance and a lot of console.log()! WHAMMO!",
            category: "Dev Life",
            fullContent: `
                <p>Spent the day wrestling a mischievous bug. Victory was achieved with perseverance and a lot of console.log()! WHAMMO!</p>
                <p>Every developer knows the thrill (and sometimes frustration) of debugging. This particular bug was a sneaky one, hiding deep within an asynchronous callback function. It took hours of console logging, breakpoint setting, and rubber duck debugging. BIF!</p>
                <p>The breakthrough came when I decided to simplify the problem, isolating the problematic code block. Step by step, I traced the data flow until the culprit revealed itself – a classic off-by-one error, disguised by layers of complexity. SOCKO!</p>
                <p>The satisfaction of finally squashing that bug was immense! It's a reminder that even the most challenging problems can be solved with a methodical approach and a bit of grit. And maybe a lot of coffee. ZZZAP!</p>
            `
        }
    ];

    // --- "DATABASE" FOR CERTIFICATIONS ---
    const certificationsData = [
        {
            title: "Azure Data Fundamentals, DP-900",
            issuer: "Microsoft",
            date: "April 2025",
            description: "This certification proves",
            fullContent: `
                <p>This certification proves that I understand core data concepts and Azure data services, laying the foundation for roles in data engineering, analytics, or cloud.</p>
                <p>The Super Developer Certification from <strong>Awesome Certifiers Inc.</strong>, achieved in January 2025, is a testament to advanced skills in full-stack development. It covered a wide range of topics including modern JavaScript frameworks, database management, and cloud deployment strategies. Excelsior!</p>
                <p>The examination process was rigorous, involving both theoretical questions and practical coding challenges designed to simulate real-world problem-solving scenarios. Earning this was a significant milestone. KA-CHING!</p>
            `,
            link: "#",
            buttonText: "See Badge", 
            buttonColor: "bg-teal-500",
            buttonHoverColor: "hover:bg-teal-600"
        },
        {
            title: "Code Crusader Diploma",
            issuer: "Heroic Coding Academy",
            date: "Dec 2024",
            description: "Mastered the ancient arts of JavaScript and Python. FEAR MY FUNCTIONS! SPLAT!",
            fullContent: `
                <p>Mastered the ancient arts of JavaScript and Python. FEAR MY FUNCTIONS! SPLAT!</p>
                <p>Awarded in December 2024, the Code Crusader Diploma from the <strong>Heroic Coding Academy</strong> signifies proficiency in core programming languages and software development principles. The curriculum emphasized clean code, data structures, and algorithmic thinking. Gadzooks!</p>
                <p>This intensive program provided a strong foundation for building complex applications and tackling challenging technical problems. It was a journey of discovery and skill enhancement. HOLY CODE, BATMAN!</p>
            `,
            link: "#",
            buttonText: "See Badge",
            buttonColor: "bg-teal-500",
            buttonHoverColor: "hover:bg-teal-600"
        },
        {
            title: "Pixel Protector License",
            issuer: "Design Guardians Guild",
            date: "Nov 2024",
            description: "Ensuring every pixel is perfectly placed and every design is dynamic. KRUNCH!",
            fullContent: `
                <p>Ensuring every pixel is perfectly placed and every design is dynamic. KRUNCH!</p>
                <p>The Pixel Protector License, granted by the <strong>Design Guardians Guild</strong> in November 2024, recognizes expertise in UI/UX design principles and practices. This includes user research, wireframing, prototyping, and visual design. By the Hoary Hosts of Hoggoth!</p>
                <p>Emphasis was placed on creating user-centered designs that are not only aesthetically pleasing but also highly functional and accessible. This license marks a commitment to crafting exceptional digital experiences. Nuff Said!</p>
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

    function renderBlogPosts() {
        const container = document.getElementById('blogCardsContainer');
        if (!container) return;
        let blogHTML = '';
        blogData.forEach(post => {
            blogHTML += `
                <div class="bg-white rounded-lg comic-border blog-card p-1" 
                     data-title="${post.title}" 
                     data-subdetail="${post.date} - ${post.category}"
                     data-fullcontent="${post.fullContent.replace(/"/g, '&quot;')}">
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

    function openModal(data) {
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
        modalFullContent.innerHTML = data.fullContent || ''; 
        detailModal.classList.add('active');
        body.classList.add('modal-open');
    }

    function closeModal() {
        detailModal.classList.remove('active');
        body.classList.remove('modal-open');
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

    // --- ATTACH LISTENERS AFTER RENDERING ---
    function attachModalListeners() {
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

        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => {
                openModal({
                    title: card.dataset.title,
                    subDetail: card.dataset.subdetail,
                    fullContent: card.dataset.fullcontent
                });
            });
        });
        
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

    // --- INITIALIZE PAGE ---
    renderProjects();
    renderBlogPosts();
    renderCertifications();
    attachModalListeners(); 

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
