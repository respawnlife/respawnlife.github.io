// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 汉堡菜单
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 点击导航链接关闭菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 技术图标悬停效果
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
            const img = icon.querySelector('img');
            if (img) {
                img.style.filter = 'grayscale(0%)';
            }
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
            const img = icon.querySelector('img');
            if (img) {
                img.style.filter = 'grayscale(20%)';
            }
        });
    });
    
    // 表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证和提交逻辑
            alert('感谢您的留言！我们会尽快回复您。');
            contactForm.reset();
        });
    }
    
    // 订阅表单
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加订阅逻辑
            alert('感谢您的订阅！');
            subscribeForm.reset();
        });
    }
    
    // 添加动画效果
    const animateElements = document.querySelectorAll('.service-box, .tech-category, .about-img, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // 为slogan添加打字机效果
    const slogan = document.querySelector('.slogan');
    if (slogan) {
        const text = slogan.textContent;
        slogan.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                slogan.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // 延迟启动打字机效果，等待页面加载完成
        setTimeout(typeWriter, 1000);
    }
});

// 当页面加载完成后，创建一个简单的预加载动画
window.addEventListener('load', function() {
    // 这里可以添加页面加载完成后的逻辑
    console.log('页面加载完成');
});