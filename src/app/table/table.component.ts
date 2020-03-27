
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  private displayedColumns: string[] = ['country', 'confirmed', 'deaths', 'recovered', 'active'];
  private dataSource = new MatTableDataSource<any>([
    {
      country: 'China',
      updated_at: 1584097775000,
      confirmed: 81155,
      deaths: 3249,
      recovered: 70535,
      active: 7371
    },
    {
      country: 'Italy',
      updated_at: 1584639783000,
      confirmed: 41035,
      deaths: 3405,
      recovered: 4440,
      active: 33190
    },
  ]);      //static Data

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private http: HttpClient) {
    let self = this;
    let urlPrefix = "https://covid19-api.web.app/api/cases?fbclid=IwAR2YKeRlnnNxY5zWACnZsp3j-YPnLSxBI98GX2cRk5nT0S6LchG7j5o-qz4";
    this.http.get(urlPrefix).subscribe((data) => {
      //alert(JSON.stringify(data));//DO STUFF HERE
      self.dataSource  = new MatTableDataSource<any>(data["results"]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  ngOnInit() {
  
  }


/**
 * FUNCTION TO FILTER ON THE TABLE CONTENTS
 * @param event  CONTENT 
 */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
