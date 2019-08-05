import {Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'

@Injectable()
export class ApiService{
    constructor(private http: HttpClient) {}

    public getRestaurantes(){
        return this.http.get('https://localhost:44384/api/restaurante')
    }
    public getRestaurantesPorId(id: number | string){
        return this.http.get(`https://localhost:44384/api/restaurante/${id}`)
    }
    public postRestaurante(restaurante){
        return this.http.post('https://localhost:44384/api/restaurante',restaurante)
    }
    public putRestaurante(restaurante){
        this.http.put('https://localhost:44384/api/restaurante/${restaurante.id}/',restaurante).subscribe(res=>console.log(res))
    }
    public deleteRestaurante(restaurante){
        return this.http.delete(`https://localhost:44384/api/restaurante/${restaurante.id}`,restaurante.id)
    }
}