import { Component } from '@angular/core';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Categorie } from '../../shared/classes/categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
categories:Categorie[] = [];
categorie=new Categorie();
grade=""
  constructor(private categorieapi:CategorieService)
  {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.readCategories();
let us=JSON.parse(localStorage.getItem("current")||'')||"";
   this.grade=us.grade
console.log("grade",this.grade)
    }
    addCategorie()
    {
      this.categorieapi.addCategorie(this.categorie).subscribe(data=>
        {
         console.log("added",data);
         this.categorie=new Categorie();
         this.readCategories();
        }
        )
    }
    readCategories()
    {
      this.categorieapi.getCategories().subscribe(datas=>
        {
          this.categories=datas;
          console.log("categories",this.categories);
        } )
    }
    deleteCategorie(categorie:any)
    {
      if(confirm("êtes vous sûre de vouloir supprimer? "+  categorie.category))
      {
        this.categorieapi.deleteCategorie(categorie.id).subscribe(data=>{
          console.log("deleted");
          this.readCategories();
        });



      }
    }
}
