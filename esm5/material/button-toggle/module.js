import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
var EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
];
var ButtonToggleExamplesModule = /** @class */ (function () {
    function ButtonToggleExamplesModule() {
    }
    ButtonToggleExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                MatButtonToggleModule,
                MatIconModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], ButtonToggleExamplesModule);
    return ButtonToggleExamplesModule;
}());
export { ButtonToggleExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBRXBHLElBQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQVVGO0lBQUE7SUFDQSxDQUFDO0lBRFksMEJBQTBCO1FBUnRDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBcUI7Z0JBQ3JCLGFBQWE7YUFDZDtZQUNELFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7T0FDVywwQkFBMEIsQ0FDdEM7SUFBRCxpQ0FBQztDQUFBLEFBREQsSUFDQztTQURZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlXG59IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIEJ1dHRvblRvZ2dsZUV4Y2x1c2l2ZUV4YW1wbGVcbn0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS9idXR0b24tdG9nZ2xlLWV4Y2x1c2l2ZS1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10b2dnbGUtb3ZlcnZpZXcvYnV0dG9uLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJztcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2VFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlLFxuICBCdXR0b25Ub2dnbGVPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=