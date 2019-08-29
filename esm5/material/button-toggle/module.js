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
    return ButtonToggleExamplesModule;
}());
export { ButtonToggleExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFDTCw2QkFBNkIsRUFDOUIsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0sMkRBQTJELENBQUM7QUFDbkUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFFcEcsSUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtDQUM1QixDQUFDO0FBRUY7SUFBQTtJQVNBLENBQUM7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsaUNBQUM7Q0FBQSxBQVRELElBU0M7U0FEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZVxufSBmcm9tICcuL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBCdXR0b25Ub2dnbGVFeGNsdXNpdmVFeGFtcGxlXG59IGZyb20gJy4vYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUvYnV0dG9uLXRvZ2dsZS1leGNsdXNpdmUtZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblRvZ2dsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdG9nZ2xlLW92ZXJ2aWV3L2J1dHRvbi10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlRXhjbHVzaXZlRXhhbXBsZSxcbiAgQnV0dG9uVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9nZ2xlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19