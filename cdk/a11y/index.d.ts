import { FocusOrigin, FocusMonitor } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import { OnDestroy, AfterViewInit, ElementRef } from '@angular/core';

/** @title Monitoring focus with FocusMonitor */
declare class FocusMonitorDirectivesExample {
    private _ngZone;
    private _cdr;
    elementOrigin: string;
    subtreeOrigin: string;
    formatOrigin(origin: FocusOrigin): string;
    markForCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusMonitorDirectivesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorDirectivesExample, "focus-monitor-directives-example", never, {}, {}, never, never, true, never>;
}

/** @title Focusing with a specific FocusOrigin */
declare class FocusMonitorFocusViaExample implements OnDestroy, AfterViewInit {
    focusMonitor: FocusMonitor;
    private _cdr;
    private _ngZone;
    monitoredEl: ElementRef<HTMLElement>;
    origin: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusMonitorFocusViaExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorFocusViaExample, "focus-monitor-focus-via-example", never, {}, {}, never, never, true, never>;
}

/** @title Monitoring focus with FocusMonitor */
declare class FocusMonitorOverviewExample implements OnDestroy, AfterViewInit {
    private _focusMonitor;
    private _cdr;
    private _ngZone;
    element: ElementRef<HTMLElement>;
    subtree: ElementRef<HTMLElement>;
    elementOrigin: string;
    subtreeOrigin: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    formatOrigin(origin: FocusOrigin): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusMonitorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorOverviewExample, "focus-monitor-overview-example", never, {}, {}, never, never, true, never>;
}

export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
