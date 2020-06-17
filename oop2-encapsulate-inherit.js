/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 
*/
    //your code here...

    class Book {
        #author;
        #publisher;

        constructor(authorm, publusher){
            this.#author = author;
            this.#publisher = publisher;
        }

        getAuthor(){
            return this.#author;
        }

        getPublisher(){
            return this.#publisher;
        }

        setAuthor(author){
            this.#author = author;
        }

        setPublisher(publisher){
            this.#publisher = publisher;
        }
    }

    class Author {
        #name;
        #books;

        constructor(name, books){
            this.#name = name;
            this.#books = books;
        }

        getName(){
            return this.#name;
        }

        getBooks(){
            return this.#books;
        }

        setName(name){
            this.#name = name;
        }

        setBooks(books){
            this.#books = books;
        }
    }

    class Publisher {
        #authors;
        #books;

        constructor(authors, books){
            this.#authors = authors;
            this.#books = books;
        }

        getAuthors(){
            return this.#authors;
        }

        getBooks(){
            return this.#books;
        }

        setAuthors(authors){
            this.#authors = authors;
        }

        setBooks(books){
            this.#books = books;
        }
    }

    class Review {
        #rating;
        #user;

        constructor(rating, user){
            this.#rating = rating;
            this.#user = user;
        }

        getRating(){
            return this.#rating;
        }

        getUser(){
            return this.#user;
        }

        setRating(rating){
            this.#rating = rating;
        }

        setUser(user){
            this.#user = user;
        }
    }






/* 2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.
*/


    //your code here...

    class Umbrella {
        #orgName;
        #yearFormed = 1999;
        #listOfCompanies = ['TEKsystems', 'Aerotek', 'TEK Global'];
        #updatedList;

        constructor(orgName){
            this.#orgName = orgName;
        }

        acquireCompany(compName){
            if(this.#listOfCompanies.includes(compName)){
                console.log(`${compName} is already in the Allegis Group, and cannot be acquired.`);
            } else {
                this.#listOfCompanies.push(compName);
            }
            return this.#this.#listOfCompanies;
        }

        consolidateCompany(compName){
            if(this.#listOfCompanies.includes(compName)){
                this.#updatedList = this.#listOfCompanies.filter(function(company) {return company !== compName});
            } else{
                console.log(`${compName} is not in the Alegis group, and cannot be consolidated.`);
            }
            return this.#updatedList;
        }
    }

    class Company extends Umbrella {
        #compName;
        #employeeCount;
        #compMotto;
        #yearFounded;

        constructor(compName, employeeCount, compMotto, yearFounded){
            super();
            this.#compName = compName;
            this.#compMotto = compMotto;
            this.#yearFounded = yearFounded;
        }

        mottoChange(newMotto){
            return this.#compMotto = newMotto;
        }

        tellNews(){
            console.log(`${this.#compName} is catering lunch for all ${this.#employeeCount} employees in the company tomorrow!`);
        }
    }

    class Site extends Company {
        #location;
        #compName;
        #inBusiness = true;
        #hasRemote = true;

        constructor(compName, location){
            super(comnpName);
            this.#compName = compName;
            this.#loaction = location;
        }

        hasParty(partyName){
            console.log(`${this.#compName} is having a ${partyName} party at the ${this.#location} branch!`)
        }

        downsizing(){
            console.log(`${this.#compName} is closing the ${this.#location} branch.`);
            this.#inBusiness = false;
        }

        businessStatus(){
            return this.#inBusiness;
        }
    }

    class Employee extends Site {
        #employeeName;
        #jobTitle;
        #salary;
        #gender;
        static demerits = [];

        constructor(compName, location, employeeName, jobTitle, salary, gender){
            super(compName, location);
            this.#employeeName = employeeName;
            this.#jobTitle = jobTitle;
            this.#salary = salary;
            this.#gender = gender;
        }

        approveRaise(raiseAmt){
            this.#salary += raiseAmt;
        }

        checkSalary(){
            return this.#salary;
        }

        writeUp(issue){
            Employee.demerits.push(issue);
            console.log(`${this.#employeeName} has been given a demerit for ${issue}.`);
        }

        checkDemerits(){
            return Employee.demerits;
        }
    }

    const allegis = new Umbrella ('Allegis');

    const tekSystems = new Company ('TEKsystems', 1500, 'Code all day!', 1999);
    const aerotek = new Company ('Aerotek', 2400, 'We code in space!', 1983);
    const tekGlobal = new Company ('TEK Global', 35000, 'We do it all!', 1987);

    const tekIrving = new Site ('TEKsystems', 'Irving, TX');
    const tekJuno = new Site ('TEKsystems', 'Juno, AK');
    const tekSherman = new Site ('TEKsystems', 'Sherman, TX');

    const aeroPlano = new Site ('Aerotek', 'Plano, TX');
    const aeroSanFran = new Site ('Aerotek', 'San Fransisco, CA');
    const aeroMiami = new Site ('Aerotek', 'Miami, FL');

    const globalHouston = new Site ('TEK Global', 'Houston, TX');
    const glonbalLondon = new Site ('TEK Global', 'London, England');
    const globalIceland = new Site ('TEK Global', 'Iceland');

    const managerMichael = new Employee ('TEKsystems', 'Irving, TX', 'Michael', 'Regional Manager', 120000, 'Male');
    const asstManagerDwight = new Employee ('TEKsystems', 'Irving, TX', 'Dwight', 'Assistant to the Regional Manager', 100000, 'Male');
    const custServiceKelly = new Employee ('TEKsystems', 'Sherman, TX', 'Kelly', 'Customer Service', 80000, 'Female');
    const hrToby = new Employee ('Aerotek', 'Plano, TX', 'Toby', 'Human Resources', 90000, 'Male');
    const salesJim = new Employee ('Aerotek', 'Miami, FL', 'Jim', 'Sales', 85000, 'Male');
    const accAngela = new Employee ('Aerotek', 'San Fransisco, CA', 'Angela', 'Accountant', 95000, 'Female');
    const lawyerKyle = new Employee ('TEKGlobal', 'Houston, TX', 'Kyle', 'Lawyer', 110000, 'Male');
    const daWalter = new Employee ('TEK Global', 'London, England', 'Walter', 'Data Analysis', 105000, 'Male');
    const tempRyan = new Employee ('TEK Global', 'Iceland', 'Ryan', 'Temp Employee', 55000, 'Male');





/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...