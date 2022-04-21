import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/** @title Monitoring focus with FocusMonitor */
export declare class FocusMonitorOverviewExample implements OnDestroy, AfterViewInit {
    private _focusMonitor;
    private _cdr;
    private _ngZone;
    element: ElementRef<HTMLElement>;
    subtree: ElementRef<HTMLElement>;
    elementOrigin: string;
    subtreeOrigin: string;
    constructor(_focusMonitor: FocusMonitor, _cdr: ChangeDetectorRef, _ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusMonitorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorOverviewExample, "focus-monitor-overview-example", never, {}, {}, never, never, false>;
}
