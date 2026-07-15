import {readFile} from "node:fs/promises";

const source=await readFile(new URL("../src/lib/private-preview/media-library.ts",import.meta.url),"utf8");
const urls=[...source.matchAll(/url:"(https?:\/\/[^\"]+)"/g)].map(match=>match[1]);
const searchPattern=/youtube\.com\/results|podcasts\.apple\.com\/[^/]+\/search|google\.com\/search|bing\.com\/search/i;
if(urls.some(url=>searchPattern.test(url)))throw new Error("A final media record points to a search page.");

let failures=0;
for(const url of urls){
  try{
    const response=await fetch(url,{redirect:"follow",headers:{"user-agent":"ColdFluResearch link checker/1.0"},signal:AbortSignal.timeout(15000)});
    const assessment=response.ok?"available":response.status===401||response.status===403||response.status===429?"manual-review-bot-or-access-block":"unavailable";
    console.log(JSON.stringify({url,status:response.status,finalUrl:response.url,assessment}));
    if(assessment==="unavailable")failures++;
  }catch(error){console.log(JSON.stringify({url,assessment:"manual-review-network-error",error:error instanceof Error?error.message:String(error)}));}
}
if(failures)process.exitCode=1;
