/*
#__ jQuery Selectors __#

    -jQuery selectors are one of the most important parts of the jQuery library.
    -jQuery selectors allow you to select and manipulate HTML element(s).

    -All selectors in jQuery start with the dollar sign and parentheses: $()

  1) The element Selector

    -The jQuery element selector selects elements based on the element name.
    -Syntax : $(element-name).action()
    -Example :
            $(document).ready(function(){
              $("button").click(function(){
                $("p").hide();
              });
            });

  2) The #id Selector

    -The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
    -Syntax : $(#idname).action()
    -Example :
            $(document).ready(function(){
            $("button").click(function(){
                $("#test").hide();
            });
            });

  3) The .class Selector

    -The jQuery .class selector finds elements with a specific class.
    -Syntax : $(.class-name).action()
    -Example :
            $(document).ready(function(){
            $("button").click(function(){
                $(".test").hide();
            });
            });


 * More Examples of jQuery Selectors

    Syntax	                  Description	
    $("*")	                  Selects all elements	
    $(this)	                  Selects the current HTML element	
    $("p.intro")	            Selects all <p> elements with class="intro"	
    $("p:first")	            Selects the first <p> element	
    $("ul li:first")	        Selects the first <li> element of the first <ul>	
    $("ul li:first-child")	  Selects the first <li> element of every <ul>	
    $("[href]")	              Selects all elements with an href attribute	
    $("a[target='_blank']")	  Selects all <a> elements with a target attribute value equal to "_blank"	
    $("a[target!='_blank']")  Selects all <a> elements with a target attribute value NOT equal to "_blank"	
    $(":button")	            Selects all <button> elements and <input> elements of type="button"	
    $("tr:even")	            Selects all even <tr> elements	
    $("tr:odd")	              Selects all odd <tr> elements
    
*/