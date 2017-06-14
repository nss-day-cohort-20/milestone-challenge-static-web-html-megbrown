function makeBlogPost (title, copy, date) {
	var blog = {};

	blog.title = title;
	blog.copy = copy;
	blog.date = date;

	return blog;
}

var blog1 = makeBlogPost("My First Blog Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus varius, efficitur ex et, facilisis libero. Sed nec nulla sagittis urna placerat fermentum. Curabitur vitae tortor eu mauris dignissim commodo at eu eros. Proin id iaculis sem. Proin ultricies mollis risus, vitae vulputate purus. Maecenas faucibus justo a libero egestas, sed dictum est molestie. Donec eget molestie leo, consequat lobortis tellus. Curabitur feugiat maximus euismod. Sed faucibus lorem vitae egestas suscipit.", "May 30, 2017");
var blog2 = makeBlogPost("My Second Blog Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus varius, efficitur ex et, facilisis libero. Sed nec nulla sagittis urna placerat fermentum. Curabitur vitae tortor eu mauris dignissim commodo at eu eros. Proin id iaculis sem. Proin ultricies mollis risus, vitae vulputate purus. Maecenas faucibus justo a libero egestas, sed dictum est molestie. Donec eget molestie leo, consequat lobortis tellus. Curabitur feugiat maximus euismod. Sed faucibus lorem vitae egestas suscipit.", "June 12, 2017");

var blogPosts = [blog2, blog1];

for (i = 0; i < blogPosts.length; i++) {
	document.getElementById("blog-posts").innerHTML +=
	`<h3>${blogPosts[i].title}</h3>
	 <p class="date">${blogPosts[i].date}</p>
	 <p>${blogPosts[i].copy}</p>`
}