// newsCreateByCategory.js

function newsCreateByCategory(whichArray, category, yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd)
{
    eraseDivs();

    sortByDate(whichArray, "up");

    sortByName(whichArray, "up");

    //sort by category and name
    // sortByName(whichArray, "up");

    //sort by category and name
    //sortByCategoryAndName(whichArray, "up");

    let mainDiv = ce("div");
    mainDiv.className = "mainDivClass";
    ba(mainDiv);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == category)
        {
            let theButton = ce("button");
            theButton.className = "buttonStyle";
            theButton.onmouseover = function()
            {
                hoverSound();
            }
            theButton.onclick = function()
            {
                clickSound();

                window.open(whichArray[x].url, "", "width = 1000, height = 800");
            };
            theButton.textContent = whichArray[x].name;
            mainDiv.append(theButton);

            //-//

            let theDescription = document.createElement("div");
            theDescription.className = "descriptionStyle";
            mainDiv.append(theDescription);

            //-//

            // Description text
            let descriptionText = document.createTextNode(whichArray[x].description);
            theDescription.append(descriptionText);

            // Line break
            theDescription.append(document.createElement("br"));

            // Link
            let sourceLink = document.createElement("a");
            sourceLink.href = whichArray[x].urlSource;
            sourceLink.target = "_blank";
            sourceLink.textContent = whichArray[x].urlSource;
            theDescription.append(sourceLink);

            // Horizontal rule
            let hr = document.createElement("hr");
            theDescription.append(hr);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

