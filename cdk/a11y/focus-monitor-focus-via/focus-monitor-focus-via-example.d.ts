import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/** @title Focusing with a specific FocusOrigin */
export declare class FocusMonitorFocusViaExample implements OnDestroy, AfterViewInit {
    focusMonitor: FocusMonitor;
    private _cdr;
    private _ngZone;
    monitoredEl: ElementRef<HTMLElement>;
    origin: string;
    constructor(focusMonitor: FocusMonitor, _cdr: ChangeDetectorRef, _ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusMonitorFocusViaExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorFocusViaExample, "focus-monitor-focus-via-example", never, {}, {}, never, never>;
}
