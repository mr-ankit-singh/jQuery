/*
#__ jQuery Effects - Animation __#

    -With jQuery, you can create custom animations.

 * The animate() Method

    -The jQuery animate() method is used to create custom animations.

    Syntax:

        $(selector).animate({params},speed,callback);

    -The required params parameter defines the CSS properties to be animated.


 1) jQuery animate() - Manipulate Multiple Properties
    Notice that multiple properties can be animated at the same time:

    Example:
        $("button").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
        }); 

 2) jQuery animate() - Using Relative Values
    It is also possible to define relative values (the value is then relative to the element's current value). This is done by putting += or -= in front of the value:

    Example:
        $("button").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
        }); 

 3) jQuery animate() - Using Pre-defined Values
    You can even specify a property's animation value as "show", "hide", or "toggle":

    Example:
        $("button").click(function(){
        $("div").animate({
            height: 'toggle'
        });
        }); 

 4) jQuery animate() - Uses Queue Functionality
    By default, jQuery comes with queue functionality for animations.
    This means that if you write multiple animate() calls after each other,
    jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE.
    So, if you want to perform different animations after each other, we take advantage of the queue functionality:

    Example:
        $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        }); 

*/