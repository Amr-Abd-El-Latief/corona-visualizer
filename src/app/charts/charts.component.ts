import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild("barCanvas", { static: false }) barCanvas: ElementRef;
  @ViewChild("doughnutCanvas", { static: false }) doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas", { static: false }) lineCanvas: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;
  private labels: [];
  private numbers: [];
  private coutriesData: any;
  private size: number = 7;

  constructor(private http: HttpClient) {
    let self = this;
    let urlPrefix = "https://covid19-api.web.app/api/cases?fbclid=IwAR2YKeRlnnNxY5zWACnZsp3j-YPnLSxBI98GX2cRk5nT0S6LchG7j5o-qz4";
    this.http.get(urlPrefix).subscribe((data) => {
      //alert(JSON.stringify(data));//DO STUFF HERE
      self.labels = data["results"].slice(0, self.size).map((elem) => {
        return elem['country']
      })
      self.numbers = data["results"].slice(0, self.size).map((elem) => {
        return elem['recovered']
      })

      self.coutriesData = data["results"];
      self.prepareBarChart();
      self.prepareDonatChart();

    });

  }

  ngOnInit() {

  }


  updateChartNumbers(fieldName) {
    let self = this;
    self.numbers = self.coutriesData.slice(0, self.size).map((elem) => {
      return elem[fieldName]
    })
    self.prepareBarChart();
    self.prepareDonatChart();

  }


  prepareBarChart() {
    let self = this;
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: self.labels,
        datasets: [
          {
            label: "Countries Data",
            data: self.numbers,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  prepareDonatChart() {
    let self = this;
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: self.labels,
        datasets: [
          {
            label: "Countries Data",
            data: self.numbers,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });

  }

}

