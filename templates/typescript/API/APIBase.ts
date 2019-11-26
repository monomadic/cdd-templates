import { APIClient, HTTPClient } from "./Client";

export module APIBase {}
export type Int = number

export class ResponceEmpty {

}

export class APIRequest<ResponseType,ErrorType> {
    path(): string {
        return ""
    }

    method(): string {
        return "POST"
    }


    public send(client:APIClient = new HTTPClient(), onSuccess:(result:ResponseType)=>void, onError:(error:Error)=>void) {
        let headers = new Map<string, string>(); 
        headers.set('Content-Type', 'application/json');
        client.send(this.path(),headers,JSON.stringify(this),this.method(),(result)=>{
            onSuccess(JSON.parse(result)); 
        },(error) => {
            onError(error)
        })
    }    
}

//-------------------------------------------------
// Simple function to GET or POST
function httpCall(method: string, url:string, data:any, callback:(result:any)=>any) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (callback) xhr.onload = function() { callback(JSON.parse(this['responseText'])); };
    if (data != null) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
    else xhr.send();
}
}