import { FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, NgZone } from '@angular/core';
/** @title Monitoring focus with FocusMonitor */
export declare class FocusMonitorDirectivesExample {
    private ngZone;
    private cdr;
    elementOrigin: string;
    subtreeOrigin: string;
    constructor(ngZone: NgZone, cdr: ChangeDetectorRef);
    formatOrigin(origin: FocusOrigin): string;
    markForCheck(): void;
}
