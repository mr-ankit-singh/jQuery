/*
#__ jQuery Traversing __#

 * What is Traversing?

    -jQuery traversing, which means "move through", are used to "find" (or select) HTML elements 
      based on their relation to other elements

 * Traversing the DOM

    -jQuery provides a variety of methods that allow us to traverse the DOM.
    -The largest category of traversal methods are tree-traversal.

    NOTE:
    An ancestor is a parent, grandparent, great-grandparent, and so on.
    A descendant is a child, grandchild, great-grandchild, and so on.
    Siblings share the same parent.


 1) jQuery Traversing - Ancestors

    With jQuery you can traverse up the DOM tree to find ancestors of an element.

    An ancestor is a parent, grandparent, great-grandparent, and so on.

 * Traversing Up the DOM Tree

    Three useful jQuery methods for traversing up the DOM tree are:

    -parent()
    -parents()
    -parentsUntil()

   a) jQuery parent() Method

      -The parent() method returns the direct parent element of the selected element.
      -This method only traverse a single level up the DOM tree.

   b) jQuery parents() Method

      -The parents() method returns all ancestor elements of the selected element, all the way up
        to the document's root element (<html>).

   c) jQuery parentsUntil() Method

      -The parentsUntil() method returns all ancestor elements between two given arguments.



 2) jQuery Traversing - Descendants

   With jQuery you can traverse down the DOM tree to find descendants of an element.

   A descendant is a child, grandchild, great-grandchild, and so on.

 * Traversing Down the DOM Tree

    Two useful jQuery methods for traversing down the DOM tree are:

     -children()
     -find()

   a) jQuery children() Method

   -The children() method returns all direct children of the selected element.
   -This method only traverses a single level down the DOM tree.


   b) jQuery find() Method

   -The find() method returns descendant elements of the selected element, all the way down to the last descendant.


 3) jQuery Traversing - Siblings

   With jQuery you can traverse sideways in the DOM tree to find siblings of an element.

   Siblings share the same parent. 

 * Traversing Sideways in The DOM Tree
   
    There are many useful jQuery methods for traversing sideways in the DOM tree:

     -siblings()
     -next()
     -nextAll()
     -nextUntil()
     -prev()
     -prevAll()
     -prevUntil()

   a) jQuery siblings() Method

     -The siblings() method returns all sibling elements of the selected element.

   b) jQuery next() Method

     -The next() method returns the next sibling element of the selected element.

   c) jQuery nextAll() Method

     -The nextAll() method returns all next sibling elements of the selected element.

   d) jQuery nextUntil() Method

     -The nextUntil() method returns all next sibling elements between two given arguments.

   e) jQuery prev(), prevAll() & prevUntil() Methods

     -The prev(), prevAll() and prevUntil() methods work just like the methods above but with reverse functionality: 
      they return previous sibling elements (traverse backwards along sibling elements in the DOM tree, instead of forward).



 4) jQuery Traversing - Filtering

   The first(), last(), eq(), filter() and not() Methods

      -The most basic filtering methods are first(),last()and eq(),which allow you to select a specific 
       element based on its position in a group of elements.
      -Other filtering methods, like filter() and not() allow you to select elements that match, or do not match, 
        a certain criteria.


   a) jQuery first() Method

     -The first() method returns the first element of the specified elements.


   b) jQuery last() Method

     -The last() method returns the last element of the specified elements.


   c) jQuery eq() method

     -The eq() method returns an element with a specific index number of the selected elements.


   d) jQuery filter() Method

      -The filter() method lets you specify a criteria. Elements that do not match the criteria are removed 
        from the selection, and those that match will be returned.

   
   e) jQuery not() Method

     -The not() method returns all elements that do not match the criteria.

      Tip: The not() method is the opposite of filter()


*/