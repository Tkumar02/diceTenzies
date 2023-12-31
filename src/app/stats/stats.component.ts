import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  constructor(private afs:AngularFirestore) {}

  statsData: Array<any> = []

  ngOnInit(): void{
    this.loadData().subscribe(val=>{
      this.statsData = val;
    })
  }

  loadData() {
    return this.afs.collection('stats').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          return data
        })
      })
    )
  }
  
}
