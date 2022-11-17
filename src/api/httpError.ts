export default class HTTPError extends Error {
    constructor(private statusCode: number, public message: string) {
        super(message);
    }

    get errorMessage() {
        switch (this.statusCode) {
            case 404:
                this.message = `권한이 없습니다.`
                break;
            default:
                throw new Error("unknown error");
        }
        return this.message;
    }
}