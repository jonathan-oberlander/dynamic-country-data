import { FC } from "react";
import { useTable, usePagination, TableState } from "react-table";
import { Styles } from "./table.style";
import {
  TableDefinition,
  TablePagination,
  TablePaginationHookFunctions,
  TableTypeWorkaround,
  useTableConfig,
} from "./table.config";
import { Pagination } from "./pagination";
import { Caption, Heading } from "../styled/typography";

const Table: FC<TableDefinition> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    ...rest
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: [],
        pageIndex: 1,
        pageSize: 10,
      } as TableState<TablePaginationHookFunctions> & TablePagination,
    },
    usePagination
  ) as unknown as TableTypeWorkaround<TableDefinition>;

  return (
    <>
      <Pagination {...rest} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <Heading>{column.render("Header")}</Heading>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      <Caption>{cell.render("Cell")}</Caption>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

function StatTable() {
  const { columns, data } = useTableConfig();

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default StatTable;
