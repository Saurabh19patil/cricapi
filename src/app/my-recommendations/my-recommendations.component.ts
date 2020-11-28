import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
@Component({
  selector: 'app-my-recommendations',
  templateUrl: './my-recommendations.component.html',
  styleUrls: ['./my-recommendations.component.css']
})
export class MyRecommendationsComponent implements OnInit {
   matches : any;
   resultMatches : any [] = new Array();
   resultRecom : any [] = new Array();
   serachInput = "India";
   isDisable = false;
   isDisable1 = true;
  constructor(private user: UserService) {}

  ngOnInit(): void {

    this.user.getData().subscribe( data =>{
      this.matches = data['matches'];
      console.log(this.matches);
    })
  }


  Recommendation = function(unique_id){
    console.log(unique_id)
    for(let index in this.resultMatches){
      let unit = this.resultMatches[index];
      if(unit['unique_id']== unique_id){
         this.resultRecom.push(unit);
         console.log(this.resultRecom);
         this.isDisable = true;
         this.isDisable1 = false;
      }
    }
    
  }

  unRecommendation = function(unique_id){
    for(let index in this.resultRecom){
      let unit2 = this.resultRecom[index];
      if(unit2['unique_id']== unique_id){
         this.resultRecom.pop(unit2);
         this.isDisable = false;
         this.isDisable1 = true;
         
      }
    }
  }

  confirm = function(serachInput){
    this.resultMatches = []
    console.log(252525252,serachInput);
    for( let index in this.matches){
         let item = this.matches[index];
         if(item['team-1'] == serachInput || item['team-2'] == serachInput || item['type'] == serachInput ){
         // console.log(item);
         item['team_1'] = item['team-1']
         item['team_2'] = item['team-2']
          this.resultMatches.push(item);

          console.log(this.resultMatches);
        
        }
        
        }
  }
  
}
