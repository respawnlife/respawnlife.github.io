// AI演示交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // AI聊天演示功能
    const aiInput = document.getElementById('ai-input');
    const aiSendBtn = document.getElementById('ai-send-btn');
    const aiChatMessages = document.getElementById('ai-chat-messages');
    
    // 预设的AI回复
    const aiResponses = [
        "我们的AI解决方案可以帮助您的业务实现自动化和智能化，提高效率并降低成本。",
        "Respawn Life专注于将前沿AI技术应用到实际业务场景中，为您创造真正的商业价值。",
        "我们的团队由AI专家和软件工程师组成，能够为您提供全方位的技术支持。",
        "我们可以为您定制专属的AI应用，满足您特定的业务需求。",
        "大语言模型可以应用于客服、内容创作、数据分析等多个领域，帮助您提升业务效率。",
        "我们提供从需求分析、方案设计到开发实施的全流程AI解决方案服务。",
        "AI技术正在快速发展，与我们合作可以确保您的业务始终处于技术前沿。"
    ];
    
    // 添加AI粒子效果
    initAIParticles();
    
    // 发送消息事件
    if (aiSendBtn && aiInput) {
        aiSendBtn.addEventListener('click', sendMessage);
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // 发送消息函数
    function sendMessage() {
        if (!aiInput.value.trim()) return;
        
        // 添加用户消息
        const userMessage = document.createElement('div');
        userMessage.className = 'ai-message user-message';
        userMessage.innerHTML = `
            <div class="ai-avatar" style="background: #3498db;">您</div>
            <div class="ai-message-content">
                <p>${aiInput.value}</p>
            </div>
        `;
        aiChatMessages.appendChild(userMessage);
        
        // 清空输入框
        const userQuestion = aiInput.value;
        aiInput.value = '';
        
        // 显示AI正在输入
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'ai-message';
        typingIndicator.innerHTML = `
            <div class="ai-avatar">AI</div>
            <div class="ai-message-content">
                <p><em>AI正在思考...</em></p>
            </div>
        `;
        aiChatMessages.appendChild(typingIndicator);
        
        // 滚动到底部
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
        
        // 模拟AI思考时间
        setTimeout(() => {
            // 移除思考提示
            aiChatMessages.removeChild(typingIndicator);
            
            // 根据问题选择回复
            let response = getAIResponse(userQuestion);
            
            // 添加AI回复
            const aiReply = document.createElement('div');
            aiReply.className = 'ai-message';
            aiReply.innerHTML = `
                <div class="ai-avatar">AI</div>
                <div class="ai-message-content">
                    <p>${response}</p>
                </div>
            `;
            aiChatMessages.appendChild(aiReply);
            
            // 滚动到底部
            aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
        }, 1500);
    }
    
    // 根据用户问题获取AI回复
    function getAIResponse(question) {
        question = question.toLowerCase();
        
        // 针对特定问题的回复
        if (question.includes('价格') || question.includes('费用') || question.includes('多少钱')) {
            return "我们的服务价格根据项目复杂度和需求而定，我们提供免费的需求咨询和方案评估，请联系我们的销售团队获取详细报价。";
        } else if (question.includes('时间') || question.includes('周期') || question.includes('多久')) {
            return "项目周期取决于具体需求和复杂度，一般小型项目1-2个月，中型项目2-4个月，大型项目可能需要4-6个月或更长。我们会在项目启动前提供详细的时间规划。";
        } else if (question.includes('联系') || question.includes('咨询')) {
            return "您可以通过网站底部的联系方式与我们取得联系，或者直接发送邮件至contact@respawnlife.com，我们的团队会在24小时内回复您。";
        } else if (question.includes('ai') || question.includes('人工智能')) {
            return "我们提供多种AI解决方案，包括智能客服机器人、数据分析预测、内容自动生成、计算机视觉应用等。我们的AI专家团队可以根据您的业务需求，定制最适合您的AI应用方案。";
        } else {
            // 随机回复
            return aiResponses[Math.floor(Math.random() * aiResponses.length)];
        }
    }
    
    // 初始化AI粒子效果
    function initAIParticles() {
        const aiParticles = document.getElementById('ai-particles');
        if (!aiParticles) return;
        
        // 创建粒子
        for (let i = 0; i < 50; i++) {
            createParticle(aiParticles);
        }
    }
    
    // 创建单个粒子
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机位置
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // 随机大小
        const size = Math.random() * 5 + 2;
        
        // 随机动画延迟
        const delay = Math.random() * 5;
        
        // 随机动画持续时间
        const duration = Math.random() * 10 + 10;
        
        // 设置样式
        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: rgba(52, 152, 219, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            animation: float ${duration}s ease-in-out ${delay}s infinite, 
                       pulse ${Math.random() * 3 + 2}s ease-in-out ${delay}s infinite;
        `;
        
        container.appendChild(particle);
    }
});

// 当页面滚动到AI解决方案部分时，添加动画效果
window.addEventListener('scroll', function() {
    const aiSolutions = document.querySelectorAll('.ai-solution-card');
    
    aiSolutions.forEach(solution => {
        const position = solution.getBoundingClientRect();
        
        // 当元素进入视口时
        if (position.top < window.innerHeight - 100) {
            solution.classList.add('animated');
        }
    });
});