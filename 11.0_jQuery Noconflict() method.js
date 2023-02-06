/*
#__ jQuery - The noConflict() Method __#

 * jQuery and Other JavaScript Frameworks

    As you already know; jQuery uses the $ sign as a shortcut for jQuery.

    There are many other popular JavaScript frameworks like: Angular, Backbone, Ember, Knockout, and more.

    What if other JavaScript frameworks also use the $ sign as a shortcut?

    If two different frameworks are using the same shortcut, one of them might stop working.

    The jQuery team have already thought about this, and implemented the noConflict() method.


 * The jQuery noConflict() Method

    1) The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.

       Example:
            $.noConflict();
            jQuery(document).ready(function(){
            jQuery("button").click(function(){
                jQuery("p").text("jQuery is still working!");
            });
            });

    2) You can also create your own shortcut very easily. The noConflict() method returns a reference to jQuery,
        that you can save in a variable, for later use. 

        Example:
            var jq = $.noConflict();
            jq(document).ready(function(){
            jq("button").click(function(){
                jq("p").text("jQuery is still working!");
            });
            });

    3) If you have a block of jQuery code which uses the $ shortcut and you do not want to change it all,
        you can pass the $ sign in as a parameter to the ready method. This allows you to access jQuery using $, 
        inside this function - outside of it, you will have to use "jQuery":

        Example:
            $.noConflict();
            jQuery(document).ready(function($){
            $("button").click(function(){
                $("p").text("jQuery is still working!");
            });
            });

*/