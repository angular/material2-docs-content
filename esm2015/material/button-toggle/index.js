import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import { ButtonToggleHarnessExample } from './button-toggle-harness/button-toggle-harness-example';
import { ButtonToggleFormsExample } from './button-toggle-forms/button-toggle-forms-example';
import { ButtonToggleModeExample } from './button-toggle-mode/button-toggle-mode-example';
import * as i0 from "@angular/core";
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, ButtonToggleHarnessExample, ButtonToggleFormsExample, ButtonToggleModeExample, };
const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
    ButtonToggleModeExample,
];
export class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵfac = function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); };
ButtonToggleExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
ButtonToggleExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            MatButtonToggleModule,
            MatIconModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonToggleModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample], imports: [FormsModule,
        MatButtonToggleModule,
        MatIconModule,
        ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLDRCQUE0QixFQUM1QiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN4Qix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQWFGLE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NEVBQTFCLDBCQUEwQjtnRkFWNUI7WUFDUCxXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixtQkFBbUI7U0FDcEI7dUZBS1UsMEJBQTBCO2NBWHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSwwQkFBMEIsbUJBbkJyQyw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHVCQUF1QixhQUtyQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixtQkFBbUIsYUFickIsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZVxufSBmcm9tICcuL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlXG59IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblRvZ2dsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3L2J1dHRvbi10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblRvZ2dsZUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10b2dnbGUtaGFybmVzcy9idXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblRvZ2dsZUZvcm1zRXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWZvcm1zL2J1dHRvbi10b2dnbGUtZm9ybXMtZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblRvZ2dsZU1vZGVFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10b2dnbGUtbW9kZS9idXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZUhhcm5lc3NFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVGb3Jtc0V4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZU1vZGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZUhhcm5lc3NFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVGb3Jtc0V4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZU1vZGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=