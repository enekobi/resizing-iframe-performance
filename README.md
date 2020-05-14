# Resizing Iframe Performance

As we use iframe's to inject our apps into another sites. This project is aimed to compare 3rd and 1st party `<iframe>` performance. 

 - The **3rd party** `<iframe>` is the one started in a more traditional way, setting up its *src* attribute.
    ```HTML
    <iframe src="remotefile.html"/>
    ```
 - The **1st party** one is started in a more *crafty* way. After it's attached to the site's DOM, using JavaScript, we access it from the site and append files related to our apps (usually the bundle.js and the stylesheet).
    ```JavaScript
    const script = document.createElement("script");
    script.src = "https://simple-msg.netlify.app/inject.js";
    script.async = true;
    
    iframe.current.contentWindow.document.head.appendChild(script); 
    ```

For this project, the main performance behaviour we wanted to test is how the iframe's content adapts to the iframe's resizing. And as we can see there is a clear difference, between the both, 3rd and 1st party. You can resize them yourself and check it on your own by clicking the button. 

![resizing]('./public/resizing.gif')

This "flickering" happens on the bottom and right side when you change the height or the width, respectively. 

## Watch out for LocalStorage + Cookies

At first, it seems that is much better to start our `<iframe>` the *crafty* way, but there is another major difference. Imagine we're on `www.somefancyshop.com`:

- Setting the *src* attribute, we are also setting its domain. Thus the `<iframe src='mycompany.com/index.html' />` will have `mycompany.com` as a domain, and its local-storage and cookies will be related to `mycompany.com`, which is completely separeted from `somefancyshop.com`. That's because we name it as a **3r party** one.
  
- Starting it the *crafty* way, we're creating its content form `somfancyshop.com` so the `<iframe>` would be **in the same domain, so it will be in the 1st party**. So the local-storage + cookies handled from the app inside the `<iframe>` will be the same as the main site, and **both will share information with other**.


  