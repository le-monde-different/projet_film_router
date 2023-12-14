import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
type film = {
  name: string;
  img: File | null;
  genre: string;
  jaime: number;
  jaimepas: number;
  stock: number;
  disponible: boolean;
};
@Component({
  selector: 'app-home-visiteur',
  templateUrl: './home-visiteur.component.html',
  styleUrls: ['./home-visiteur.component.css']
})
export class HomeVisiteurComponent {
  listFilms: film[] = [];
  filmName: string = '';
  genre: string = '';
  photo: File | null = null;

  ajouterFilm() {
    const nouveauFilm: film = {
      name: this.filmName,
      img: this.photo,
      genre: this.genre,
      jaime: 0,
      jaimepas: 0,
      stock: 0,
      disponible: true
    };

    this.listFilms.push(nouveauFilm);

    // Réinitialiser les champs après l'ajout
    this.filmName = '';
    this.genre = '';
    this.photo = null;
  }
}
