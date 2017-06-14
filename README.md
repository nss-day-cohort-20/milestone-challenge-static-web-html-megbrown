# milestone-challenge-static-web-html-megbrown


# The Static Web: HTML + CSS Milestone Challenge
### Create a page for your personal branding that will showcase your work and be used as part of your graduation self-marketing.

All of your work should be on a branch, NOT on master. To do this, type:

```bash
git checkout -b challenge
touch index.html
mkdir css && touch css/styles.css
mkdir images
```
You are now ready to work in the `challenge` branch.

If you would like to have your work reviewed, push up the branch (`git push origin challenge`), submit a pull request on Github, and Slack the instruction team with a request for review (be sure to include a link to your repo). A member of the instruction team will take a look and give feedback. Your work does not need to be complete to receive feedback.

## Instructions

Create a page for your own personal branding that can be treated as the beginning of your portfolio. You should focus on HTML structure and syntax with basic layout using styles.

### Content and Technical Requirements
1. Title - make it meaningful.
1. Header element `<h1>` - This is the main headline; include your name and what this page is.
1. Photo
1. Section element containing your bio
1. Section element with links to resources or sites you like
1. Section element with two sections for future projects (placeholders)
1. Section area containing your blog posts. Each of these should use
```article```
element.
1. Footer element with email and professional social media links; Github, twitter, LinkedIn, etc.
1. Semantic mark-up for all major elements.
1. Validate your html page with W3 validator: https://validator.w3.org/
1. Appropriate folder structure: images, css.
1. Color scheme - choose primary, secondary, and tertiary colors in addition to black and white. Use these colors consistently in your stylesheet.
1. The page will have a linked JavaScript file for the blog posts section. Create an array to hold your posts (at least 2 posts). Each item in the array must be an object that contains at a minimum the following information: Title, Copy, Date. Use JavaScript to add each post to the DOM.


## Notes
* Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
* Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines the content.

* Page Titles and Headings: http://meetcontent.com/blog/introducing-content-page-titles-headings/
* Explore and create color combinations: https://color.adobe.com
* Material Color: https://material.io/guidelines/style/color.html#color-color-system
    - Material color tool - https://material.io/color/#!/?view.left=0&view.right=0
```
validator.w3.org
The W3C Markup Validation Service
W3C's easy-to-use markup validation service, based on SGML and XML parsers.
 meetcontent.com
Introducing Your Content: Page Titles and Headings | Meet Content
There’s a lot riding on page titles and headers to inform and guide web users. These guidelines ensure your words are meaningful, relevant, and clear.
Adobe Kuler
Color wheel | Color schemes
Create color schemes with the color wheel or browse thousands of color combinations from the Kuler community.

 Material design guidelines
Color - Style - Material design guidelines (63kB)
 material.io
Color Tool - Material Design
An interactive tool to create, share, and apply color palettes to your UI, as well as measure the accessibility level of any color combination. (24kB)
