export class MockClient {
    response:string

    public constructor(response:string) {
        this.response = response
    }

    send(url: string,
        headers: Map<string,string>,
        body:string,method:string,
        onSuccess:(result:string)=>void,
         onError:(error:Error)=>void) {

            onSuccess(this.response)
    }
}