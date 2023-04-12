import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/form-field";
/**
 * @title Chips with input
 */
class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push({ name: value });
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits[index].name = value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: ChipsInputExample, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    <mat-chip-row *ngFor=\"let fruit of fruits\"\n                  (removed)=\"remove(fruit)\"\n                  [editable]=\"true\"\n                  (edited)=\"edit(fruit, $event)\"\n                  [aria-description]=\"'press enter to edit ' + fruit.name\">\n      {{fruit.name}}\n      <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }] }); }
}
export { ChipsInputExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', template: "<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    <mat-chip-row *ngFor=\"let fruit of fruits\"\n                  (removed)=\"remove(fruit)\"\n                  [editable]=\"true\"\n                  (edited)=\"edit(fruit, $event)\"\n                  [aria-description]=\"'press enter to edit ' + fruit.name\">\n      {{fruit.name}}\n      <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipGrid\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\"/>\n  </mat-chip-grid>\n</mat-form-field>", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPeEM7O0dBRUc7QUFDSCxNQUthLGlCQUFpQjtJQUw5QjtRQU1FLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDUix1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQVUsQ0FBQztRQUN0RCxXQUFNLEdBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0tBcUN0RTtJQW5DQyxHQUFHLENBQUMsS0FBd0I7UUFDMUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLGdCQUFnQjtRQUNoQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDakM7UUFFRCx3QkFBd0I7UUFDeEIsS0FBSyxDQUFDLFNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFZLEVBQUUsS0FBeUI7UUFDMUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7cUhBdkNVLGlCQUFpQjt5R0FBakIsaUJBQWlCLDJEQ2hCOUIsaTRCQW1CaUI7O1NESEosaUJBQWlCO2tHQUFqQixpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT01NQSwgRU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoaXBFZGl0ZWRFdmVudCwgTWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuZXhwb3J0IGludGVyZmFjZSBGcnVpdCB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgd2l0aCBpbnB1dFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1pbnB1dC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtaW5wdXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNJbnB1dEV4YW1wbGUge1xuICBhZGRPbkJsdXIgPSB0cnVlO1xuICByZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXMgPSBbRU5URVIsIENPTU1BXSBhcyBjb25zdDtcbiAgZnJ1aXRzOiBGcnVpdFtdID0gW3tuYW1lOiAnTGVtb24nfSwge25hbWU6ICdMaW1lJ30sIHtuYW1lOiAnQXBwbGUnfV07XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnZhbHVlIHx8ICcnKS50cmltKCk7XG5cbiAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZydWl0cy5wdXNoKHtuYW1lOiB2YWx1ZX0pO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZVxuICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcbiAgfVxuXG4gIHJlbW92ZShmcnVpdDogRnJ1aXQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnJ1aXRzLmluZGV4T2YoZnJ1aXQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgZWRpdChmcnVpdDogRnJ1aXQsIGV2ZW50OiBNYXRDaGlwRWRpdGVkRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlLnRyaW0oKTtcblxuICAgIC8vIFJlbW92ZSBmcnVpdCBpZiBpdCBubyBsb25nZXIgaGFzIGEgbmFtZVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGZydWl0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFZGl0IGV4aXN0aW5nIGZydWl0XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZydWl0cy5pbmRleE9mKGZydWl0KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mcnVpdHNbaW5kZXhdLm5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBGcnVpdHM8L21hdC1sYWJlbD5cbiAgPG1hdC1jaGlwLWdyaWQgI2NoaXBHcmlkIGFyaWEtbGFiZWw9XCJFbnRlciBmcnVpdHNcIj5cbiAgICA8bWF0LWNoaXAtcm93ICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmcnVpdHNcIlxuICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlKGZydWl0KVwiXG4gICAgICAgICAgICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAoZWRpdGVkKT1cImVkaXQoZnJ1aXQsICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW2FyaWEtZGVzY3JpcHRpb25dPVwiJ3ByZXNzIGVudGVyIHRvIGVkaXQgJyArIGZydWl0Lm5hbWVcIj5cbiAgICAgIHt7ZnJ1aXQubmFtZX19XG4gICAgICA8YnV0dG9uIG1hdENoaXBSZW1vdmUgW2F0dHIuYXJpYS1sYWJlbF09XCIncmVtb3ZlICcgKyBmcnVpdC5uYW1lXCI+XG4gICAgICAgIDxtYXQtaWNvbj5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtY2hpcC1yb3c+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTmV3IGZydWl0Li4uXCJcbiAgICAgICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwR3JpZFwiXG4gICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxuICAgICAgICAgICBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiXG4gICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiLz5cbiAgPC9tYXQtY2hpcC1ncmlkPlxuPC9tYXQtZm9ybS1maWVsZD4iXX0=