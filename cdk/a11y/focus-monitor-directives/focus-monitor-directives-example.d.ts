import { FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵcmp: i0.ɵɵComponentDeclaration<FocusMonitorDirectivesExample, "focus-monitor-directives-example", never, {}, {}, never, never>;
}
