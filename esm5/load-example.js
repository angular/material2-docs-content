/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __awaiter, __generator, __read } from "tslib";
import { EXAMPLE_COMPONENTS } from './example-module';
/** Asynchronously loads the specified example and returns its component factory. */
export function loadExampleFactory(name, injector) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, componentName, module, _b, moduleFactoryExports, moduleExports, moduleFactory, componentType;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = EXAMPLE_COMPONENTS[name], componentName = _a.componentName, module = _a.module;
                    return [4 /*yield*/, Promise.all([
                            import(module.importSpecifier + '/index.ngfactory'),
                            import(module.importSpecifier)
                        ])];
                case 1:
                    _b = __read.apply(void 0, [_c.sent(), 2]), moduleFactoryExports = _b[0], moduleExports = _b[1];
                    moduleFactory = moduleFactoryExports[module.name + "NgFactory"];
                    componentType = moduleExports[componentName];
                    return [2 /*return*/, moduleFactory.create(injector)
                            .componentFactoryResolver.resolveComponentFactory(componentType)];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbG9hZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFHSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRCxvRkFBb0Y7QUFDcEYsTUFBTSxVQUFnQixrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsUUFBa0I7Ozs7OztvQkFFakUsS0FBMEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQWpELGFBQWEsbUJBQUEsRUFBRSxNQUFNLFlBQUEsQ0FBNkI7b0JBRVgscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQzs0QkFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsa0JBQWtCLENBQUM7NEJBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO3lCQUMvQixDQUFDLEVBQUE7O29CQUhJLEtBQUEsc0JBQXdDLFNBRzVDLEtBQUEsRUFISyxvQkFBb0IsUUFBQSxFQUFFLGFBQWEsUUFBQTtvQkFJcEMsYUFBYSxHQUF5QixvQkFBb0IsQ0FBSSxNQUFNLENBQUMsSUFBSSxjQUFXLENBQUMsQ0FBQztvQkFDdEYsYUFBYSxHQUFjLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDOUQsc0JBQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7NkJBQ2xDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxFQUFDOzs7O0NBQ3BFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeSwgSW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeSwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VYQU1QTEVfQ09NUE9ORU5UU30gZnJvbSAnLi9leGFtcGxlLW1vZHVsZSc7XG5cbi8qKiBBc3luY2hyb25vdXNseSBsb2FkcyB0aGUgc3BlY2lmaWVkIGV4YW1wbGUgYW5kIHJldHVybnMgaXRzIGNvbXBvbmVudCBmYWN0b3J5LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRFeGFtcGxlRmFjdG9yeShuYW1lOiBzdHJpbmcsIGluamVjdG9yOiBJbmplY3RvcilcbiAgICA6IFByb21pc2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PiB7XG4gIGNvbnN0IHtjb21wb25lbnROYW1lLCBtb2R1bGV9ID0gRVhBTVBMRV9DT01QT05FTlRTW25hbWVdO1xuICAvLyBUT0RPKGRldnZlcnNpb24pOiByZW1vdmUgdGhlIE5nRmFjdG9yeSBpbXBvcnQgd2hlbiB0aGUgYC0tY29uZmlnPXZpZXctZW5naW5lYCBzd2l0Y2ggaXMgZ29uZS5cbiAgY29uc3QgW21vZHVsZUZhY3RvcnlFeHBvcnRzLCBtb2R1bGVFeHBvcnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBpbXBvcnQobW9kdWxlLmltcG9ydFNwZWNpZmllciArICcvaW5kZXgubmdmYWN0b3J5JyksXG4gICAgaW1wb3J0KG1vZHVsZS5pbXBvcnRTcGVjaWZpZXIpXG4gIF0pO1xuICBjb25zdCBtb2R1bGVGYWN0b3J5OiBOZ01vZHVsZUZhY3Rvcnk8YW55PiA9IG1vZHVsZUZhY3RvcnlFeHBvcnRzW2Ake21vZHVsZS5uYW1lfU5nRmFjdG9yeWBdO1xuICBjb25zdCBjb21wb25lbnRUeXBlOiBUeXBlPGFueT4gPSBtb2R1bGVFeHBvcnRzW2NvbXBvbmVudE5hbWVdO1xuICByZXR1cm4gbW9kdWxlRmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpXG4gICAgLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcbn1cblxuIl19