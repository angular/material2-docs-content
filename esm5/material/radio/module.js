import * as tslib_1 from "tslib";
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
    RadioExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatRadioModule,
                FormsModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], RadioExamplesModule);
    return RadioExamplesModule;
}());
export { RadioExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUU3RSxJQUFNLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDckIsQ0FBQztBQVdGO0lBQUE7SUFDQSxDQUFDO0lBRFksbUJBQW1CO1FBVC9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsV0FBVzthQUNaO1lBQ0QsWUFBWSxFQUFFLFFBQVE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztPQUNXLG1CQUFtQixDQUMvQjtJQUFELDBCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7UmFkaW9OZ01vZGVsRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcmFkaW8tb3ZlcnZpZXcvcmFkaW8tb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBSYWRpb05nTW9kZWxFeGFtcGxlLFxuICBSYWRpb092ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==