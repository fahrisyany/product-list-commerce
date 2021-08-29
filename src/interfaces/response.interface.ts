export interface ResponseInterface<T> {
  metadata: MetadataInterface;
  results:T
}

interface MetadataInterface {
  page: number;
  pages: number;
  query: string;
}
