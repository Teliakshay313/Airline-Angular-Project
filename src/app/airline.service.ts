import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from './airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private myhttp:HttpClient) { }
  restUrl:String="http://localhost:9092/rest/api"

getAirline()
{
    return this.myhttp.get(this.restUrl+"/Airline")
}

addAirline(veh:Airline)
{

    return this.myhttp.post(this.restUrl+"/Airline",veh);
}
    
    flightsearch(srchffrom:string,srchfto:string,srchfclass:string,srchfprice:string)
{
  return this.myhttp.get(this.restUrl + "/Airline/" +srchffrom +"/" +srchfto +"/" +srchfclass +"/" +srchfprice);
}

}
