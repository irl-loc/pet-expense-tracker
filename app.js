// ==========================================
// Pet Expense Tracker - JavaScript
// Core functionality for expense tracking
// ==========================================

// ==========================================
// Data Management
// ==========================================

class ExpenseTracker {
    constructor() {
        this.expenses = this.loadExpenses();
        this.categoryEmojis = {
            'Food': '🍖',
            'Toys': '🎾',
            'Treats': '🍪',
            'Vet Bills': '🏥',
            'Medication': '💊',
            'Grooming': '✂️',
            'Accessories': '🦴',
            'Other': '📌'
        };
        this.init();
    }

    // Load expenses from localStorage
    loadExpenses() {
        const stored = localStorage.getItem('petExpenses');
        return stored ? JSON.parse(stored) : [];
    }

    // Save expenses to localStorage
    saveExpenses() {
        localStorage.setItem('petExpenses', JSON.stringify(this.expenses));
    }

    // Add a new expense
    addExpense(amount, category, date, notes = '') {
        const expense = {
            id: Date.now(),
            amount: parseFloat(amount),
            category: category,
            date: date,
            notes: notes,
            createdAt: new Date().toISOString()
        };
        this.expenses.unshift(expense);
        this.saveExpenses();
        return expense;
    }

    // Delete an expense
    deleteExpense(id) {
        this.expenses = this.expenses.filter(exp => exp.id !== id);
        this.saveExpenses();
    }

