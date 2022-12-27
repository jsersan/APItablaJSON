import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { infoAPI } from 'src/app/models/infoAPI.model';
import { DataService } from 'src/app/services/dataTableService/data.service';

@Component({
  selector: 'app-database-tabla',
  templateUrl: './database-tabla.component.html',
  styles: [
  ]
})
export class DatabaseTablaComponent {
  displayedColumns: string[] = ['API', 'Description', 'Link', 'Category' ,'Cors'];
  dataSource = new MatTableDataSource<infoAPI>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(){
    this.dataSource.paginator! = this.paginator;
  }

  listar(){
    this._entradaServicio.getEntradas().subscribe(
      response =>{
        console.log(response);
        if (response.count>0){
          this.dataSource.data = response.entries
        }
      }
    )
  }

  constructor(private _entradaServicio:DataService){}

}
