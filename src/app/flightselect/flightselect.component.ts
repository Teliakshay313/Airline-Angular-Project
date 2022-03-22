import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flightselect.component.html',
  styleUrls: ['./flightselect.component.css']
})
export class FlightSelectComponent implements OnInit {

  constructor(private vhs:AirlineService) { }

  ngOnInit(): void {
  }
  airline:Airline=new Airline();
  Selectflight(AirlineForm:any)
  {
      this.airline=AirlineForm.value;
      console.log(this.airline);
      this.vhs.addAirline(this.airline).subscribe(
        (data)=>{
            console.log(data);
            alert("Flight Added !")
        },
        (error)=>
          {  console.log(error) }
      )
  }
}



