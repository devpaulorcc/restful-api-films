import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
    status(){
        return ({
            code: 200,
            status: "OK",
            description: "An api made for all the functions of a CRUD for films."
        })
    }
}
