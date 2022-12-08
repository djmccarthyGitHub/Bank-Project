# Bank-Project
A two part project to learn Java Frameworks and NodeJS
<br>

-- First time only for Windows users --
<br>
Search for Windows PowerShell, right click on the application and select "Run as administrator"
Run the following command
>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

<br>

## Starting the Website
Open a terminal (such as Windows PowerShell)
cd to the website folder
run the command
>ng serve -o

<br>

## Starting the App
insert app start instructions here

<br>

### Notes about Angular for Andre/Jacob/Luke
Only a few files are important to know about when starting out
In the main folder:
    styles.css - include any css code that you want to be universial across all pages

In the app folder
    app.component.html - this is the HTML that is loaded. <app-router></app-router> allows us to load our own HTML within this page. However, if you want universial HTML items on every page, use this file.
    app-routing.module.ts
    component folders (login, dashboard, create-account) - you can create your own components from a terminal by running ng component create {name}. Each component will have HTML, CSS, and TS (same as javascript) files.