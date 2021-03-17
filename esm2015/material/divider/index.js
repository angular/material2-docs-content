import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DividerOverviewExample } from './divider-overview/divider-overview-example';
import { DividerHarnessExample } from './divider-harness/divider-harness-example';
import * as i0 from "@angular/core";
export { DividerHarnessExample, DividerOverviewExample };
const EXAMPLES = [
    DividerHarnessExample,
    DividerOverviewExample,
];
export class DividerExamplesModule {
}
DividerExamplesModule.ɵfac = function DividerExamplesModule_Factory(t) { return new (t || DividerExamplesModule)(); };
DividerExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DividerExamplesModule });
DividerExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatDividerModule,
            MatListModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DividerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDividerModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DividerExamplesModule, { declarations: [DividerHarnessExample,
        DividerOverviewExample], imports: [MatDividerModule,
        MatListModule], exports: [DividerHarnessExample,
        DividerOverviewExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaXZpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztBQUV2RCxNQUFNLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQixzQkFBc0I7Q0FDdkIsQ0FBQztBQVdGLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFSdkI7WUFDUCxnQkFBZ0I7WUFDaEIsYUFBYTtTQUNkO3VGQUtVLHFCQUFxQjtjQVRqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSxxQkFBcUIsbUJBYmhDLHFCQUFxQjtRQUNyQixzQkFBc0IsYUFLcEIsZ0JBQWdCO1FBQ2hCLGFBQWEsYUFQZixxQkFBcUI7UUFDckIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7RGl2aWRlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9kaXZpZGVyLW92ZXJ2aWV3L2RpdmlkZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0RpdmlkZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9kaXZpZGVyLWhhcm5lc3MvZGl2aWRlci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0RpdmlkZXJIYXJuZXNzRXhhbXBsZSwgRGl2aWRlck92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBEaXZpZGVySGFybmVzc0V4YW1wbGUsXG4gIERpdmlkZXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGl2aWRlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==