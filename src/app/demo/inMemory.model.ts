export class User {
    status: boolean;

    constructor(public firstName: string,
                public lastName: string,
                public username: string,
                public role: string,
                public email: string) {
        this.status = true;
    }
}
