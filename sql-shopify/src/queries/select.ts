import { APPS_CATEGORIES, CATEGORIES, REVIEWS } from "../shopify-table-names";

export const selectCount = (table: string): string => {
  return `select count(*) as c from ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `select * from ${table} where id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `select * from ${CATEGORIES} where title = '${title}'`;
}

export const selectAppCategoriesByAppId = (appId: number): string => {
  return (
    `select
      apps.title as app_title, category_id, categories.title as category_title
    from apps_categories
    join apps
      on apps.id = app_id
    join categories
      on categories.id = category_id
    where apps.id = ${appId}`
  )
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `select count(distinct ${columnName}) as c from ${tableName}`;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `select * from ${REVIEWS} where app_id = ${appId} and author = '${author}'`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `select ${columnName} from ${tableName}`;
};

