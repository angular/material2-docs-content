import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export declare class FileNode {
    children: FileNode[];
    filename: string;
    type: any;
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
export declare class FileDatabase {
    dataChange: BehaviorSubject<FileNode[]>;
    readonly data: FileNode[];
    constructor();
    initialize(): void;
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(value: any, level: number): FileNode[];
}
/**
 * @title Tree with nested nodes
 */
export declare class CdkTreeNestedExample {
    nestedTreeControl: NestedTreeControl<FileNode>;
    nestedDataSource: MatTreeNestedDataSource<FileNode>;
    constructor(database: FileDatabase);
    private _getChildren;
    hasNestedChild: (_: number, nodeData: FileNode) => boolean;
}
