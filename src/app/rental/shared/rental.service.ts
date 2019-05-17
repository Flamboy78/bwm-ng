import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.module'

@Injectable()
export class RentalService {

  private rentals: Rental[] = [{
  	id: "1",
  	title:"Central Apartment",
  	city:"New York",
  	street:"Time Square",
  	category:"apartament",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description:"Small and confy apartment",
  	dailyRate: 34,
  	shared: false,
  	createdAt: "5/16/2019"
  },
  {
  	id: "2",
  	title: "Central Apartment",
  	city:"New York",
  	street:"Time Square",
  	category:"apartament",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description:"Small and confy apartment",
  	dailyRate: 24,
  	shared: false,
  	createdAt: "5/10/2019"
  },
  {
  	id: "3",
  	title: "Central Apartment",
  	city:"New York",
  	street:"Time Square",
  	category:"apartament",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 3,
  	description:"Small and confy apartment",
  	dailyRate: 78,
  	shared: false,
  	createdAt: "5/12/2019"
  },
  {
  	id: "4",
  	title: "North Apartment",
  	city:"New York",
  	street:"Manhatan",
  	category:"apartament",
  	image: "http://via.placeholder.com/350x250",
  	bedrooms: 4,
  	description:"Small and confy apartment",
  	dailyRate: 45,
  	shared: false,
  	createdAt: "5/13/2019"
  }];

  public getRentalById(rentalId:string): Observable<Rental>{
    return new Observable<Rental>((observer) =>{

      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;

        });

        observer.next(foundRental);
      }, 500);
    });
  }

  public getRentals(): Observable<Rental[]> {
    
    return new Observable<Rental[]>((observer) => {
      setTimeout(() => {
        
        observer.next(this.rentals)

      }, 1000);
    });
    
  }

}