# scrollyclasser

#### A lightweight scrollytelling library for adding and removing classes
scrollyclasser uses the intersection observer API to add and remove classes from elements when they enter / exit the viewport


## Adding scrollyclasser to your project
Add scrollyclasser.js to the very bottom of your page just before the closing `</body>` tag

__using a CDN:__

```html 
<script src="https://cdn.jsdelivr.net/gh/bmoren/scrollyclasser/scrollyclasser.js"></script>
<!-- This should be just above your closing </body> tag -->
 ```

 ## using scrollyclasser

 ### making an element ovservable
 Add the class `observe` to any element to make it observable by scrollyclasser

 ```html
    <p class="observe"> I'm being watched!</p>
 ```

 You can add additional classes with the space seperator,  no problem...

  ```html
    <p class="observe specialStyles"> I'm being watched!</p>
 ```

 ### Adding classes to the element when it comes into view
Add the data attribute `data-enter-add` followed by any class names you'd like to add when the element comes into view

```html
    <p class="observe specialStyles" data-enter-add="spin fadeIn"> I'm being watched!</p>
    <!-- adds the spin and fadeIn classes when the element comes into view -->
```


 ### Removing classes to the element when it leaves view
Add the data attribute `data-exit-remove` followed by any class names you'd like to remove when the element leaves view


 ```html
    <p class="observe specialStyles" data-enter-add="spin fadeIn"  data-exit-remove="spin fadeIn"> I'm being watched!</p>
    <!-- adds the spin and fadeIn classes when the element comes into view & removes them when it leaves view -->
```
