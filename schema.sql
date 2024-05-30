-- Create the database and switch to it
CREATE DATABASE school_app;
USE school_app;

-- Create the students table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    metricNumber VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    course VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert data into the students table
INSERT INTO students (firstName, lastName, dob, metricNumber, department, course)
VALUES
('Liam', 'Wilson', '2000-05-15', 'MN123456', 'Computer Science', 'Software Engineering'),
('Olivia', 'Johnson', '1999-07-22', 'MN234567', 'Mathematics', 'Applied Mathematics'),
('Noah', 'Williams', '2001-03-10', 'MN345678', 'Physics', 'Astrophysics'),
('Emma', 'Brown', '2000-11-05', 'MN456789', 'Biology', 'Microbiology'),
('Ava', 'Jones', '1998-12-20', 'MN567890', 'Chemistry', 'Biochemistry'),
('Sophia', 'Garcia', '2001-01-25', 'MN678901', 'Economics', 'Macroeconomics'),
('James', 'Martinez', '1999-09-15', 'MN789012', 'Accounting', 'Financial Accounting'),
('Mia', 'Hernandez', '2000-02-18', 'MN890123', 'Business Administration', 'Human Resources'),
('Elijah', 'Lopez', '1998-06-30', 'MN901234', 'Marketing', 'Digital Marketing'),
('Isabella', 'Gonzalez', '2001-08-12', 'MN012345', 'Mass Communication', 'Journalism');

-- Create the courses table
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    courseName VARCHAR(255) NOT NULL,
    courseCode VARCHAR(255) NOT NULL,
    lecturer VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(courseCode)
);

-- Insert data into the courses table
INSERT INTO courses (courseName, courseCode, lecturer, department)
VALUES 
('Mathematics', 'MAT101', 'Mr. John Doe', 'Mathematics'),
('Physics', 'PHY101', 'Mr. John Doe', 'Physics'),
('Chemistry', 'CHE101', 'Mr. John Doe', 'Chemistry'),
('Biology', 'BIO101', 'Mr. John Doe', 'Biology'),
('Computer Science', 'CSC101', 'Mr. John Doe', 'Computer Science'),
('Economics', 'ECO101', 'Mr. John Doe', 'Economics'),
('Accounting', 'ACC101', 'Mr. John Doe', 'Accounting'),
('Business Administration', 'BADM101', 'Mr. John Doe', 'Business Administration'),
('Marketing', 'MKT101', 'Mr. John Doe', 'Marketing'),
('Mass Communication', 'MC101', 'Mr. John Doe', 'Mass Communication');

-- Create the departments table
CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    departmentName VARCHAR(255) NOT NULL,
    departmentCode VARCHAR(255) NOT NULL,
    hod VARCHAR(255) NOT NULL,
    faculty VARCHAR(255) NOT NULL,
    fees INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(departmentCode)
);

-- Insert data into the departments table
INSERT INTO departments (departmentName, departmentCode, hod, faculty, fees)
VALUES 
('Mathematics', 'MAT', 'Mr. Mark Doe', 'Science', 50000),
('Physics', 'PHY', 'Mrs. Calos Johnson', 'Science', 50000),
('Chemistry', 'CHE', 'Mr. Derek Sam', 'Science', 50000),
('Biology', 'BIO', 'Mr. Sunday Aloe', 'Science', 50000),
('Computer Science', 'CSC', 'Mrs. Doe Keith', 'Science', 50000),
('Economics', 'ECO', 'Mr. Sundar Ring', 'Social Science', 50000),
('Accounting', 'ACC', 'Mrs. Precious Williams', 'Social Science', 50000),
('Business Administration', 'BADM', 'Mrs. Serena Day', 'Social Science', 50000),
('Marketing', 'MKT', 'Mr. Liam Dan', 'Social Science', 50000),
('Mass Communication', 'MC', 'Mr. Felix Shatire', 'Social Science', 50000);

-- Create the lecturers table
CREATE TABLE lecturers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    department VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert data into the lecturers table
INSERT INTO lecturers (firstName, lastName, dob, department)
VALUES 
('Alice', 'Smith', '1980-01-01', 'Mathematics'),
('Bob', 'Johnson', '1980-01-01', 'Physics'),
('Carol', 'Williams', '1980-01-01', 'Chemistry'),
('David', 'Brown', '1980-01-01', 'Biology'),
('Eva', 'Jones', '1980-01-01', 'Computer Science'),
('Frank', 'Garcia', '1980-01-01', 'Economics'),
('Grace', 'Martinez', '1980-01-01', 'Accounting'),
('Henry', 'Hernandez', '1980-01-01', 'Business Administration'),
('Isabel', 'Lopez', '1980-01-01', 'Marketing'),
('Jack', 'Gonzalez', '1980-01-01', 'Mass Communication');

-- Create the fees table
CREATE TABLE fees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    studentId INT NOT NULL,
    amount INT NOT NULL,
    paid BOOLEAN NOT NULL DEFAULT FALSE,
    amountPaid INT NOT NULL, 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (studentId) REFERENCES students(id)
);

-- Insert data into the fees table
INSERT INTO fees (studentId, amount, paid)
VALUES 
(1, 50000, TRUE, 20000),
(2, 50000, FALSE, 0),
(3, 50000, TRUE, 50000),
(4, 50000, FALSE, 0),
(5, 50000, TRUE, 30000),
(6, 50000, FALSE, 0),
(7, 50000, TRUE, 50000),
(8, 50000, FALSE, 0),
(9, 50000, TRUE, 40000),
(10, 50000, FALSE, 0);
