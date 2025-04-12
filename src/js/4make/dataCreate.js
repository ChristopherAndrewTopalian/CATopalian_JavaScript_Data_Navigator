// dataCreate.js

function dataCreate(whichArray)
{
    eraseDivs();

    let mainDiv = ce("div");
    mainDiv.className = "mainDivClass";
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let containerDiv = ce("div");
        mainDiv.append(containerDiv);

        //-//

        let theButton = ce("button");
        theButton.className = "buttonStyle";
        theButton.onmouseover = function()
        {
            hoverSound();
        };
        theButton.onclick = function()
        {
            clickSound();

            window.open(whichArray[x].url, "", "width = 1000, height = 800");
        };
        theButton.innerHTML = whichArray[x].name;
        containerDiv.append(theButton);

        //-//

        let theDescription = document.createElement("div");
        theDescription.className = "descriptionStyle";
        containerDiv.append(theDescription);

        //-//

        let descText = document.createTextNode(whichArray[x].description);
        theDescription.append(descText);

        //-//

        let lineBreak = document.createElement("br");
        theDescription.append(lineBreak);

        //-//

        let sourceLink = document.createElement("a");
        sourceLink.target = "_blank";
        sourceLink.href = whichArray[x].urlSource;
        sourceLink.textContent = whichArray[x].urlSource;
        theDescription.append(sourceLink);

        //-//

        let hr = document.createElement("hr");
        theDescription.append(hr);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

