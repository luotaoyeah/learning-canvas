import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
    host: {
        '[class.app-progress-bar]': `true`,
    },
})
export class ProgressBarComponent implements OnInit {
    //region @Input()
    /** 左侧标题. */
    @Input()
    public leftText: string = '';

    /**
     * 右侧数量. 默认为 '当前数量 / 总数'
     */
    @Input()
    public rightText: string | number = '';

    /** 当前数量. */
    @Input()
    public value: number = 0;

    /** 总数. */
    @Input()
    public total: number = 0;
    //endregion

    public eid: string = `__canvas__${Math.random().toString().replace('.', '')}`;

    private dpr: number = window.devicePixelRatio || 1;
    private ctx!: CanvasRenderingContext2D;
    private canvas!: HTMLCanvasElement;

    /** 容器宽度. */
    private width: number = 0;
    /** 容器高度. */
    private height: number = 0;

    /** 数值文本的字体大小. */
    private fontSize: number = 0;
    /** 数值文本的字体大小: 默认. */
    private fontSizeDefault: number = 13;

    /** 进度条: 高度. */
    private barHeight: number = 6;
    /** 进度条: 右外边距. */
    private barMarginRight: number = 16;
    /** 进度条: 右下边距. */
    private barMarginBottom: number = 12;

    public constructor() {}

    public ngOnInit(): void {
        setTimeout(() => {
            this.init();
        });
    }

    private init() {
        this.canvas = document.querySelector<HTMLCanvasElement>(`#${this.eid}`)!;
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

        this.fontSize = this.fontSizeDefault;

        this.ctx.clearRect(0, 0, this.width, this.height);

        this.renderTotalBar();
        this.renderValueBar();
        this.renderDot();

        this.renderLeftText();
        this.renderRightText();
        if (this.value === this.total) {
            this.renderText100();
        }

        window.requestAnimationFrame(this.render.bind(this, this.ctx));
    }

    /**
     * 渲染当前数值位置的圆点.
     */
    private renderDot(): void {
        this.ctx.restore();
        this.ctx.save();

        const x = this.width * (this.value / this.total) - this.barMarginRight;
        const y = this.height - this.barHeight / 2 - this.barMarginBottom;

        // 边框
        this.ctx.strokeStyle = '#1b7ef2';
        this.ctx.lineWidth = 1;

        this.ctx.beginPath();
        this.ctx.arc(x, y, 8, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();

        // 背景
        this.ctx.fillStyle = '#161616';

        this.ctx.beginPath();
        this.ctx.arc(x, y, 7, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();

        // 中心圆点渐变
        const gradient = this.ctx.createRadialGradient(x, y, 2, x, y, 6);
        gradient.addColorStop(0, 'rgba(27, 126, 242, 0.65)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = gradient;

        this.ctx.beginPath();
        this.ctx.arc(x, y, 8, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();

        // 中心圆点
        this.ctx.fillStyle = '#fff';

        this.ctx.beginPath();
        this.ctx.arc(x, y, 2, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.restore();
        this.ctx.save();
    }

    /**
     * 渲染文本: 左侧标题.
     */
    private renderLeftText() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.87)';
        this.ctx.font = `normal ${this.fontSize}px 'Alibaba-PuHuiTi', SimSun, sans-serif`;
        this.ctx.textBaseline = 'bottom';
        this.ctx.textAlign = 'left';

        const y = this.height - this.barHeight - this.barMarginBottom - 8;
        this.ctx.fillText(`${this.leftText}`, 0, y);
    }

    /**
     * 渲染文本: 右侧数量.
     */
    private renderRightText() {
        this.ctx.restore();
        this.ctx.save();

        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.87)';
        this.ctx.font = `normal ${this.fontSize}px 'Alibaba-PuHuiTi', SimSun, sans-serif`;
        this.ctx.textBaseline = 'bottom';
        this.ctx.textAlign = 'right';

        const y = this.height - this.barHeight - this.barMarginBottom - 8;
        this.ctx.fillText(String(this.rightText) || `${this.value} / ${this.total}`, this.width - this.barMarginRight, y);
    }

    /**
     * 渲染文本: 100%.
     */
    private renderText100() {
        this.ctx.restore();
        this.ctx.save();

        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.87)';
        this.ctx.font = `normal ${this.fontSize - 1}px 'Alibaba-PuHuiTi', SimSun, sans-serif`;
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';

        const x = (this.width - this.barMarginRight) / 2;
        const y = this.height - this.barHeight / 2 - this.barMarginBottom + 1;
        this.ctx.fillText(`100%`, x, y);
    }

    /**
     * 渲染总数横条.
     */
    private renderTotalBar(): void {
        this.ctx.restore();
        this.ctx.save();

        const x = this.width - this.barMarginRight;
        const y = this.height - this.barHeight / 2 - this.barMarginBottom;

        this.ctx.strokeStyle = 'rgba(112, 112, 112, 0.23)';
        this.ctx.lineWidth = this.barHeight;

        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.restore();
        this.ctx.save();
    }

    /**
     * 渲染数值横条.
     */
    private renderValueBar(): void {
        this.ctx.restore();
        this.ctx.save();

        const x = (this.width - this.barMarginRight) * (this.value / this.total);
        const y = this.height - this.barHeight / 2 - this.barMarginBottom;

        const gradient = this.ctx.createLinearGradient(0, 0, x, 0);
        gradient.addColorStop(0, 'rgba(27, 126, 242, 0)');
        gradient.addColorStop(1, '#1b7ef2');

        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = this.barHeight;

        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.restore();
        this.ctx.save();
    }
}
