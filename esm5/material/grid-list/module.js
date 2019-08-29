import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFFeEYsSUFBTSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRjtJQUFBO0lBU0EsQ0FBQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw2QkFBQztDQUFBLEFBVEQsSUFTQztTQURZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHtHcmlkTGlzdER5bmFtaWNFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3Qtb3ZlcnZpZXcvZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgR3JpZExpc3REeW5hbWljRXhhbXBsZSxcbiAgR3JpZExpc3RPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=