//Beatlesquote

const generateRandom = (numQuotes) =>{

return Math.floor(Math.random()*numQuotes);

}

const messagesDisplay =  ['Turn Off your Mind, Relax and float upstream',
                         'Yes, You are going to be a Star',
                        'Take a sad song and make it better',
                        'Get Back to where you once belonged'];


const GenerateMessage = () =>{
    const random = generateRandom(messagesDisplay.length);
    console.log( messagesDisplay[random]);
}

GenerateMessage();
