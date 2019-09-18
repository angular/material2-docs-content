import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
export { GridListDynamicExample, GridListOverviewExample, };
var EXAMPLES = [
    GridListDynamicExample,
    GridListOverviewExample,
];
var GridListExamplesModule = /** @class */ (function () {
    function GridListExamplesModule() {
    }
    GridListExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatGridListModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return GridListExamplesModule;
}());
export { GridListExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFFeEYsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7SUFBQTtJQVNBLENBQUM7O2dCQVRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsNkJBQUM7Q0FBQSxBQVRELElBU0M7U0FEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRHcmlkTGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7R3JpZExpc3REeW5hbWljRXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlJztcbmltcG9ydCB7R3JpZExpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgR3JpZExpc3REeW5hbWljRXhhbXBsZSxcbiAgR3JpZExpc3RPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgR3JpZExpc3REeW5hbWljRXhhbXBsZSxcbiAgR3JpZExpc3RPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=