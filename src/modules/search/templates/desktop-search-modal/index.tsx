import useToggleState from "@lib/hooks/use-toggle-state"
import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import Modal from "@modules/common/components/modal"
import Search from "@modules/common/icons/search"
import Arrow from "@modules/common/icons/arrow-right"
import DesktopHit from "@modules/search/components/desktop-hit"
import DesktopHits from "@modules/search/components/desktop-hits"
import SearchBox from "@modules/search/components/search-box"
import { InstantSearch } from "react-instantsearch-hooks-web"
import { autocomplete } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import algoliasearch from 'algoliasearch/lite';
import plugins from "../../../../../cypress/plugins"
import { useEffect, useState } from "react"

const DesktopSearchModal = () => {
  const { state, close, open } = useToggleState()
  const [suggestion, setSuggestion ] = useState([])
  useEffect(() => {
    fetch('https://query-suggestions.eu.algolia.com/1/configs/products_query_suggestions', {
      headers: {
        'X-Algolia-API-Key': '77e1494b713e4078aa05d33b2d92961f',
        'X-Algolia-Application-Id': '8H2M3V30O4',
        'Content-Type': 'application/json'
      },
      method: 'GET',
      compressed: true
    })
    .then(response => response.json())
    .then(data => setSuggestion(data.sourceIndices[0].facets))
    .catch(error => console.error(error));
    
  } ,[])
  
  return (
    <>
      <button onClick={open} className="flex items-center gap-x-2 h-full">
        <Search />
        Search
      </button>

      <Modal isOpen={state} close={close} size="large">
        <Modal.Body>
          <InstantSearch
            indexName={SEARCH_INDEX_NAME}
            searchClient={searchClient}
          >
            <div className="flex flex-col h-full">
              <div className="w-full flex items-center gap-x-2 bg-gray-50 p-4">
                <Search />
                <SearchBox />
              </div>
              <div className="overflow-y-scroll h-full no-scrollbar mt-3">
                <div>
                  { 
                    suggestion.filter((suggestion: any)  => suggestion.attribute == 'sh').map(filteredSuggestion => console.log(filteredSuggestion))
                  }
                  {/* (
                      <div>
                        <div className="flex w-full items-center gap-3 py-2 px-1 cursor-pointer">
                          <div><Search >
                          <div className="flex-grow">{filteredSuggestion.attribute}</div>
                          <div> <Arrow /></div>
                        </div>
                        <div className="flex-grow">{filteredSuggestion.attribute}</div>
                      </div>
                    ) */}
                </div>
                <DesktopHits hitComponent={DesktopHit} />
              </div>
            </div>
          </InstantSearch>
        </Modal.Body>
      </Modal>
    </>
  );
}

const appId = 'latency';
const apiKey = '6be0576ff61c053d5f9a3225e2a90f76';
// const searchClient = algoliasearch(appId, apiKey); 

// autocomplete({
//   container: '#autocomplete',
//   placeholder: 'Search',
//   openOnFocus: true,
//   plugins: [],
// });
// console.log(querySuggestionsPlugin)

export default DesktopSearchModal
