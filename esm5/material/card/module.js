import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
var EXAMPLES = [
    CardFancyExample,
    CardOverviewExample,
];
var CardExamplesModule = /** @class */ (function () {
    function CardExamplesModule() {
    }
    CardExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                MatButtonModule,
                MatCardModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], CardExamplesModule);
    return CardExamplesModule;
}());
export { CardExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFFMUUsSUFBTSxRQUFRLEdBQUc7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFVRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGtCQUFrQjtRQVI5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZUFBZTtnQkFDZixhQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO09BQ1csa0JBQWtCLENBQzlCO0lBQUQseUJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7Q2FyZEZhbmN5RXhhbXBsZX0gZnJvbSAnLi9jYXJkLWZhbmN5L2NhcmQtZmFuY3ktZXhhbXBsZSc7XG5pbXBvcnQge0NhcmRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2FyZC1vdmVydmlldy9jYXJkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2FyZEZhbmN5RXhhbXBsZSxcbiAgQ2FyZE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=