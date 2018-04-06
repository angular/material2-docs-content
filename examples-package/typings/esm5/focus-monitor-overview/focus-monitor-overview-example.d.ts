import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
/** @title Monitoring focus with FocusMonitor */
export declare class FocusMonitorOverviewExample implements OnDestroy, OnInit {
    private focusMonitor;
    private cdr;
    private ngZone;
    element: ElementRef;
    subtree: ElementRef;
    elementOrigin: string;
    subtreeOrigin: string;
    constructor(focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
}
