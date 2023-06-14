import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';

/** @title Monitoring focus with FocusMonitor */
export declare class FocusMonitorDirectivesExample {
    private _ngZone;
    private _cdr;
    elementOrigin: string;
    subtreeOrigin: string;
    constructor(_ngZone: NgZone, _cdr: ChangeDetectorRef);
    formatOrigin(origin: FocusOrigin): string;
    markForCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusMonitorDirectivesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorDirectivesExample, "focus-monitor-directives-example", never, {}, {}, never, never, true, never>;
}

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
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorFocusViaExample, "focus-monitor-focus-via-example", never, {}, {}, never, never, true, never>;
}

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
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorOverviewExample, "focus-monitor-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
