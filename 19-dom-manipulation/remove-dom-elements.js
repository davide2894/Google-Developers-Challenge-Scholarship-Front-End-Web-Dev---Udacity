/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

/*
    My code starts here +
    
    Remove the <ul> inside the <li> below
    
    <li class="article-item">
        ...
        <ul>
            <li class="bold">James</li>
            <li>Lily</li>
            <li>Harry</li>
        </ul>
        ...
    </li>
*/

var targetArticle;

// select all articles with class "article-item"
// reduce selection to the first <li>
// and remove the nested <ul>
articleItems = $("ul.article-list > li.article-item > ul").first().remove("ul");




