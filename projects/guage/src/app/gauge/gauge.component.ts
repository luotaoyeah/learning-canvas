import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gauge',
    templateUrl: './gauge.component.html',
    styleUrls: ['./gauge.component.css'],
})
export class GaugeComponent implements OnInit {
    private dpr: number = window.devicePixelRatio || 1;

    /** 容器宽度. */
    private width: number = 0;

    /** 容器高度. */
    private height: number = 0;

    public constructor() {}

    public ngOnInit(): void {
        this.init();
    }

    private init() {
        const canvas = document.querySelector<HTMLCanvasElement>('#canvas888888')!;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * this.dpr;
        canvas.height = rect.height * this.dpr;

        const ctx = canvas.getContext('2d')!;
        ctx.scale(this.dpr, this.dpr);

        this.width = canvas.width / this.dpr;
        this.height = canvas.height / this.dpr;

        this.render(ctx);
    }

    private render(ctx: CanvasRenderingContext2D) {
        window.requestAnimationFrame(this.render.bind(this, ctx));

        ctx.clearRect(0, 0, this.width, this.height);

        {
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#0000ff';
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.quadraticCurveTo(150, 100, 50, 150);
            ctx.stroke();

            ctx.lineWidth = 1;
            ctx.strokeStyle = '#ff0000';
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(150, 100);
            ctx.lineTo(50, 150);
            ctx.stroke();
        }

        {
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#0000ff';
            ctx.beginPath();
            ctx.moveTo(300, 100);
            ctx.quadraticCurveTo(400, 150, 500, 100);
            ctx.stroke();

            ctx.lineWidth = 1;
            ctx.strokeStyle = '#ff0000';
            ctx.beginPath();
            ctx.moveTo(300, 100);
            ctx.lineTo(400, 150);
            ctx.lineTo(500, 100);
            ctx.stroke();
        }
    }
}
