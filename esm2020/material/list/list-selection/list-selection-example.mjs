import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/list";
/**
 * @title List with selection
 */
export class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.1", type: ListSelectionExample, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i2.MatListOption, selector: "mat-list-option", inputs: ["checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBS0UsaUJBQVksR0FBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNqRjs7c0hBRlksb0JBQW9COzBHQUFwQixvQkFBb0IsOERDVGpDLCtOQVNBO2dHREFhLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdGlvbkV4YW1wbGUge1xuICB0eXBlc09mU2hvZXM6IHN0cmluZ1tdID0gWydCb290cycsICdDbG9ncycsICdMb2FmZXJzJywgJ01vY2Nhc2lucycsICdTbmVha2VycyddO1xufVxuIiwiPG1hdC1zZWxlY3Rpb24tbGlzdCAjc2hvZXM+XG4gIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHNob2Ugb2YgdHlwZXNPZlNob2VzXCI+XG4gICAge3tzaG9lfX1cbiAgPC9tYXQtbGlzdC1vcHRpb24+XG48L21hdC1zZWxlY3Rpb24tbGlzdD5cblxuPHA+XG4gIE9wdGlvbnMgc2VsZWN0ZWQ6IHt7c2hvZXMuc2VsZWN0ZWRPcHRpb25zLnNlbGVjdGVkLmxlbmd0aH19XG48L3A+XG4iXX0=