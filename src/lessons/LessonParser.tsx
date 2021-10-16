import { BREADTH_FIRST_SEARCH_LESSON_TEXT } from './data/BreadthFirstSearch';
import { DEPTH_FIRST_SEARCH_LESSON_TEXT } from './data/DepthFirstSearch';
import { DYNAMMIC_PROGRAMMING_LESSON_TEXT } from './data/DynammicProgramming';
import { HASH_TABLE_LESSON_TEXT } from './data/HashTable';

const PARSE_TEXT = HASH_TABLE_LESSON_TEXT;

interface divEntry {
    content: string;
    type: string;
}

const getDivEntries = (text:string):divEntry[] =>{
    let regexEntries = /(?<=::DIV_ENTRY_START).*?(?=::DIV_ENTRY_END)/g
    let EntriesMatch = text.match(regexEntries);
    if(EntriesMatch !== null)
    {
        return EntriesMatch.map((x:string) => {return parseDivEntries(x)})
    }
    return [];   
}
const parseDivEntries = (divEntryString: string):divEntry => {
    let regexType = /(?<=::DIV_ENTRY_TYPE).*?(?=::DIV_ENTRY_TYPE_END)/
    let regexContent = /(?<=::DIV_ENTRY_CONTENT).*?(?=::DIV_ENTRY_CONTENT_END)/
    let typeMatch  = divEntryString.match(regexType);
    let contentMatch  = divEntryString.match(regexContent);

    let typeOut:string = typeMatch !== null ? typeMatch[0] : "";
    let contentOut:string = contentMatch !== null ? contentMatch[0] : "";
    return {
        type: typeOut,
        content: contentOut,
    }

}

const parseCode = (text: string): string[] =>{
    let regexType = /(?<=::CODE_ENTRY).*?(?=::CODE_END)/
    let codeMatch = text.match(regexType); 

    let codeOut:string = codeMatch !== null ? codeMatch[0] : "";

    return codeOut.split("::END_LINE");
}

const parseTitle  = (text:string): string =>{
    let regexType = /(?<=::TITLE_START).*?(?=::TITLE_END)/
    let codeMatch = text.match(regexType); 
    return codeMatch !== null ? codeMatch[0] : "";
}

const parseId  = (text:string): string =>{
    let regexType = /(?<=::ID_START).*?(?=::ID_END)/
    let codeMatch = text.match(regexType); 
    return codeMatch !== null ? codeMatch[0] : "";
}

const parseDescription  = (text:string): string =>{
    let regexType = /(?<=::DESCRIPTION_START).*?(?=::DESCRIPTION_END)/
    let codeMatch = text.match(regexType); 
    return codeMatch !== null ? codeMatch[0] : "";
}


const parse = (text:string):string => {
    let content = getDivEntries(PARSE_TEXT);
    let code = parseCode(PARSE_TEXT);
    let title = parseTitle(PARSE_TEXT);
    let id = parseId(PARSE_TEXT);
    let description = parseDescription(PARSE_TEXT);

    let out = "{\n";
    out += '  "id": {\n';
    out += `    "S":"${id}"\n`;    
    out += '  },\n';
    out += '  "title": {\n';
    out += `    "S":"${title}"\n`;    
    out += '  },\n';
    out += '  "description": {\n';
    out += `    "S":"${description}"\n`;    
    out += '  },\n';
    out += '  "createdAt": {\n';
    out += `    "S":"${new Date().toISOString()}"\n`;    
    out += '  },\n';
    out += '  "updatedAt": {\n';
    out += `    "S":"${new Date().toISOString()}"\n`;    
    out += '  },\n';

    out += '  "content" : {\n';
    out += '    "L": [\n';

    for(let i=0; i<content.length; i++)
    {
        out += '      {\n';
        out += '        "M": {\n'
        out += '          "type": {\n';
        out += `            "S": "${content[i].type}"\n`;
        out += '          },\n';    
        out += '          "content": {\n';
        out += `            "S": "${content[i].content}"\n`;
        out += '          }\n';    
        out += '        }\n';
        out += '      }';
        if(i!==content.length - 1)
        {
            out += ',';
        }    
        out += '\n';
    }    
    out+=  '    ]\n'
    out += '  },\n'
    out += '  "code" : {\n';
    out += '    "L": [\n';

    for(let i=0; i<code.length; i++)
    {
        out += '      {\n';
        out += `        "S":"${code[i]}"\n`;
        out += '      }';    
        if(i!==code.length - 1)
        {
            out += ',';
        }    
        out += '\n';
    }    
    out+= '    ]\n'
    out+='  }\n';
    out+='}\n'
    return out;
}


console.log(parse(PARSE_TEXT))

export const LessonParser = () => {
    return <div></div>
}