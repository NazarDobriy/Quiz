import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnChanges {
  @Input() statistics: [number, number, number] = [0, 0, 0];

  @ViewChild('donut') donut!: ElementRef;

  private options = {
    responsive: false,
    animation: {
      animateRotate: false
    }
  };

  private data = {
    datasets: [{
      data: this.statistics,
      backgroundColor: [
        '#FEFD54',
        '#63C995',
        '#3545E9'
      ],
      hoverOffset: 4
    }]
  };

  public chart: Chart | null = null;

  ngOnChanges(): void {
    if (this.statistics.includes(NaN)) { return; }
    const canvas: HTMLCanvasElement = this.donut.nativeElement;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    this.data.datasets[0].data = this.statistics;
    if (ctx != null) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.data,
        options: this.options
      });
    }
  }

}
