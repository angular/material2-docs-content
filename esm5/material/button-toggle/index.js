import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import * as i0 from "@angular/core";
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, };
var EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
];
var ButtonToggleExamplesModule = /** @class */ (function () {
    function ButtonToggleExamplesModule() {
    }
    ButtonToggleExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonToggleModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    ButtonToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
    ButtonToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); }, imports: [[
                MatButtonToggleModule,
                MatIconModule,
            ]] });
    return ButtonToggleExamplesModule;
}());
export { ButtonToggleExamplesModule };
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCw2QkFBNkIsRUFDOUIsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0sMkRBQTJELENBQUM7QUFDbkUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBRXBHLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsNEJBQTRCLEVBQzVCLDJCQUEyQixHQUM1QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtDQUM1QixDQUFDO0FBRUY7SUFBQTtLQVNDOztnQkFUQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztrRUFDWSwwQkFBMEI7dUlBQTFCLDBCQUEwQixrQkFQNUI7Z0JBQ1AscUJBQXFCO2dCQUNyQixhQUFhO2FBQ2Q7cUNBM0JIO0NBZ0NDLEFBVEQsSUFTQztTQURZLDBCQUEwQjt3RkFBMUIsMEJBQTBCLG1CQWJyQyw2QkFBNkI7UUFDN0IsNEJBQTRCO1FBQzVCLDJCQUEyQixhQUt6QixxQkFBcUI7UUFDckIsYUFBYSxhQVJmLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCO2tEQVdoQiwwQkFBMEI7Y0FSdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZVxufSBmcm9tICcuL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1vdmVydmlldy9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=