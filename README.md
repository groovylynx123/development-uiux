# Development

### Link to Deployed Website
https://groovylynx123.github.io/development-uiux/

### Goal and Value of the Application

The goal of the application is to provide a way for people to browse different ice cream/sorbet flavors for a dessert shop. This website allows users to browse different flavors and filter the flavors by the ice cream type (fruit or custard) and by where the ice cream was made (in-house or sourced from a vendor). The website also sorts the flavors by most expensive and least expensive to allow users to choose their flavor based on their budget. 

### Usability Principles Considered

I tried to make the layout have good usability by deciding to have the buttons as radio buttons for the filters instead of checkboxes or regular buttons. Originally, I had the default buttons for the filters but this made it really difficult for the user to know which filter was selected. This helped with memorability because it allows the user to remember which filter and sort were selected.

I also made it so that the filter buttons and sort buttons are on the left side, the content in the middle, and the favorite items on the right side. I did this to have quick learnability.  This helps the user read from left to right and makes the website intuitive to navigate. 

For usability, I decided to go with a simple white background so that the images of the ice cream really pop out. Since there were no distracting background colors, I think this drew the user’s attention toward the ice cream flavors. 


### Organization of Components

My components are the Favorite List and the Ice Cream Item. The Favorite List is the favorite ice cream items that automatically sum up the total price of the ice cream in the list.  The prop gets passed into this function is the cartState which is a list of ice cream items and their prices. The Ice Cream Item has two props. The item which contains all the data regarding the ice cream item and the addToFavorites function which is a function that enables the user to add the ice cream cart to the Favorites list.  

### How Data is Passed Down Through Components

The data from the json file is passed through the Ice Cream item. The attributes such as name, price, image, category, and source are then extracted in the IceCreamItem to create each item and portrayed on the website.  

### How the User Triggers State Changes

There are numerous ways the user triggers state changes. First, the user triggers state changes by clicking on the filter buttons. Based on the filter, the filteredIcecream gets changed and the website that protrays that change by only showing the items that were not filtered. Second, the sort changes the state of the filteredIcecream's order based on the item price. Third, the user can trigger the state of the FavoriteList by clicking the add or remove buttons. The buttons will trigger the AddToFavorites function and this will change the cartState.
