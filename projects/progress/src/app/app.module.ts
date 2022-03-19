import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';

@NgModule({
    declarations: [AppComponent, ProgressCircleComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
