// Suppose you are building a blog application and you want to display a list of all the blog posts. You have an array of blog post objects, where each object has properties such as title, author, date, and content. Find out if date field is empty on any object

let blogPosts = [
    {
    title : "The Importance of Regular Exercise",
    author :  'John Doe',
    date : '2022-02-28',
    content : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
},
{
    title : 'Tips for Eating Healthy on a Budget',
    author :  'Jane Smith',
    date : '2022-02-15',
    content : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
},
];

// Checking if the date field is empty or undefined in any object
let isEmptyDate = blogPosts.some(post => !post.date);
if (isEmptyDate) {
    console.log('There is at least one blog post with an empty or undefined date field.');
} else {
    console.log('All blog posts have a non-empty date field.');
};
    

