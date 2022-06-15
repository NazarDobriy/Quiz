import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnInit {

  private options = {
    animation: {
      animateRotate: false
    }
  };

  private data = {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FEFD54',
        '#63C995',
        '#3545E9'
      ],
      hoverOffset: 4
    }]
  };

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = document.getElementById('myChart') as HTMLCanvasElement;
    if (canvas != null) {
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (ctx != null) {
        new Chart(ctx, {
          type: 'doughnut',
          data: this.data,
          options: this.options
        });
      }
    }
  }

}
