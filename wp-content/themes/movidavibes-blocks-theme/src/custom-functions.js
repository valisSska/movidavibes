export default function clearCookiesMoviJson(string){

    const userCookiesString2 = string.replace(/\\/g, '');
    const userCookiesString3 = userCookiesString2.replace(/["]/g, '');
    const userCookiesString4 = userCookiesString3.replace(/:/g, "':'");
    const userCookiesString5 = userCookiesString4.replace(/,/g, "','");
    const userCookiesString6 = userCookiesString5.replace(/{/g, "{'");
    const userCookiesString7 = userCookiesString6.replace(/}/g, "'}");
    const userCookiesString8 = userCookiesString7.replace(/[]/g, "");
    const userCookiesString9 = userCookiesString8.replace(/^"|"$/g, '').replace(/'/g, '"');
    console.log('//////////  userCookiesString9    ' + userCookiesString9);
    const response = JSON.parse(userCookiesString9);
    return response
}