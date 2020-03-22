# Mock Blog
#### [Working demo](https://dsbarnes.github.io/mock-blog/)

A clean mock blog site.  
Suitable for a personal blog, a new site, an artist portfolio, a travel log, or whatever your creativity dreams up.


## Admin-Panel Extension
An admin panel for this blog, or for modification, can be found [here](https://github.com/dsbarnes/Admin-Panel).


## Installation

Clone this repo and in the project directory run `yarn install`  
Once complete, run `yarn start` and the site should start locally on port `3000`


## Description
The site consistes of a home page with 'featured' articles.  
(See either the state or the /src/articles.json for details)  

Clicking my name (D.S. Barnes) will redirect you to the main page.  

The blog page is a collection of all articles in articles.json  

The about pages is as one would expect, a header, a footer, and a small block of content.  

Clicking an article title will navigate to the individual article.  

Clicking the icon associated with the article will navigate to a list of articles of that category.  
This feature is disabled from the category view as to prevent random and unnecessary refreshes.

The most recently viewed individual article, and most recently viewed category will be stored in local storage
such that the necessary information in state is retained on refresh.  

Error pages exist for if the user attempts to navigate to a url that does not exist within the domain.  


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
