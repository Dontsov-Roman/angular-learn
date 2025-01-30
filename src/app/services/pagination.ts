export type Pagination = {
    offset?: number;
    limit?: number;
}
export type PaginationMeta = Pagination & {
    total: number;
}