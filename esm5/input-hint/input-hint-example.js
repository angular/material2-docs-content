import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample = tslib_1.__decorate([
        Component({
            selector: 'input-hint-example',
            template: "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n  \n</form>\n",
            styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
        })
    ], InputHintExample);
    return InputHintExample;
}());
export { InputHintExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGludC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2lucHV0LWhpbnQvaW5wdXQtaGludC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQUw1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHlXQUFzQzs7U0FFdkMsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0IHdpdGggaGludHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtaGludC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1oaW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1oaW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0SGludEV4YW1wbGUge31cbiJdfQ==