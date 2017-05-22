# SBLM

# Home
The home page uses a jquery based slideshow, DOM manipulation, and every page is mobile responsive.
Upon refresh the home page will shuffle an image with a link to the work page where clicked on studio is highlighted.
For example, clicking on the civic link in the home page, will highlight the civic projects in the work page, and so forth.
The photos chosen are in black and white to intice the user to continously click through the page until getting to a final project folder and ultimately see full color images with the according narrative. 
The only color in the page are the studios which guide the user to click on the divs that will direct them further onto the site. 
If the highlighted divs aren't an indicator the nav bar is, which will direct users to the work and contact page.

# Work
The work page contains selected projects by the SBLM curated by the principles. As of right now there are 20 projects with many more to come as proposals get completed. 
The work page is heavy on jquery and DOM manipulation as there is a shuffle function implemented where upon refresh the order of the projects is being changed. 
There is a filter bar where users can filter through each of the five studios and upon doing so the projects associated with the studio will be colorized. 
Hovering over a project will reveal it's title, and clicking on one will lead you to the project page where the user can learn more about the selected proposal and see site photography.

# Projects
The user will see a slideshow which consists of full bleed images. The curated slideshow images will consist of select aspect of the site and reflect a detail of the project.
Users can browse through the images via hovering over a certain section, hovering over the title or the bottom of the image will show an icon and upon click, the user will be scrolled to a site map with a + icon.
Upon clicking the + icon, the projet details will be revealed and the + will be replaced with a - which click on will remove the project details and show the site map.
Below the site map is a detailed flow of the project history, complete with a combination of photos and corresponding narrative.

# Contact
The contact page is simply a list of the offices with corresponding addresses and phone numbers. There is also the option to email SBLM for inquiries and employment opportunities.


# Future edits
### Home Page
For the home page, this is how to add more photos and other edits. 
![Editing the Slideshow](/Readme/indexScreenshot.jpg)
This is the start of the slideshow. Lines 39-43 is the format for one image. There are multiple classes and id's. Line 39 is the start of the div, which wraps the whole code. Line 40 is basically the start of the image, lines 40-43 is the image and caption. Line 40, < div class = "slide current" >, every dive will have the class slide. The class current, basically means thats this is the first image that will be displayed. Then line 41 is the root file for the image. The last part , line 42, the href tag goes hand in hand with the h2 tag(civic). The a tag is the link that will lead you to the work page with the civic projects highlighted and pushed to the top. This applies to the other links as well. Line 47 is work/eduwork.html with the h2 tag as education, which means when clicked on the education link it will direct you to the work page with the education projects highlighted. 

### Nav Bar
This is the nav bar section, which is pretty straight forward.
![Nav bar](/Readme/navscreenshot.jpg)
It's basically a stylized list. The classes are sblm, and link. With the href linking to the corresponding pages. Clicking on the sblm logo on the home page is basically another way to refresh. The icon class with the burger class will be displayed only when the page is mobile responsive. Lines 27-32 are the links for when the page is mobile responsive. They become a different format and arent displayed unless the site is at a certain dimension and or viewed on a device.






