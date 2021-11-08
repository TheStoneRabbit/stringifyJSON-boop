# stringifyJSON-boop

This is a script meant to be used with [Boop](https://github.com/IvanMathy/Boop) on macOS.

This script converts JSON into a single line string that can be inserted into code.

So this:

```JSON
{
    "api":1,
    "name":"Stringify JSON",
    "description":"Adds quotes and removes escape characters to make a single String of JSON.",
    "author":"Mason Lapine",
    "icon":"quote",
    "tags":"json,convert,quote",
    "bias": -0.2
}
```


Turns into this:


```JAVA
"{\"api\":1,\"name\":\"Stringify JSON\",\"description\":\"Adds quotes and removes escape characters to make a single String of JSON.\",\"author\":\"Mason Lapine\",\"icon\":\"quote\",\"tags\":\"json,convert,quote\",\"bias\":-0.2}"
```

