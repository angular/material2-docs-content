import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
var EXAMPLES = [
    IconOverviewExample,
    IconSvgExample,
];
var IconExamplesModule = /** @class */ (function () {
    function IconExamplesModule() {
    }
    IconExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return IconExamplesModule;
}());
export { IconExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2ljb24vbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUUzRCxJQUFNLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2YsQ0FBQztBQUVGO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCx5QkFBQztDQUFBLEFBUkQsSUFRQztTQURZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7SWNvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9pY29uLW92ZXJ2aWV3L2ljb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0ljb25TdmdFeGFtcGxlfSBmcm9tICcuL2ljb24tc3ZnL2ljb24tc3ZnLWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgSWNvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgSWNvblN2Z0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEljb25FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=