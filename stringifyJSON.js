/**
{
    "api":1,
    "name":"Stringify JSON",
    "description":"Adds quotes and removes escape characters to make a single String of JSON.",
    "author":"Mason Lapine",
    "icon":"quote",
    "tags":"json,convert,quote",
    "bias": -0.2
}
 **/
function main(state){
    try {
        let inputStr = state.text;
        inputStr = '"' + inputStr;
        //move everything to one line
        inputStr = inputStr.replace(/^\s+|\s+$/gm,'');
        inputStr = inputStr.replace(/(\r\n|\n|\r)/gm, "");
        // Keeps spaces only in quotes, removes other spaces.
        inputStr = inputStr.replace(/[ ]+(?=[^"]*(?:"[^"]*"[^"]*)*$)/g, "");

        // begin stringify for JSON
        inputStr = inputStr.replaceAll('{"', '{\\"')
        inputStr = inputStr.replaceAll('":', '\\":');
        inputStr = inputStr.replaceAll(',"', ',\\"');
        inputStr = inputStr.replaceAll('",', '\\",');
        inputStr = inputStr.replaceAll(':"', ':\\"');
        inputStr = inputStr.replaceAll('"}', '\\"}');
        inputStr = inputStr.replaceAll('"]', '\\"]');
        inputStr = inputStr.replaceAll('["', '[\\"');
        state.fullText = inputStr + '"';
    }
    catch (error){
        state.fullText = error;
    }
}