// makeInterface.js

function makeInterface(whichArray)
{
    if (ge('mainDiv'))
    {
        ge('mainDiv').remove();
    }

    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Data_Navigator';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript Data Navigator';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.fontSize = '17px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.textAlign = 'left';
    theTitle.style.lineHeight = 15 + 'px';
    theTitle.style.textDecoration = 'none';
    mainDiv.append(theTitle);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let reportContainer = ce('div');
    reportContainer.style.display = 'flex';
    reportContainer.style.flexDirection = 'row';
    mainDiv.append(reportContainer);

    let reportBtn = ce('button');
    reportBtn.textContent = 'Report';
    reportBtn.className = 'buttonFilterStyle';
    reportBtn.onmouseover = function()
    {
        hoverSound();
    };
    reportBtn.onclick = function()
    {
        clickSound();
        reportTextArea(whichArray);
    };
    mainDiv.append(reportBtn);

    //-//

    let downloadBtn = ce('button');
    downloadBtn.id = 'jsonDownloadButton';
    downloadBtn.className = 'buttonFilterStyle';
    downloadBtn.value = 'download';
    downloadBtn.title = 'downloadFile(whichArray)';
    downloadBtn.textContent = '⎙ Download Records';
    downloadBtn.onmouseover = function()
    {
        hoverSound();
    };
    downloadBtn.onclick = function()
    {
        clickSound();
        downloadFile();
    };
    mainDiv.append(downloadBtn);

    //-//

    let downloadAnchor = ce('a');
    downloadAnchor.id = 'downloadAnchorElem';
    downloadAnchor.style.display = 'none';
    mainDiv.append(downloadAnchor);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let showAllBtn = ce('button');
    showAllBtn.textContent = 'Show All Entries';
    showAllBtn.className = 'buttonFilterStyle';
    showAllBtn.onmouseover = function()
    {
        hoverSound();
    };
    showAllBtn.onclick = function()
    {
        clickSound();
        dataCreate(theDataArray); 
    };
    mainDiv.append(showAllBtn);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let fsButton = ce('button');
    fsButton.textContent = 'fs';
    fsButton.className = 'buttonFilterStyle';
    fsButton.onmouseover = function()
    {
        hoverSound();
    };
    fsButton.onclick = function()
    {
        clickSound();

        newsCreateByCategory(theDataArray, 'fs', 0000, 01, 01, 9999, 01, 01);
    };
    mainDiv.append(fsButton);

    //-//

    let osButton = ce('button');
    osButton.textContent = 'os';
    osButton.className = 'buttonFilterStyle';
    osButton.onmouseover = function()
    {
        hoverSound();
    };
    osButton.onclick = function()
    {
        clickSound();

        newsCreateByCategory(theDataArray, 'os', 0000, 01, 01, 2024, 01, 01);
    };
    mainDiv.append(osButton);

    //-//

    let pathButton = ce('button');
    pathButton.textContent = 'path';
    pathButton.className = 'buttonFilterStyle';
    pathButton.onmouseover = function()
    {
        hoverSound();
    };
    pathButton.onclick = function()
    {
        clickSound();

        newsCreateByCategory(theDataArray, 'path', 0000, 01, 01, 2024, 01, 01);
    };
    mainDiv.append(pathButton);

    //-//

    mainDiv.append(ce('hr'));
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

