import { Component } from '@angular/core';
/**
 * @title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-clearable-example',
                    template: "<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n",
                    styles: [".example-form-field {\n  width: 200px;\n}\n"]
                }] }
    ];
    return InputClearableExample;
}());
export { InputClearableExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtY2xlYXJhYmxlL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO1FBTUUsVUFBSyxHQUFHLFVBQVUsQ0FBQztJQUNyQixDQUFDOztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsOFRBQTZDOztpQkFFOUM7O0lBR0QsNEJBQUM7Q0FBQSxBQVBELElBT0M7U0FGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0IHdpdGggYSBjbGVhciBidXR0b25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENsZWFyYWJsZUV4YW1wbGUge1xuICB2YWx1ZSA9ICdDbGVhciBtZSc7XG59XG4iXX0=