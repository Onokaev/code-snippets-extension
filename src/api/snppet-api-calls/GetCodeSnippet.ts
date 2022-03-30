import { axiosFetch } from "../axios-api-util";
import { ISnippetRequestInformation } from "../snippet-url-generator/IGenerateSnippetUrl";

export const getCodeSnippet = async (snippetInformation: ISnippetRequestInformation): Promise<any> => {
    const options = snippetInformation;
    return axiosFetch(options);
};