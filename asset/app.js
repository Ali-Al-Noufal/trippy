document.addEventListener('DOMContentLoaded', function () {
    // بيانات وهمية لمحاكاة الخادم
    const mockData = {
        user: { username: "أحمد", balance: 100 },
        completedTasks: [
            { id: 1, name: "مهمة 1", date: "2025-10-01", reward: 10 },
            { id: 2, name: "مهمة 2", date: "2025-10-05", reward: 15 }
        ],
        withdrawals: [
            { id: 1, amount: 50, date: "2025-09-15", method: "PayPal" }
        ],
        tasks: [
            { id: 1, title: "مهمة 1: استبيان", description: "إكمال استبيان قصير", reward: 5, status: "متاحة" },
            { id: 2, title: "مهمة 2: تصميم", description: "تصميم شعار", reward: 20, status: "منجزة" }
        ]
    };

    // وظيفة لتحديث عناصر الـDOM
    function updateElement(selector, value) {
        const element = document.querySelector(selector);
        if (element) element.textContent = value;
    }

    // وظيفة لإنشاء رسالة خطأ
    function showError(container, message) {
        let errorDiv = container.querySelector('.error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            container.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    }

    // وظيفة لإزالة رسالة الخطأ
    function clearError(container) {
        const errorDiv = container.querySelector('.error');
        if (errorDiv) errorDiv.textContent = '';
    }

    // التحكم بشريط التنقل (للأجهزة المحمولة)
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
        });
    }

    // صفحة تسجيل الدخول
    const loginForm = document.querySelector('form[action="/login"]');
    if (loginForm) {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        loginForm.addEventListener('submit', function (event) {
            clearError(loginForm);
            if (!usernameInput.value.trim()) {
                event.preventDefault();
                showError(loginForm, 'يرجى إدخال اسم المستخدم.');
                usernameInput.focus();
                return;
            }
            if (!passwordInput.value.trim()) {
                event.preventDefault();
                showError(loginForm, 'يرجى إدخال كلمة المرور.');
                passwordInput.focus();
            }
        });

        // التحقق في الوقت الحقيقي
        usernameInput.addEventListener('input', () => clearError(loginForm));
        passwordInput.addEventListener('input', () => clearError(loginForm));
    }

    // صفحة التسجيل
    const registerForm = document.querySelector('form[action="/register"]');
    if (registerForm) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        registerForm.addEventListener('submit', function (event) {
            clearError(registerForm);
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                event.preventDefault();
                showError(registerForm, 'يرجى إدخال بريد إلكتروني صحيح.');
                emailInput.focus();
                return;
            }
            if (passwordInput.value.length < 6) {
                event.preventDefault();
                showError(registerForm, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.');
                passwordInput.focus();
            }
        });

        // التحقق في الوقت الحقيقي
        emailInput.addEventListener('input', () => clearError(registerForm));
        passwordInput.addEventListener('input', () => clearError(registerForm));
    }

    // لوحة التحكم
    if (document.querySelector('.dashboard')) {
        // تحديث الترحيب والرصيد
        updateElement('.dashboard h1', `مرحباً، ${mockData.user.username}`);
        updateElement('.dashboard p', `رصيدك: $${mockData.user.balance}`);

        // تحميل المهام المنجزة
        const tasksTableBody = document.querySelector('.table tbody');
        if (tasksTableBody) {
            tasksTableBody.innerHTML = '';
            mockData.completedTasks.forEach(task => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${task.name}</td>
                    <td>${task.date}</td>
                    <td>$${task.reward}</td>
                `;
                tasksTableBody.appendChild(row);
            });
        }

        // تحميل عمليات السحب
        const withdrawalsTableBody = document.querySelectorAll('.table tbody')[1];
        if (withdrawalsTableBody) {
            withdrawalsTableBody.innerHTML = '';
            mockData.withdrawals.forEach(withdrawal => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>$${withdrawal.amount}</td>
                    <td>${withdrawal.date}</td>
                    <td>${withdrawal.method}</td>
                `;
                withdrawalsTableBody.appendChild(row);
            });
        }
    }

    // صفحة المهام
    if (document.querySelector('.tasks-container')) {
        const tasksContainer = document.querySelector('.tasks-container');
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.className = 'tasks-filter';
        filterInput.placeholder = 'ابحث عن مهمة...';
        document.querySelector('.tasks-container').before(filterInput);

        function renderTasks(tasks) {
            tasksContainer.innerHTML = '';
            tasks.forEach(task => {
                const taskCard = document.createElement('div');
                taskCard.className = 'card';
                taskCard.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${task.title}</h5>
                        <p class="card-text">${task.description}</p>
                        <p class="card-text"><small>مكافأة: $${task.reward}</small></p>
                        <button class="btn btn-primary accept-task" data-id="${task.id}" ${task.status === 'منجزة' ? 'disabled' : ''}>
                            ${task.status === 'متاحة' ? 'قبول المهمة' : 'تم الإنجاز'}
                        </button>
                    </div>
                `;
                tasksContainer.appendChild(taskCard);
            });
        }

        renderTasks(mockData.tasks);

        // تصفية المهام
        filterInput.addEventListener('input', function () {
            const searchTerm = filterInput.value.toLowerCase();
            const filteredTasks = mockData.tasks.filter(task =>
                task.title.toLowerCase().includes(searchTerm) || task.description.toLowerCase().includes(searchTerm)
            );
            renderTasks(filteredTasks);
        });

        // قبول المهمة
        tasksContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('accept-task') && !event.target.disabled) {
                const taskId = event.target.dataset.id;
                const task = mockData.tasks.find(t => t.id == taskId);
                task.status = 'منجزة';
                mockData.user.balance += task.reward;
                mockData.completedTasks.push({
                    id: task.id,
                    name: task.title,
                    date: new Date().toISOString().split('T')[0],
                    reward: task.reward
                });
                alert(`تم قبول المهمة: ${task.title}! تم إضافة $${task.reward} إلى رصيدك.`);
                renderTasks(mockData.tasks);
            }
        });
    }

    // صفحة سحب الأموال
    const withdrawForm = document.querySelector('form[action="/withdraw"]');
    if (withdrawForm) {
        const amountInput = document.getElementById('amount');

        withdrawForm.addEventListener('submit', function (event) {
            clearError(withdrawForm);
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount) || amount <= 0) {
                event.preventDefault();
                showError(withdrawForm, 'يرجى إدخال مبلغ صحيح وإيجابي.');
                amountInput.focus();
                return;
            }
            if (amount > mockData.user.balance) {
                event.preventDefault();
                showError(withdrawForm, 'المبلغ المطلوب أكبر من رصيدك الحالي.');
                amountInput.focus();
                return;
            }
            alert('تم إرسال طلب السحب بنجاح!');
            mockData.user.balance -= amount;
            mockData.withdrawals.push({
                id: mockData.withdrawals.length + 1,
                amount,
                date: new Date().toISOString().split('T')[0],
                method: document.getElementById('paymentMethod').value
            });
            updateElement('.withdraw-container p', `رصيدك الحالي: $${mockData.user.balance}`);
        });

        amountInput.addEventListener('input', () => clearError(withdrawForm));
    }
});