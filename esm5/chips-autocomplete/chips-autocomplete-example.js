import * as tslib_1 from "tslib";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
/**
 * @title Chips Autocomplete
 */
var ChipsAutocompleteExample = /** @class */ (function () {
    function ChipsAutocompleteExample() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl();
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    ChipsAutocompleteExample.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.fruitCtrl.setValue(null);
        }
    };
    ChipsAutocompleteExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsAutocompleteExample.prototype.selected = function (event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    ChipsAutocompleteExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
    };
    tslib_1.__decorate([
        ViewChild('fruitInput'),
        tslib_1.__metadata("design:type", ElementRef)
    ], ChipsAutocompleteExample.prototype, "fruitInput", void 0);
    tslib_1.__decorate([
        ViewChild('auto'),
        tslib_1.__metadata("design:type", MatAutocomplete)
    ], ChipsAutocompleteExample.prototype, "matAutocomplete", void 0);
    ChipsAutocompleteExample = tslib_1.__decorate([
        Component({
            selector: 'chips-autocomplete-example',
            template: "<mat-form-field class=\"example-chip-list\">\n  <mat-chip-list #chipList>\n    <mat-chip\n      *ngFor=\"let fruit of fruits\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(fruit)\">\n      {{fruit}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      placeholder=\"New fruit...\"\n      #fruitInput\n      [formControl]=\"fruitCtrl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n      {{fruit}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n",
            styles: [".example-chip-list {\n  width: 100%;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChipsAutocompleteExample);
    return ChipsAutocompleteExample;
}());
export { ChipsAutocompleteExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2hpcHMtYXV0b2NvbXBsZXRlL2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFrRCxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRyxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTlDOztHQUVHO0FBTUg7SUFjRTtRQUFBLGlCQUlDO1FBakJELFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQix1QkFBa0IsR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUU5QixXQUFNLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFNdkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFwRCxDQUFvRCxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsc0NBQUcsR0FBSCxVQUFJLEtBQXdCO1FBQzFCLGtEQUFrRDtRQUNsRCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUUxQixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDaEM7WUFFRCx3QkFBd0I7WUFDeEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDbEI7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCx5Q0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNsQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsMkNBQVEsR0FBUixVQUFTLEtBQW1DO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sMENBQU8sR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBaER3QjtRQUF4QixTQUFTLENBQUMsWUFBWSxDQUFDOzBDQUFhLFVBQVU7Z0VBQW1CO0lBQy9DO1FBQWxCLFNBQVMsQ0FBQyxNQUFNLENBQUM7MENBQWtCLGVBQWU7cUVBQUM7SUFaekMsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsODZCQUE4Qzs7U0FFL0MsQ0FBQzs7T0FDVyx3QkFBd0IsQ0E0RHBDO0lBQUQsK0JBQUM7Q0FBQSxBQTVERCxJQTREQztTQTVEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NPTU1BLCBFTlRFUn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LCBNYXRDaGlwSW5wdXRFdmVudCwgTWF0QXV0b2NvbXBsZXRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBBdXRvY29tcGxldGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSB7XG4gIHZpc2libGUgPSB0cnVlO1xuICBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgYWRkT25CbHVyID0gdHJ1ZTtcbiAgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xuICBmcnVpdEN0cmwgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRGcnVpdHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBmcnVpdHM6IHN0cmluZ1tdID0gWydMZW1vbiddO1xuICBhbGxGcnVpdHM6IHN0cmluZ1tdID0gWydBcHBsZScsICdMZW1vbicsICdMaW1lJywgJ09yYW5nZScsICdTdHJhd2JlcnJ5J107XG5cbiAgQFZpZXdDaGlsZCgnZnJ1aXRJbnB1dCcpIGZydWl0SW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2F1dG8nKSBtYXRBdXRvY29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlcmVkRnJ1aXRzID0gdGhpcy5mcnVpdEN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgbWFwKChmcnVpdDogc3RyaW5nIHwgbnVsbCkgPT4gZnJ1aXQgPyB0aGlzLl9maWx0ZXIoZnJ1aXQpIDogdGhpcy5hbGxGcnVpdHMuc2xpY2UoKSkpO1xuICB9XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIC8vIEFkZCBmcnVpdCBvbmx5IHdoZW4gTWF0QXV0b2NvbXBsZXRlIGlzIG5vdCBvcGVuXG4gICAgLy8gVG8gbWFrZSBzdXJlIHRoaXMgZG9lcyBub3QgY29uZmxpY3Qgd2l0aCBPcHRpb25TZWxlY3RlZCBFdmVudFxuICAgIGlmICghdGhpcy5tYXRBdXRvY29tcGxldGUuaXNPcGVuKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcblxuICAgICAgLy8gQWRkIG91ciBmcnVpdFxuICAgICAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgIHRoaXMuZnJ1aXRzLnB1c2godmFsdWUudHJpbSgpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5mcnVpdEN0cmwuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGZydWl0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnJ1aXRzLmluZGV4T2YoZnJ1aXQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWQoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZydWl0cy5wdXNoKGV2ZW50Lm9wdGlvbi52aWV3VmFsdWUpO1xuICAgIHRoaXMuZnJ1aXRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5mcnVpdEN0cmwuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5hbGxGcnVpdHMuZmlsdGVyKGZydWl0ID0+IGZydWl0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDApO1xuICB9XG59XG4iXX0=