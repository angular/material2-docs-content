/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/button-toggle/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import * as i0 from "@angular/core";
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
];
let ButtonToggleExamplesModule = /** @class */ (() => {
    class ButtonToggleExamplesModule {
    }
    ButtonToggleExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonToggleModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ ButtonToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
    /** @nocollapse */ ButtonToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); }, imports: [[
                MatButtonToggleModule,
                MatIconModule,
            ]] });
    return ButtonToggleExamplesModule;
})();
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFDTCw0QkFBNEIsRUFDN0IsTUFBTSwyREFBMkQsQ0FBQztBQUNuRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7QUFFcEcsT0FBTyxFQUNMLDZCQUE2QixFQUM3Qiw0QkFBNEIsRUFDNUIsMkJBQTJCLEdBQzVCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwyQkFBMkI7Q0FDNUI7QUFFRDtJQUFBLE1BU2EsMEJBQTBCOzs7Z0JBVHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztxRkFDWSwwQkFBMEI7MEpBQTFCLDBCQUEwQixrQkFSNUI7Z0JBQ1AscUJBQXFCO2dCQUNyQixhQUFhO2FBQ2Q7cUNBM0JIO0tBaUNDO1NBRFksMEJBQTBCO3dGQUExQiwwQkFBMEIsbUJBZHJDLDZCQUE2QjtRQUM3Qiw0QkFBNEI7UUFDNUIsMkJBQTJCLGFBS3pCLHFCQUFxQjtRQUNyQixhQUFhLGFBUmYsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QiwyQkFBMkI7a0RBWWhCLDBCQUEwQjtjQVR0QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFxQjtvQkFDckIsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZVxufSBmcm9tICcuL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlL2J1dHRvbi10b2dnbGUtZXhjbHVzaXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1vdmVydmlldy9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=