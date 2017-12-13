/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

/*
    My code starts here
    
    From the HTML file: 
    
    <ul class="nav-list">
        <li class="nav-item"><a>Item #1</a></li>
        <li class="nav-item active"><a href="#2">Item #2</a></li>
        <li class="nav-item"><a href="#3">Item #3</a></li>
        <li class="nav-item"><a href="#4">Item #4</a></li>
        <li class="nav-item"><a href="#5">Item #5</a></li>
        <li class="nav-item"><a href="#6">Item #6</a></li>
    </ul>
*/

// select anchor element nested in the first <li> of <ul class="nav-list">
navList = $("ul.nav-list > li > a").first().attr("href", "#1");



