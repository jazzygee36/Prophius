# Overview

This project is a React-based web application created as part of an assessment. It features a login page for authentication and a transaction dashboard for managing user transactions. The project demonstrates the use of modern tools and practices, focusing on security, scalability, and user experience.

# Features

# General

# Frameworks and Tools:

     React (with Vite) for fast development and performance.
     Tailwind CSS for scalable and responsive UI design.

# Login Page

    Users log in with an email and password.
    On successful login, the application generates a token stored in localStorage.
    Implements form validation with error messages for invalid inputs.
    Redirects authenticated users to the transaction dashboard.

# Transaction Dashboard

    Protected Route: Accessible only to authenticated users with a valid token in localStorage.

    User Balance: Hidden by default for security purposes.
    Can be toggled to display the balance by clicking "Show Balance."

# Transaction Details:

    Displays the total number of transactions.
    Allows users to filter transactions by status: Pending, Success, Failed, or All.

# Table Pagination:

Breaks the transaction list into manageable pages.
Users can navigate between pages for better readability.

# How to run the code:

after cloning and installing node_modules,
do: npm run dev, it will get started
