   var participant_id = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Before we begin",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
          {
          
                elements: [
                    {
                        type: "html",
                        html: `<div style="text-align: center</div>`,
                    },
                    {
                        type: "text",
                        title: "Please enter the same 6-character participant ID as used in the previous study, to ensure that results can be matched between both studies. [TYPE OUT ID CODE RULES BELOW]",
                        name: "ID",
                        isRequired: true,
                        inputType: "text",
                        placeholder: "e.g., xxxxxx"
                    },
                ],
              }
            ]
          }
        }
    
    
    const fiction_instructions = {
      type: jsPsychSurvey,
      data: {screen: "fiction_instructions"},
      on_finish: function () {
        fiction_trialnumber = 1
      }
    ,
        survey_json: {
        showQuestionNumbers: false,
        completeText: "Start the experiment",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Instructions",
                        html: `
<h1>Instructions</h1>
<div style="flex: 2; text-align: left;">
        <p>Thank you for participating in our follow-up study.</p>
        <p>In the previous study, some images were intentionally mislabelled (i.e., we stated that an artwork was AI-generated or a human forgery when, in reality, all artworks were originals). As a reminder, artworks were labelled according to the following categories:</p>
        <ul>
            <li><b style="color: #068f06">Original:</b> Images of original paintings taken from public artwork databases.</li>
            <li><b style="color: rgb(32, 14, 136)">AI-generated:</b> Realistic painting images generated using platforms like <i>Midjourney</i> and <i>Stable Diffusion</i>, either in a new style or inspired by existing artists or artworks.</li>
            <li><b style="color: #880E4F">Human forgery:</b> Copies of famous paintings or works mimicking a style, often by anonymous forgers, intended to be sold as originals.</li>
        </ul>
        <p>In this follow-up study, we are looking to understand your recollection of the presentation of each artwork from the first phase of the previous study. We will briefly present each artwork once again, followed by four questions:</p>
        <ul>
            <li><b style="color: #068f06">Unfamiliar or Familiar?</b> To what extent do you recall seeing the image in the previous study?</li>    
            <li><b style="color: rgb(32, 14, 136)">AI-generated or Human-created?</b> Do you think the image corresponds to a real painting (painted by a Human) or is AI-generated. <b>Drag the slider according to where you best remember placing the slider in the previous study.</b></li>
            <li><b style="color: #880E4F">Original or Copy?</b> Do you think the artwork is an 'original' (an original Human creation, or AI-generated with prompts <i>"to be original"</i> and <i>"make something new"</i>) or a copy (a Human forgery, or AI-generated with the prompt to mimic a certain style, artist or artwork). <b>Drag the slider according to where you best remember placing the slider in the previous study.</b></li>
            <li><b style="color: #FFA500">Artwork category</b> Which category (Original/AI-generated/Human forgery) was the artwork said to have belonged to in the first phase of the previous study?
        </ul>
`,
                    },
                ],
            },
        ],
    },
}



var debriefing = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Continue",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Debrief",
                        html: `
<img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>
<h3>Debriefing</h3>
<p align='left'>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>To complete your participation in this study, click on 'Continue' and <b style="color: red">wait until your responses have been successfully saved</b> before closing the tab.</p> 
                            `,
                    },
                ],
            },
        ],
    },
}


 var endscreen = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Continue",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "Debrief",
                        html: `
<h2 style='color:green;'>Data saved successfully!</h2>
<p>Thank you for your participation. You may now close the tab.</p>
                            `,
                    },
                ],
            },
        ],
    },
}