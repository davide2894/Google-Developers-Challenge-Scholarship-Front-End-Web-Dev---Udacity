/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variables!
var articleList, h1, kids, parents;

articleList = $('.article-list');

// Select div.article-list sibling <h1>
h1 = $(".article-list").siblings("h1");

// Select div.article-list children elements
kids = $(".article-list").children();

// Select div.article-list parent <div>s
parents = $(".article-list").parents();

console.log(h1, kids, parents);