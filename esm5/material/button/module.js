import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
export { ButtonOverviewExample, ButtonTypesExample, };
var EXAMPLES = [
    ButtonOverviewExample,
    ButtonTypesExample,
];
var ButtonExamplesModule = /** @class */ (function () {
    function ButtonExamplesModule() {
    }
    ButtonExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return ButtonExamplesModule;
}());
export { ButtonExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRXZFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsa0JBQWtCLEdBQ25CLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGO0lBQUE7SUFTQSxDQUFDOztnQkFUQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztJQUVELDJCQUFDO0NBQUEsQUFURCxJQVNDO1NBRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0J1dHRvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9idXR0b24tb3ZlcnZpZXcvYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25UeXBlc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25UeXBlc0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25UeXBlc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=