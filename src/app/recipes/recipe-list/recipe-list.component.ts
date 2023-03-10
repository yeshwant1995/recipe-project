import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Parotta recipe',
      'One of the popular south indian layered paratha recipe made with maida or plain flour',
      'https://upload.wikimedia.org/wikipedia/commons/1/13/Chilli_chicken_with_kerala_parotta.jpg'),
      new Recipe('Parotta recipe 2',
      'One of the popular south indian layered paratha recipe made with maida or plain flour',
      'https://upload.wikimedia.org/wikipedia/commons/1/13/Chilli_chicken_with_kerala_parotta.jpg')
  ];

  constructor(){
    
  }
  ngOnInit(): void {

  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
