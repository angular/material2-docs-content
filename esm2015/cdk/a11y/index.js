/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/a11y/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FocusMonitorDirectivesExample } from './focus-monitor-directives/focus-monitor-directives-example';
import { FocusMonitorFocusViaExample } from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import { FocusMonitorOverviewExample } from './focus-monitor-overview/focus-monitor-overview-example';
import * as i0 from "@angular/core";
export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
/** @type {?} */
const EXAMPLES = [
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
];
export class CdkA11yExamplesModule {
}
CdkA11yExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    A11yModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkA11yExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkA11yExamplesModule });
/** @nocollapse */ CdkA11yExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkA11yExamplesModule_Factory(t) { return new (t || CdkA11yExamplesModule)(); }, imports: [[
            A11yModule,
            MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkA11yExamplesModule, { declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule,
        MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkA11yExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    A11yModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDJCQUEyQixFQUM1QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOztBQUVwRyxPQUFPLEVBQUMsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQzs7TUFFM0YsUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwyQkFBMkI7Q0FDNUI7QUFVRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFSakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQjs7eURBQ1kscUJBQXFCO3lIQUFyQixxQkFBcUIsa0JBUHZCO1lBQ1AsVUFBVTtZQUNWLGVBQWU7U0FDaEI7d0ZBSVUscUJBQXFCLG1CQWJoQyw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDJCQUEyQixhQUt6QixVQUFVO1FBQ1YsZUFBZSxhQVJqQiw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtrREFXaEIscUJBQXFCO2NBUmpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge1xuICBGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZVxufSBmcm9tICcuL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGVcbn0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSwgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlLCBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUsXG4gIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSxcbiAgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEExMXlNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQTExeUV4YW1wbGVzTW9kdWxlIHtcbn1cblxuIl19