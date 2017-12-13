/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!



// select <li class="article-item featured">
article2 = $("li.article-item.featured");

// select next sibling by using the .next() jQuery method
article3 = article2.next();

// remove class "featured" from article2
article2.toggleClass("featured");

// and add it to article3
article3.toggleClass("featured");