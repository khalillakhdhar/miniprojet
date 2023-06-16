import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../classes/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url: string="http://localhost:8080/categorie"
  constructor(private http:HttpClient) { }
getCategories()
{
  return this.http.get<Categorie[]>(this.url);
}
addCategorie(category:Categorie )
{
return this.http.post<Categorie[]>(this.url, category);
}
deleteCategorie(id:number)
{
  return this.http.delete<Categorie>(`${this.url}/${id}`)
}

}
