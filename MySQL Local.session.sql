-- CREATE TABLE users (
--     user_id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     password_hash VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- desc users;

-- alter table users
-- drop column created_at;


-- desc users;

-- CREATE TABLE Expenses (
--     expense_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     category_id INT ,
--     description VARCHAR(255),
--     date DATE NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
--     FOREIGN KEY (category_id) REFERENCES Categories(category_id) ON DELETE SET NULL
-- );

-- CREATE TABLE Categories (
--     category_id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     user_id INT DEFAULT NULL,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
-- );

-- desc Categories;

-- desc Expenses;

-- CREATE TABLE Budgets (
--     budget_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     category_id INT NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     start_date DATE NOT NULL,
--     end_date DATE NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
--     FOREIGN KEY (category_id) REFERENCES Categories(category_id) ON DELETE CASCADE
-- )

-- desc Budgets;

-- CREATE TABLE Income (
--     income_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     source VARCHAR(100),
--     date DATE NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
-- );

-- desc Income;

-- CREATE TABLE Notifications (
--     notification_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     message VARCHAR(255) NOT NULL,
--     notification_type ENUM('budget_alert', 'expense_reminder', 'general') NOT NULL,
--     is_read BOOLEAN DEFAULT FALSE,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
-- );

-- desc Notifications;

-- CREATE TABLE PaymentMethods (
--     payment_method_id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     payment_name VARCHAR(100) NOT NULL,
   
--     FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
-- );

-- desc PaymentMethods;

-- CREATE TABLE recurring_expense (
--     recurring_id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT NOT NULL,
--     category_id INT NOT NULL,
--     amount DECIMAL(10,2) NOT NULL,
--     description TEXT,
--     frequency ENUM('daily', 'weekly', 'monthly', 'yearly') NOT NULL,
--     start_date DATE NOT NULL,
--     next_due_date DATE NOT NULL,
--     status ENUM('active', 'paused', 'stopped') DEFAULT 'active',
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
--     FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
-- );


-- desc recurring_expense;

-- CREATE TABLE transaction (
--     transaction_id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT NOT NULL,
--     category_id INT, 
--     amount DECIMAL(10,2) NOT NULL,
--     transaction_type ENUM('income', 'expense', 'transfer') NOT NULL,
--     payment_method_id INT NOT NULL,
--     transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     description TEXT,
--     recurring_id INT DEFAULT NULL,
    
--     FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
--     FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE SET NULL,
--     FOREIGN KEY (payment_method_id) REFERENCES PaymentMethods(payment_method_id) ON DELETE CASCADE,
--     FOREIGN KEY (recurring_id) REFERENCES recurring_expense(recurring_id) ON DELETE SET NULL
-- );

-- desc transaction;

show tables;


