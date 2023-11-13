import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animais: Animal[]=[
    {nome:'larry', tipo:'cachorro',idade:15},
    {nome:'Miau', tipo:'gato',idade:2},
    {nome:'Anita', tipo:'cachorro',idade:12},
    {nome:'Litajara', tipo:'cachorro',idade:7}

  ];
  idadeAnimal: string="";
constructor(private listService: ListService) { }
ngOnInit():void {

 }
 mostraIdade(animal:Animal){
  this.idadeAnimal =`${ animal.nome} (${ animal.tipo}) tem ${ animal.idade} anos!`;
 }
 removeAnimal(animal:Animal){
  console.log('removndo animal...')
  this.animais = this.listService.remove(this.animais,animal)
 }
}
