/*
  ** Window/Document Events

    -Events that can be applied on our browser window or any particular element or document

  * Syntax :
       $(window).eventName

    There are some window events:-
        -resize()
        -scroll()
        -load()
        -unload()
        -ready()


  1) The resize() Method

    -The resize event occur when the browser window change size.
    -An event handler function is attached to an window element by the resize() method and that function is executed 
      whenever the size of browser window changes.

    Syntax:

        $(selector).resize()

  2) The scroll() Method

    -Scroll event occur when the user scrolls in the specific element
    -The scroll event of jQuery occurs when the user scrolls in the specified element and then the scroll() method triggers 
     the scroll event, or attaches a function to run.

    Syntax:

        $(selector).scroll()

  3) The ready() Method / load() method

    -JQuery ready() method is used to specify when a ready event occur. Ready even occurs after the document is ready.

    Syntax:

        $(document).ready(function)


*/