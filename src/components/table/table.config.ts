import { useMemo } from "react";
import {
  TableInstance,
  TableState,
  UsePaginationInstanceProps,
} from "react-table";
import { useGetAllCountriesQuery } from "../../app/rtk/query/countryApi";
import { shortFormat } from "../../app/utils/utils";

export type CountryDataTable = {
  // [Property in keyof Country]: string;
  name: string;
  capital: string;
  population: string;
  languages: string;
};

export type ColumnConfig = {
  Header: string;
  columns: {
    Header: string;
    accessor: string;
  }[];
}[];

export type TableDefinition = {
  columns: ColumnConfig;
  readonly data: Partial<CountryDataTable>[];
};

export type TablePagination = {
  pageIndex: number;
  pageSize: number;
};

export type TableTypeWorkaround<T extends Object> = TableInstance<T> &
  UsePaginationInstanceProps<TableDefinition> & {
    state: TablePagination;
  };

export type TablePaginationHookFunctions = {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: number[];
  pageCount: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  state: TableState<TableDefinition> & TablePagination;
};

export const useTableConfig = () => {
  const { data } = useGetAllCountriesQuery();
  const dataMap = useMemo(
    (): CountryDataTable[] =>
      data?.map((c) => ({
        name: c.name,
        capital: c.capital,
        population: shortFormat(c.population).toString(),
        languages: c.languages.map((l) => l.name).join(", "),
        area: c?.area && shortFormat(c.area),
      })) ?? [],
    [data]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Country",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Population",
            accessor: "population",
          },
          {
            Header: "Km²",
            accessor: "area",
          },
          {
            Header: "Capital",
            accessor: "capital",
          },
          {
            Header: "Languages",
            accessor: "languages",
          },
        ],
      },
    ],
    []
  );

  return {
    columns,
    data: dataMap,
  };
};
