import {NextRequest,NextResponse} from "next/server";import {previewEnabled,validBasicAuthorization} from "@/lib/private-preview/auth";
const headers={"X-Robots-Tag":"noindex, nofollow, noarchive","Cache-Control":"private, no-store"};
export function middleware(request:NextRequest){if(!previewEnabled())return new NextResponse("Not found",{status:404,headers});if(!validBasicAuthorization(request.headers.get("authorization")))return new NextResponse("Authentication required",{status:401,headers:{...headers,"WWW-Authenticate":'Basic realm="Private research preview", charset="UTF-8"'}});const response=NextResponse.next();for(const[name,value]of Object.entries(headers))response.headers.set(name,value);return response;}
export const config={matcher:["/research-preview/:path*"]};
