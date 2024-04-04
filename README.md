# scrollyclasser

#### A lightweight scrollytelling library for adding and removing classes
scrollyclasser uses the intersection observer API to add and remove classes from elements when they enter / exit the viewport

See a Demo project on 🎏 Glitch.com: 
https://glitch.com/edit/#!/intersection-observer-starter-kit

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

 ### Adding classes to an element when it comes into view
Add the data attribute `data-enter-add` followed by any class names you'd like to add when the element comes into view

```html
    <p class="observe specialStyles" data-enter-add="spin fadeIn"> I'm being watched!</p>
    <!-- adds the spin and fadeIn classes when the element comes into view -->
```


 ### Removing classes from an element when it leaves view
Add the data attribute `data-exit-remove` followed by any class names you'd like to remove when the element leaves view. Optionally, you can choose to not specify this data attribute if you do not want to remove the classes.

 ```html
    <p class="observe specialStyles" data-enter-add="spin fadeIn"  data-exit-remove="spin fadeIn"> I'm being watched!</p>
    <!-- adds the spin and fadeIn classes when the element comes into view & removes them when it leaves view -->
```
## Targeting other elements on the page!
You can also have classes added / removed from a target element when an observable element enters the page. This opens new opportunites for dynamics and expression!

 ### Adding classes to a target to an element when it comes into view
Add the data attribute `data-enter-target` to choose a target class of an element on the page you'd like to target
Add the data attribute `data-target-add` to choose a class you'd like to add to the element that was targeted
or
Add the data attribute `data-target-remove` to choose a class you'd like to remove to the element that was targeted


```html
   <p class="observe specialStyles" data-enter-target="snow"  data-target-add="spin" > I'm being watched!</p>

   <div class="snow"> </div>
```