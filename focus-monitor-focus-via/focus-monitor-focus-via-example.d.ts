import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy } from '@angular/core';
/** @title Focusing with a specific FocusOrigin */
export declare class FocusMonitorFocusViaExample implements OnDestroy, AfterViewInit {
    focusMonitor: FocusMonitor;
    private cdr;
    private ngZone;
    monitoredEl: ElementRef<HTMLElement>;
    origin: string;
    constructor(focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
}
