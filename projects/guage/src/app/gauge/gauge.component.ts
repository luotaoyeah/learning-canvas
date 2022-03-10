import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-gauge',
    templateUrl: './gauge.component.html',
    styleUrls: ['./gauge.component.css'],
})
export class GaugeComponent implements OnInit {
    //region @Input()
    /** 数值. */
    @Input()
    public value: number = 0;
    //endregion

    private dpr: number = window.devicePixelRatio || 1;
    private ctx!: CanvasRenderingContext2D;
    private canvas!: HTMLCanvasElement;

    /** 容器宽度. */
    private width: number = 0;

    /** 容器高度. */
    private height: number = 0;

    /** 外层椭圆: 起始角度. */
    private outerEllipseStartAngle: number = 0;
    /** 外层椭圆: 外边距. */
    private outerEllipseMargin: number = 16;
    /** 外层椭圆: 是否渲染动画. */
    private outerEllipseAnimate: boolean = true;

    /** 内层椭圆: 起始角度. */
    private innerEllipseStartAngle: number = 135 * (Math.PI / 180);
    /** 内层椭圆: 外边距. */
    private innerEllipseMargin: number = 32;
    /** 外层椭圆: 是否渲染动画. */
    private innerEllipseAnimate: boolean = true;

    /** 进度椭圆: 外边距. */
    private progressEllipseMargin: number = 64;

    public constructor() {}

    public ngOnInit(): void {
        this.init();
    }

    private init() {
        this.canvas = document.querySelector<HTMLCanvasElement>('#canvas888888')!;
        this.ctx = this.canvas.getContext('2d')!;

        this.render();
    }

    private render() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * this.dpr;
        this.canvas.height = rect.height * this.dpr;

        this.ctx.scale(this.dpr, this.dpr);

        this.width = rect.width;
        this.height = rect.height;

        this.ctx.clearRect(0, 0, this.width, this.height);

        this.renderOuterEllipse();
        this.renderInnerEllipse();
        this.renderProgressEllipse();

        this.renderLabel();

        window.requestAnimationFrame(this.render.bind(this, this.ctx));
    }

    /**
     * 渲染内层椭圆.
     */
    private renderInnerEllipse(): void {
        this.ctx.restore();
        this.ctx.save();

        if (this.innerEllipseAnimate) {
            if (this.innerEllipseStartAngle >= Math.PI * 2) {
                this.innerEllipseStartAngle = 0;
            }

            this.innerEllipseStartAngle -= 0.015;
        }

        this.ctx.translate(this.width / 2, this.height / 2);
        this.ctx.scale(1, this.height / (this.width - 6));

        const startAngle = this.innerEllipseStartAngle;
        const endAngle = this.innerEllipseStartAngle + 45 * (Math.PI / 180);

        const gradient = this.ctx.createConicGradient(startAngle, 0, 0);
        gradient.addColorStop(0, 'rgba(27,126,242,1)');
        gradient.addColorStop(0.125, 'rgba(27,126,242,0)');
        gradient.addColorStop(1, 'rgba(27,126,242,0)');
        this.ctx.strokeStyle = gradient;

        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';

        this.ctx.beginPath();
        this.ctx.arc(0, 0, Math.max(0, this.width / 2 - this.innerEllipseMargin - this.ctx.lineWidth), startAngle, endAngle, false);
        this.ctx.stroke();

        this.ctx.restore();
        this.ctx.save();
    }

    /**
     * 渲染文本.
     */
    private renderLabel() {
        this.ctx.fillStyle = '#fff';
        this.ctx.font = "64px 'Alibaba-PuHuiTi', SimSun, sans-serif";
        this.ctx.textBaseline = 'bottom';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${this.value} %`, this.width / 2, this.height / 2);
    }

    /**
     * 渲染外层椭圆.
     */
    private renderOuterEllipse(): void {
        this.ctx.restore();
        this.ctx.save();

        if (this.outerEllipseAnimate) {
            if (this.outerEllipseStartAngle >= Math.PI * 2) {
                this.outerEllipseStartAngle = 0;
            }

            this.outerEllipseStartAngle += 0.025;
        }

        this.ctx.translate(this.width / 2, this.height / 2);
        this.ctx.scale(1, this.height / (this.width - 12));

        const startAngle = this.outerEllipseStartAngle;
        const endAngle = this.outerEllipseStartAngle + 180 * (Math.PI / 180);

        const gradient = this.ctx.createConicGradient(startAngle, 0, 0);
        gradient.addColorStop(0, 'rgba(27,126,242,0)');
        gradient.addColorStop(0.25, 'rgb(27,126,242)');
        gradient.addColorStop(0.5, 'rgba(27,126,242,0)');
        gradient.addColorStop(1, 'rgba(27,126,242,0)');
        this.ctx.strokeStyle = gradient;

        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';

        this.ctx.beginPath();
        this.ctx.arc(0, 0, Math.max(0, this.width / 2 - this.outerEllipseMargin - this.ctx.lineWidth / 2), startAngle, endAngle, false);
        this.ctx.stroke();

        this.ctx.restore();
        this.ctx.save();
    }

    /**
     * 渲染进度椭圆.
     */
    private renderProgressEllipse(): void {
        this.ctx.restore();
        this.ctx.save();

        this.ctx.strokeStyle = 'rgb(27,126,242)';
        this.ctx.lineWidth = 36;
        this.ctx.lineDashOffset = 33;
        this.ctx.setLineDash([30, 3]);

        this.ctx.translate(this.width / 2, this.height / 2);
        this.ctx.scale(1, this.height / this.width);

        this.ctx.beginPath();
        this.ctx.arc(0, 0, Math.max(0, this.width / 2 - this.progressEllipseMargin - this.ctx.lineWidth / 2), 0, 360 * (Math.PI / 180), false);
        this.ctx.stroke();

        this.ctx.restore();
        this.ctx.save();
    }
}
