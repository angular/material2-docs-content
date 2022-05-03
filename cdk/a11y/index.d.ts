import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i4 from '@angular/cdk/a11y';
import * as i5 from '@angular/material/select';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';

export declare class CdkA11yExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkA11yExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkA11yExamplesModule, [typeof i1.FocusMonitorDirectivesExample, typeof i2.FocusMonitorFocusViaExample, typeof i3.FocusMonitorOverviewExample], [typeof i4.A11yModule, typeof i5.MatSelectModule], [typeof i1.FocusMonitorDirectivesExample, typeof i2.FocusMonitorFocusViaExample, typeof i3.FocusMonitorOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkA11yExamplesModule>;
}

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
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorDirectivesExample, "focus-monitor-directives-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorFocusViaExample, "focus-monitor-focus-via-example", never, {}, {}, never, never, false>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorOverviewExample, "focus-monitor-overview-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        FocusMonitorDirectivesExample
    }
}

declare namespace i2 {
    export {
        FocusMonitorFocusViaExample
    }
}

declare namespace i3 {
    export {
        FocusMonitorOverviewExample
    }
}

export { }
