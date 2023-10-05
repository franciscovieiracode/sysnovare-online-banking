import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileService } from 'src/app/services/user/profile.service';

export interface Moviments {
  type: string;
  amount: number;
  date: string;
  description:string;
  from:string;
  to:string;
}



@Component({
  selector: 'app-moviments-table',
  templateUrl: './moviments-table.component.html',
  styleUrls: ['./moviments-table.component.css']
})
export class MovimentsTableComponent {
  movements!: Moviments[]
  displayedColumns: string[] = ['type', 'amount', 'date', 'from', 'to', 'description'];
  dataSource:any

  constructor(private getMoviments: ProfileService) {}

  ngOnInit():void  {
    this.getMoviments.getMovements().subscribe({
      next: (data) => {
        if(data && data.status == true){
          console.log(data.moviments);
          this.movements = data.moviments
          this.dataSource = new MatTableDataSource(this.movements.reverse())
        }
      },
      error: (error) =>{
        console.log(error.error);
        
      },
      complete: () => console.info('Payment Made') 
  })  }

}
