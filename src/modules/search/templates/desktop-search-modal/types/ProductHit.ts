import { Hit } from '@algolia/client-search';
import { ProductVariant } from "@medusajs/medusa"
import Thumbnail from "@modules/products/components/thumbnail"

type ProductRecord = {
  id: string
  title: string
  handle: string
  description: string
  thumbnail: string
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
  url: string;
};

type WithAutocompleteAnalytics<THit> = THit & {
  __autocomplete_indexName: string;
  __autocomplete_queryID: string;
};

export type ProductHit = WithAutocompleteAnalytics<Hit<ProductRecord>>;
