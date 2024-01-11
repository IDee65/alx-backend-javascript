import { RowElement, RowID } from './interface';

declare function insertRow(row: RowElement): number;
declare function updateRow(id: RowID, row: RowElement): number;
declare function deleteRow(id: RowID): void;
