import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample = tslib_1.__decorate([
        Component({
            selector: 'chips-stacked-example',
            template: "<mat-chip-list class=\"mat-chip-list-stacked\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n",
            styles: ["mat-chip {\n  max-width: 200px;\n}\n"]
        })
    ], ChipsStackedExample);
    return ChipsStackedExample;
}());
export { ChipsStackedExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLG9CQUFlLEdBQWdCO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1NBQzlCLENBQUM7SUFDSixDQUFDO0lBUFksbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsc01BQXlDOztTQUUxQyxDQUFDO09BQ1csbUJBQW1CLENBTy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hpcENvbG9yIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGFja2VkIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc1N0YWNrZWRFeGFtcGxlIHtcbiAgYXZhaWxhYmxlQ29sb3JzOiBDaGlwQ29sb3JbXSA9IFtcbiAgICB7bmFtZTogJ25vbmUnLCBjb2xvcjogdW5kZWZpbmVkfSxcbiAgICB7bmFtZTogJ1ByaW1hcnknLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICB7bmFtZTogJ0FjY2VudCcsIGNvbG9yOiAnYWNjZW50J30sXG4gICAge25hbWU6ICdXYXJuJywgY29sb3I6ICd3YXJuJ31cbiAgXTtcbn1cbiJdfQ==