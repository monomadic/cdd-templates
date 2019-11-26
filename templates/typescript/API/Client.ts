
export interface APIClient {
    send(url: string,
        headers: Map<string,string>,
        body:string,method:string,
        onSuccess:(result:string)=>void,
         onError:(error:Error)=>void) 
}

export class HTTPClient {

    send(url: string,
        headers: Map<string,string>,
        body:string,method:string,
        onSuccess:(result:string)=>void,
         onError:(error:Error)=>void) {

            var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (onSuccess) xhr.onload = function() { 
            try {
                onSuccess(this.responseText); 
            }
            catch (e) {
                onError(e)
            }
            
        };
    
        headers.forEach((value,key,map) => {
            xhr.setRequestHeader(key, value);
        })
        
        xhr.send(body);
    }
}