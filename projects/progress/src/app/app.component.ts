import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
    public value: number = 0;
    public timer: number = -1;

    public constructor(public cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.timer = setInterval(() => {
            this.value = Number((Math.random() * 100).toFixed(0));
            this.cdr.markForCheck();
        }, 1000);
    }

    public ngOnDestroy(): void {
        clearInterval(this.timer);
    }
}
