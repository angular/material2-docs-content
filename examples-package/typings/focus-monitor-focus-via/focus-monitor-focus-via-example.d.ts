import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
/** @title Focusing with a specific FocusOrigin */
export declare class FocusMonitorFocusViaExample implements OnDestroy, OnInit {
    focusMonitor: FocusMonitor;
    private cdr;
    private ngZone;
    monitoredEl: ElementRef;
    origin: string;
    constructor(focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
}
