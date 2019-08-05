import {Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'
@Injectable()
export class ApiPratoService{
    constructor(private http: HttpClient) {}

    public getPratos(){
        return this.http.get('https://localhost:44384/api/prato')
    }
    public getPratosPorNome(id){
        return this.http.get(`https://localhost:44384/api/prato/${id}`,id)
    }
    public postPrato(prato){
        return this.http.post('https://localhost:44384/api/prato',prato)
    }
    public deletePrato(prato){
        return this.http.delete(`https://localhost:44384/api/prato/${prato.id}`,prato.id)
    }
}