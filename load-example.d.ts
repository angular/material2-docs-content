/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentFactory, Injector } from '@angular/core';
/** Asynchronously loads the specified example and returns its component factory. */
export declare function loadExampleFactory(name: string, injector: Injector): Promise<ComponentFactory<any>>;
