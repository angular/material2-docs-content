import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy } from '@angular/core';
/** @title Monitoring focus with FocusMonitor */
export declare class FocusMonitorOverviewExample implements OnDestroy, AfterViewInit {
    private focusMonitor;
    private cdr;
    private ngZone;
    element: ElementRef<HTMLElement>;
    subtree: ElementRef<HTMLElement>;
    elementOrigin: string;
    subtreeOrigin: string;
    constructor(focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
}
