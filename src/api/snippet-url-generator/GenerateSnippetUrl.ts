import { ISnippetRequestInformation } from "./IGenerateSnippetUrl";

export const generateSnippetRequestUrl = (snippetRequestInformation: ISnippetRequestInformation): any => {
    const { requestUrlInput, urlVersionInput, snippetLanguage } = snippetRequestInformation;

    const method = 'post';
    let url = 'https://graphexplorerapi.azurewebsites.net/api/graphexplorersnippets';
    const headers = {
        'Content-Type': 'application/http'
    };
    const data = `GET /${urlVersionInput}/${requestUrlInput} HTTP/1.1\r\nHost: graph.microsoft.com\r\nContent-Type: application/json\r\n\r\n}`;

    if (snippetLanguage !== 'csharp') {
        url += `?lang=${snippetLanguage}`;
    }
    const openApiSnippets: string[] = ['go', 'powershell'];
    if (openApiSnippets.includes(snippetLanguage)) {
        url += '&generation=openapi';
    }

    return { method, url, headers, data };
};