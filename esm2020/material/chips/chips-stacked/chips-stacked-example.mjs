import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/chips";
/**
 * @title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
    }
}
ChipsStackedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.0", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsStackedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-rc.0", type: ChipsStackedExample, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n", styles: ["mat-chip {\n  max-width: 200px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { kind: "directive", type: i2.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.0", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n", styles: ["mat-chip {\n  max-width: 200px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFReEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTUUsb0JBQWUsR0FBZ0I7WUFDN0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7U0FDOUIsQ0FBQztLQUNIOztxSEFQWSxtQkFBbUI7eUdBQW5CLG1CQUFtQiw2RENoQmhDLDJOQUtBO2dHRFdhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hpcENvbG9yIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGFja2VkIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc1N0YWNrZWRFeGFtcGxlIHtcbiAgYXZhaWxhYmxlQ29sb3JzOiBDaGlwQ29sb3JbXSA9IFtcbiAgICB7bmFtZTogJ25vbmUnLCBjb2xvcjogdW5kZWZpbmVkfSxcbiAgICB7bmFtZTogJ1ByaW1hcnknLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICB7bmFtZTogJ0FjY2VudCcsIGNvbG9yOiAnYWNjZW50J30sXG4gICAge25hbWU6ICdXYXJuJywgY29sb3I6ICd3YXJuJ30sXG4gIF07XG59XG4iLCI8bWF0LWNoaXAtbGlzdCBjbGFzcz1cIm1hdC1jaGlwLWxpc3Qtc3RhY2tlZFwiIGFyaWEtbGFiZWw9XCJDb2xvciBzZWxlY3Rpb25cIj5cbiAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBjaGlwIG9mIGF2YWlsYWJsZUNvbG9yc1wiIHNlbGVjdGVkIFtjb2xvcl09XCJjaGlwLmNvbG9yXCI+XG4gICAge3tjaGlwLm5hbWV9fVxuICA8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19