import { Injectable } from "@angular/core";
//import { filter } from "lodash";
declare var require : any

@Injectable({
    providedIn: 'root'
  })
  export class ProfanityFilterService {

    Filter = require('bad-words')
    filter = new this.Filter()

    constructor(){
        this.filter.addWords('trevin', 'santi', 'eduardo', 'pizza', 'money', 'food')        
    }   
    //{{filter.clean("string")}}

    public getFilter(){
      return this.filter
    }

  }