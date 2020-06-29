import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import * as i0 from "@angular/core";
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, };
const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
];
export class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
ButtonToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); }, imports: [[
            MatButtonToggleModule,
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample], imports: [MatButtonToggleModule,
        MatIconModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonToggleModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCw2QkFBNkIsRUFDOUIsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0sMkRBQTJELENBQUM7QUFDbkUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBRXBHLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsNEJBQTRCLEVBQzVCLDJCQUEyQixHQUM1QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtDQUM1QixDQUFDO0FBV0YsTUFBTSxPQUFPLDBCQUEwQjs7OERBQTFCLDBCQUEwQjttSUFBMUIsMEJBQTBCLGtCQVI1QjtZQUNQLHFCQUFxQjtZQUNyQixhQUFhO1NBQ2Q7d0ZBS1UsMEJBQTBCLG1CQWRyQyw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDJCQUEyQixhQUt6QixxQkFBcUI7UUFDckIsYUFBYSxhQVJmLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO2tEQVloQiwwQkFBMEI7Y0FUdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlXG59IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS9idXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10b2dnbGUtb3ZlcnZpZXcvYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZU92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9nZ2xlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19