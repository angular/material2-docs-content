/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
export { ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
];
export class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MatButtonToggleModule,
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBRXBHLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsNEJBQTRCLEVBQzVCLDJCQUEyQixHQUM1QixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0NBQzVCO0FBVUQsTUFBTSxPQUFPLDBCQUEwQjs7O1lBUnRDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlXG59IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS9idXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10b2dnbGUtb3ZlcnZpZXcvYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGUsXG4gIEJ1dHRvblRvZ2dsZU92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9nZ2xlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19