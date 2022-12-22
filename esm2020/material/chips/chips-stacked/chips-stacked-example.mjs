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
ChipsStackedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsStackedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: ChipsStackedExample, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  <mat-chip-option *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip-option>\n</mat-chip-listbox>", styles: ["mat-chip {\n  max-width: 200px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "value"], outputs: ["change"] }, { kind: "component", type: i2.MatChipOption, selector: "mat-basic-chip-option, mat-chip-option", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  <mat-chip-option *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip-option>\n</mat-chip-listbox>", styles: ["mat-chip {\n  max-width: 200px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFReEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTUUsb0JBQWUsR0FBZ0I7WUFDN0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7U0FDOUIsQ0FBQztLQUNIOzt1SEFQWSxtQkFBbUI7MkdBQW5CLG1CQUFtQiw2RENoQmhDLGdQQUltQjtrR0RZTixtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoaXBDb2xvciB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3I6IFRoZW1lUGFsZXR0ZTtcbn1cblxuLyoqXG4gKiBAdGl0bGUgU3RhY2tlZCBjaGlwc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNTdGFja2VkRXhhbXBsZSB7XG4gIGF2YWlsYWJsZUNvbG9yczogQ2hpcENvbG9yW10gPSBbXG4gICAge25hbWU6ICdub25lJywgY29sb3I6IHVuZGVmaW5lZH0sXG4gICAge25hbWU6ICdQcmltYXJ5JywgY29sb3I6ICdwcmltYXJ5J30sXG4gICAge25hbWU6ICdBY2NlbnQnLCBjb2xvcjogJ2FjY2VudCd9LFxuICAgIHtuYW1lOiAnV2FybicsIGNvbG9yOiAnd2Fybid9LFxuICBdO1xufVxuIiwiPG1hdC1jaGlwLWxpc3Rib3ggY2xhc3M9XCJtYXQtbWRjLWNoaXAtc2V0LXN0YWNrZWRcIiBhcmlhLWxhYmVsPVwiQ29sb3Igc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcC1vcHRpb24gKm5nRm9yPVwibGV0IGNoaXAgb2YgYXZhaWxhYmxlQ29sb3JzXCIgc2VsZWN0ZWQgW2NvbG9yXT1cImNoaXAuY29sb3JcIj5cbiAgICB7e2NoaXAubmFtZX19XG4gIDwvbWF0LWNoaXAtb3B0aW9uPlxuPC9tYXQtY2hpcC1saXN0Ym94PiJdfQ==