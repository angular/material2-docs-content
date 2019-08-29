import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
var EXAMPLES = [
    RadioNgModelExample,
    RadioOverviewExample,
];
var RadioExamplesModule = /** @class */ (function () {
    function RadioExamplesModule() {
    }
    RadioExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatRadioModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return RadioExamplesModule;
}());
export { RadioExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBRTdFLElBQU0sUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtJQVVBLENBQUM7O2dCQVZBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCwwQkFBQztDQUFBLEFBVkQsSUFVQztTQURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge1JhZGlvTmdNb2RlbEV4YW1wbGV9IGZyb20gJy4vcmFkaW8tbmctbW9kZWwvcmFkaW8tbmctbW9kZWwtZXhhbXBsZSc7XG5pbXBvcnQge1JhZGlvT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=