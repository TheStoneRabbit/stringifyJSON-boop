/**
{
    "api":1,
    "name":"jsonify String",
    "description":"Turns a parsable string into pretty JSON",
    "author":"Mason Lapine",
    "icon":"quote",
    "tags":"json,convert,quote",
    "bias": -0.2
}
 **/
function main(state){
    try {
        let inputStr = state.text;
        if(inputStr[0] == "{"){
            inputStr = '"' + inputStr + '"';
        }
        inputStr = JSON.parse(inputStr);
        eval("va = " + inputStr)
        state.text = JSON.stringify(va, null, "\t");
    }
    catch (error){
        state.fullText = error;
    }
}