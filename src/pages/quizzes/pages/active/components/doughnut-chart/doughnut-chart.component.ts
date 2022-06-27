import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnChanges {
  @Input() statistics: [number, number] = [0, 0];

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
        '#63C995',
        '#E23D69'
      ],
      borderWidth: 2,
      hoverOffset: 4
    }]
  };

  public chart: Chart | null = null;

  ngOnChanges(): void {
    if (this.statistics.includes(NaN) || this.isEachZero()) { return; }
    const canvas: HTMLCanvasElement = this.donut.nativeElement;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    this.data.datasets[0].data = this.statistics;
    if (this.statistics.includes(0)) {
      this.data.datasets[0].borderWidth = 0;
    }
    if (ctx != null) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.data,
        options: this.options
      });
    }
  }

  private isEachZero(): boolean {
    const isZero: (value: number) => boolean = (currentValue: number) => !currentValue;
    return this.statistics.every(isZero);
  }

}
