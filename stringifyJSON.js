/**
{
    "api":1,
    "name":"Stringify JSON",
    "description":"Adds escape characters to JSON",
    "author":"Mason Lapine",
    "icon":"quote",
    "tags":"json,convert,quote",
    "bias": -0.2
}
 **/
function main(state){
    try {
        let inputStr = state.text;
        //move everything to one line
        inputStr = inputStr.replace(/^\s+|\s+$/gm,'');
        inputStr = inputStr.replace(/(\r\n|\n|\r)/gm, "");
        inputStr = inputStr.replace(/\s/g, "")

        // begin stringify for code
        inputStr = inputStr.replaceAll('{"', '{\\"')
        inputStr = inputStr.replaceAll('":', '\\":');
        inputStr = inputStr.replaceAll(',"', ',\\"');
        inputStr = inputStr.replaceAll('",', '\\",');
        inputStr = inputStr.replaceAll(':"', ':\\"');
        inputStr = inputStr.replaceAll('"}', '\\"}');
        inputStr = inputStr.replaceAll('"]', '\\"]');
        inputStr = inputStr.replaceAll('["', '[\\"');
        state.fullText = inputStr;
    }
    catch (error){
        state.fullText = error;
    }
}
