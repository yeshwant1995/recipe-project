import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('Parotta recipe',
          'One of the popular south indian layered paratha recipe made with maida or plain flour',
          'https://upload.wikimedia.org/wikipedia/commons/1/13/Chilli_chicken_with_kerala_parotta.jpg',[
            new Ingredient('maida',1),
            new Ingredient('salt',1)
          ]),
          
          new Recipe('Parotta recipe 2',
          'One of the popular south indian layered paratha recipe made with maida or plain flour',
          'https://upload.wikimedia.org/wikipedia/commons/1/13/Chilli_chicken_with_kerala_parotta.jpg',[
            new Ingredient('maida1',1),
            new Ingredient('salt1',1)
          ])
      ];

    constructor(private slService:ShoppingListService){

    }

    getRecipe(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients)
    }


}