import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoughnutChartComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    if (this.isEmpty()) { return; }
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

  private isEmpty(): boolean {
    return this.statistics.includes(NaN) || this.statistics.every(value => !value);
  }

}
