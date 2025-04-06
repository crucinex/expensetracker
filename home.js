
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.querySelector('.page-title');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            menuLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding content section
            const sectionId = this.dataset.section;
            const activeSection = document.getElementById(sectionId);
            activeSection.classList.add('active');
            
            // Update page title
            pageTitle.textContent = this.textContent.trim();
        });
    });
});

        // Add this to the existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('expenseModal');
    const openBtn = document.getElementById('openExpenseModal');
    const closeBtn = document.getElementById('closeExpenseModal');

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    document.getElementById('expenseForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your expense submission logic here
        modal.style.display = 'none';
        alert('Expense added successfully!');
        this.reset();
    });
});

//For Categories
 // Doughnut Chart
 const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
 new Chart(doughnutCtx, {
     type: 'doughnut',
     data: {
         labels: ['Food', 'Housing', 'Transport', 'Utilities', 'Entertainment'],
         datasets: [{
             data: [1250, 900, 650, 450, 300],
             backgroundColor: [
                 '#4BC0C0',
                 '#36A2EB',
                 '#FFCE56',
                 '#FF6384',
                 '#9966FF'
             ],
             borderWidth: 0
         }]
     },
     options: {
         plugins: {
             legend: {
                 position: 'right',
                 labels: {
                     boxWidth: 15,
                     padding: 20
                 }
             }
         }
     }
 });

 // Bar Chart
 const barCtx = document.getElementById('barChart').getContext('2d');
 new Chart(barCtx, {
     type: 'bar',
     data: {
         labels: ['Food', 'Housing', 'Transport', 'Utilities'],
         datasets: [{
             label: 'Actual Spending',
             data: [1250, 900, 650, 450],
             backgroundColor: '#4BC0C0',
             borderRadius: 6
         },
         {
             label: 'Budget',
             data: [1500, 1200, 800, 600],
             backgroundColor: '#36A2EB',
             borderRadius: 6
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         },
         responsive: true,
         maintainAspectRatio: false
     }
 });

 // Line Chart
 const lineCtx = document.getElementById('lineChart').getContext('2d');
 new Chart(lineCtx, {
     type: 'line',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         datasets: [{
             label: 'Food',
             data: [800, 1200, 1000, 1500, 1250, 1800],
             borderColor: '#4BC0C0',
             tension: 0.4
         },
         {
             label: 'Transport',
             data: [400, 600, 550, 700, 650, 800],
             borderColor: '#FFCE56',
             tension: 0.4
         }]
     },
     options: {
         responsive: true,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });

 //For Reports
 // Trend Chart (Line)
 new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Spending',
            data: [1200, 1500, 1800, 1350, 2000, 1750],
            borderColor: '#3498db',
            tension: 0.4
        }]
    }
});

// Comparison Chart (Bar)
new Chart(document.getElementById('comparisonChart'), {
    type: 'bar',
    data: {
        labels: ['Food', 'Housing', 'Transport', 'Utilities'],
        datasets: [{
            label: 'Current Month',
            data: [450, 800, 350, 200],
            backgroundColor: '#2c3e50'
        },
        {
            label: 'Previous Month',
            data: [400, 750, 300, 180],
            backgroundColor: '#7f8c8d'
        }]
    }
});

// Income vs Expense Chart (Doughnut)
new Chart(document.getElementById('incomeExpenseChart'), {
    type: 'doughnut',
    data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
            data: [5400, 4250],
            backgroundColor: ['#27ae60', '#e74c3c']
        }]
    }
});

 // Budget Form Handling
 document.getElementById('newBudgetBtn').addEventListener('click', () => {
    document.getElementById('budgetForm').style.display = 'block';
});

// Budget Type Switching
document.getElementById('budgetType').addEventListener('change', (e) => {
    document.querySelectorAll('.recurring-options, .savings-options').forEach(el => {
        el.style.display = 'none';
    });
    if(e.target.value === 'recurring') {
        document.getElementById('recurringOptions').style.display = 'block';
    }
    if(e.target.value === 'savings') {
        document.getElementById('savingsOptions').style.display = 'block';
    }
});

// Initialize Chart
new Chart(document.getElementById('budgetOverviewChart'), {
    type: 'bar',
    data: {
        labels: ['Groceries', 'Utilities', 'Entertainment'],
        datasets: [{
            label: 'Budget',
            data: [800, 400, 300],
            backgroundColor: '#3498db'
        },
        {
            label: 'Actual',
            data: [600, 350, 450],
            backgroundColor: '#e74c3c'
        }]
    }
});