    // Get expenses for current month
    getCurrentMonthExpenses() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        return this.expenses.filter(exp => {
            const expDate = new Date(exp.date);
            return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
        });
    }

    // Get total spending for current month
    getTotalSpending() {
        return this.getCurrentMonthExpenses().reduce((sum, exp) => sum + exp.amount, 0);
    }

    // Get spending by category for current month
    getSpendingByCategory() {
        const monthExpenses = this.getCurrentMonthExpenses();
        const breakdown = {};

        monthExpenses.forEach(exp => {
            if (!breakdown[exp.category]) {
                breakdown[exp.category] = 0;
            }
            breakdown[exp.category] += exp.amount;
        });

        return breakdown;
    }

    // Get recent expenses (last 5-10)
    getRecentExpenses(limit = 5) {
        return this.expenses.slice(0, limit);
    }

    // Filter expenses by category
    filterByCategory(category) {
        if (!category) return this.expenses;
        return this.expenses.filter(exp => exp.category === category);
    }

    // Initialize the app
    init() {
        this.setupEventListeners();
        this.setDefaultDate();
        this.render();
    }

    // Setup all event listeners
    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e.target.closest('.nav-tab')));
        });

        // Form submission
        document.getElementById('expenseForm').addEventListener('submit', (e) => this.handleFormSubmit(e));

        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', (e) => this.handleCategoryFilter(e));
    }

    // Switch between tabs
    switchTab(tabButton) {
        // Remove active class from all tabs
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tabButton.classList.add('active');
        const tabName = tabButton.dataset.tab;
        document.getElementById(tabName).classList.add('active');

        // Re-render when switching to dashboard or history
        if (tabName === 'dashboard' || tabName === 'history') {
            this.render();
        }
    }

    // Set today's date as default in date input
    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').value = today;
    }

    // Handle form submission
    handleFormSubmit(e) {
        e.preventDefault();

        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        const notes = document.getElementById('notes').value;

        if (!amount || !category || !date) {
            alert('Please fill in all required fields');
            return;
        }

        this.addExpense(amount, category, date, notes);

        // Reset form
        document.getElementById('expenseForm').reset();
        this.setDefaultDate();

        // Show success message
        this.showSuccessMessage('Expense added successfully!');

        // Re-render dashboard
        this.render();

        // Switch to dashboard
        const dashboardTab = document.querySelector('[data-tab="dashboard"]');
        this.switchTab(dashboardTab);
    }

    // Handle category filter
    handleCategoryFilter(e) {
        const selectedCategory = e.target.value;
        this.renderHistoryTab(selectedCategory);
    }

    // Show success message
    showSuccessMessage(message) {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #acf92c;
            color: #161616;
            padding: 16px 24px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        msg.textContent = message;
        document.body.appendChild(msg);

        setTimeout(() => {
            msg.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => msg.remove(), 300);
        }, 3000);
    }

    // ==========================================
    // Rendering Methods
    // ==========================================

    render() {
        this.renderDashboard();
        this.renderHistoryTab();
    }

    // Render dashboard
    renderDashboard() {
        this.renderTotalAmount();
        this.renderCategoryBreakdown();
        this.renderRecentExpenses();
    }

    // Render total amount
    renderTotalAmount() {
        const total = this.getTotalSpending();
        document.getElementById('totalAmount').textContent = total.toFixed(2);
    }

    // Render category breakdown
    renderCategoryBreakdown() {
        const breakdown = this.getSpendingByCategory();
        const categoryList = document.getElementById('categoryList');

        if (Object.keys(breakdown).length === 0) {
            categoryList.innerHTML = '<p class="empty-state">No expenses this month yet</p>';
            return;
        }

        categoryList.innerHTML = Object.entries(breakdown)
            .map(([category, amount]) => `
                <div class="category-item">
                    <div class="category-emoji">${this.categoryEmojis[category] || '📌'}</div>
                    <div class="category-name">${category}</div>
                    <div class="category-amount">$${amount.toFixed(2)}</div>
                </div>
            `)
            .join('');
    }

    // Render recent expenses
    renderRecentExpenses() {
        const recent = this.getRecentExpenses(5);
        const recentList = document.getElementById('recentExpensesList');

        if (recent.length === 0) {
            recentList.innerHTML = '<p class="empty-state">No expenses yet. Add your first expense to get started!</p>';
            return;
        }

        recentList.innerHTML = recent
            .map(exp => `
                <div class="expense-item">
                    <div class="expense-info">
                        <div class="expense-emoji">${this.categoryEmojis[exp.category] || '📌'}</div>
                        <div class="expense-details">
                            <div class="expense-category">${exp.category}</div>
                            <div class="expense-date">${this.formatDate(exp.date)}</div>
                        </div>
                    </div>
                    <div class="expense-amount">$${exp.amount.toFixed(2)}</div>
                </div>
            `)
            .join('');
    }

    // Render history tab
    renderHistoryTab(filterCategory = '') {
        const filtered = filterCategory ? this.filterByCategory(filterCategory) : this.expenses;
        const historyList = document.getElementById('fullExpenseList');

        if (filtered.length === 0) {
            historyList.innerHTML = '<p class="empty-state">No expenses found</p>';
            return;
        }

        historyList.innerHTML = filtered
            .map(exp => `
                <div class="expense-row">
                    <div class="expense-row-left">
                        <div class="expense-row-emoji">${this.categoryEmojis[exp.category] || '📌'}</div>
                        <div class="expense-row-info">
                            <div class="expense-row-category">${exp.category}</div>
                            <div class="expense-row-date">${this.formatDate(exp.date)}</div>
                            ${exp.notes ? `<div class="expense-row-notes">${this.escapeHtml(exp.notes)}</div>` : ''}
                        </div>
                    </div>
                    <div class="expense-row-right">
                        <div class="expense-row-amount">$${exp.amount.toFixed(2)}</div>
                        <button class="btn btn-danger" onclick="tracker.deleteAndRefresh(${exp.id})">Delete</button>
                    </div>
                </div>
            `)
            .join('');
    }

    // Delete expense and refresh
    deleteAndRefresh(id) {
        if (confirm('Are you sure you want to delete this expense?')) {
            this.deleteExpense(id);
            this.render();
        }
    }

    // Format date for display
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// ==========================================
// Initialize App
// ==========================================

let tracker;

document.addEventListener('DOMContentLoaded', () => {
    tracker = new ExpenseTracker();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

