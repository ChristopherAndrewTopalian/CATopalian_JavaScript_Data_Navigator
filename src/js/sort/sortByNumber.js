// sortByNumber.js

function sortByNumber(whichArray, direction)
{
    //ASCENDING
    if (direction == "up")
    {
        whichArray.sort(function(a, b)
        {
            return a.number.localeCompare(b.number);
        });
    }
    //DESCENDING
    else if (direction == "down")
    {
        whichArray.sort(function(b, a)
        {
            return a.number.localeCompare(b.number);
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

